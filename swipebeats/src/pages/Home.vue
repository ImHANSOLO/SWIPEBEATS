<template>
  <div class="px-6 py-12 lg:py-16">
    <div class="mx-auto max-w-5xl">
      <header class="header text-center">
        <h1 class="header__title">SWIPEBEATS</h1>
        <p class="mt-2 uppercase header__subtitle">Discover your sound</p>
      </header>

      <div :class="layoutStackClass">
        <div :class="deckContainerClass">
          <SwipeDeck
            :tracks="tracks"
            :deck-index="deckIndex"
            :layout-mode="layoutMode"
            @skip="onSkip"
            @choose="onChoose"
          />
        </div>

        <div v-if="showPlayingCard" :class="playingContainerClass">
          <PlayingCard :track="tracks[currentIndex]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SwipeDeck from '../components/SwipeDeck.vue';
import PlayingCard from '../components/PlayingCard.vue';
import tracksData from '../data/tracks.json';

const tracks = ref(tracksData);
const layoutMode = ref('solo');
const deckIndex = ref(0);
const currentIndex = ref(null);

const showPlayingCard = computed(() => {
  return layoutMode.value === 'split' && currentIndex.value !== null;
});

const layoutStackClass = computed(() => {
  if (layoutMode.value === 'solo') {
    return 'mt-8 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center';
  }
  return 'mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch';
});

const deckContainerClass = computed(() => {
  if (layoutMode.value === 'solo') {
    return 'sb-pane sb-pane--solo w-full max-w-xl';
  }
  return 'sb-pane sb-pane--split-left flex-1';
});

const playingContainerClass = computed(() => {
  return 'sb-pane sb-pane--split-right flex-1';
});

function nextIndex(startIndex) {
  const total = tracks.value.length;
  if (total === 0) {
    return 0;
  }
  const next = startIndex + 1;
  if (next >= total) {
    return 0;
  }
  return next;
}

function onSkip() {
  deckIndex.value = nextIndex(deckIndex.value);
}

function onChoose() {
  if (tracks.value.length === 0) {
    return;
  }
  const chosen = deckIndex.value;
  deckIndex.value = nextIndex(deckIndex.value);
  window.setTimeout(() => {
    currentIndex.value = chosen;
    layoutMode.value = 'split';
  }, 340);
}
</script>

<style scoped>
.header {
  color: rgba(255, 255, 255, 0.8);
}

.header__title {
  font-size: clamp(2.25rem, 1.5rem + 1.4vw, 3rem);
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.header__subtitle {
  font-size: clamp(0.75rem, 0.62rem + 0.35vw, 0.95rem);
  letter-spacing: clamp(0.3rem, 0.18rem + 0.45vw, 0.5rem);
  color: rgba(255, 255, 255, 0.4);
}
</style>
