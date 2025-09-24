<template>
  <section
    :class="['flex h-full flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-900/40 p-5 text-white shadow-[0_0_35px_-15px_rgba(0,255,255,0.6)] sm:p-6', layoutMode === 'solo' ? 'mx-auto max-w-xl' : '']"
  >
    <div class="relative h-full min-h-[360px]">
      <div
        v-if="stackedCards.length === 0"
        class="flex h-full items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-sm text-white/40"
      >
        No tracks available
      </div>
      <div
        v-for="item in stackedCards"
        :key="item.track.id ? item.track.id + '-' + item.position : item.position"
        :class="['sb-stack-card absolute inset-0 rounded-2xl border border-white/5 bg-white/5 backdrop-blur', cardLayerClass(item.position), flyRightClass(item.position)]"
        :style="cardStyle(item.position)"
      >
        <div v-if="item.position === 0" class="flex h-full flex-col justify-between p-6">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-2 text-xs uppercase text-white/50">
              <span class="rounded-full border border-cyan-400/40 px-3 py-1">New</span>
              <span class="rounded-full border border-pink-400/40 px-3 py-1">Popular</span>
            </div>
            <h2 class="text-2xl font-semibold tracking-wide sm:text-[1.65rem]">
              {{ item.track.title }}
            </h2>
            <p class="text-sm text-cyan-300 sm:text-base">{{ item.track.artist }}</p>
            <div class="flex flex-wrap items-center gap-3 text-xs text-white/50 sm:gap-4">
              <span>{{ formatDuration(item.track.duration) }}</span>
              <span v-if="buildGenreText(item.track.genre)">{{ buildGenreText(item.track.genre) }}</span>
            </div>
          </div>

          <div class="h-14 rounded-xl border border-cyan-400/20 bg-cyan-400/5"></div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center gap-6">
      <button
        class="h-11 w-11 rounded-full border border-red-500/40 bg-red-500/20 text-sm font-semibold text-red-300 shadow-[0_0_25px_-5px_rgba(255,0,0,0.7)] transition hover:bg-red-500/30 sm:h-12 sm:w-12"
        type="button"
        @click="handleSkip"
      >
        &times;
      </button>
      <button
        class="h-11 w-11 rounded-full border border-cyan-400/40 bg-cyan-400/20 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_-5px_rgba(0,255,255,0.7)] transition hover:bg-cyan-400/30 sm:h-12 sm:w-12"
        type="button"
        @click="handleChoose"
      >
        &#10003;
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  tracks: {
    type: Array,
    default: () => [],
  },
  deckIndex: {
    type: Number,
    default: 0,
  },
  layoutMode: {
    type: String,
    default: 'solo',
  },
});

const emit = defineEmits(['skip', 'choose']);

const flyRight = ref(false);
const isAnimating = ref(false);
const bullet = '\u2022';

const stackedCards = computed(() => {
  const items = [];
  const total = props.tracks.length;
  if (total === 0) {
    return items;
  }
  const limit = Math.min(3, total);
  for (let i = 0; i < limit; i++) {
    const pointer = (props.deckIndex + i) % total;
    items.push({
      track: props.tracks[pointer],
      position: i,
    });
  }
  return items;
});

watch(
  () => props.deckIndex,
  () => {
    isAnimating.value = false;
    flyRight.value = false;
  }
);

function cardStyle(position) {
  if (position === 0) {
    return {};
  }
  if (position === 1) {
    return {
      transform: 'translateY(18px) scale(0.96)',
      opacity: '0.85',
    };
  }
  if (position === 2) {
    return {
      transform: 'translateY(36px) scale(0.92)',
      opacity: '0.7',
    };
  }
  return {};
}

function cardLayerClass(position) {
  if (position === 0) {
    return 'z-30';
  }
  if (position === 1) {
    return 'z-20';
  }
  return 'z-10';
}

function flyRightClass(position) {
  if (position === 0 && flyRight.value) {
    return 'sb-fly-right';
  }
  return '';
}

function formatDuration(totalSeconds) {
  if (typeof totalSeconds !== 'number') {
    return '0:00';
  }
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  const secondsText = seconds < 10 ? '0' + seconds : '' + seconds;
  return minutes + ':' + secondsText;
}

function buildGenreText(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return '';
  }
  let result = '';
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      result = list[i];
    } else {
      result += ' ' + bullet + ' ' + list[i];
    }
  }
  return result;
}

function handleSkip() {
  if (isAnimating.value) {
    return;
  }
  if (stackedCards.value.length === 0) {
    return;
  }
  emit('skip');
}

function handleChoose() {
  if (isAnimating.value) {
    return;
  }
  if (stackedCards.value.length === 0) {
    return;
  }
  flyRight.value = true;
  isAnimating.value = true;
  window.setTimeout(() => {
    emit('choose');
    flyRight.value = false;
    isAnimating.value = false;
  }, 320);
}
</script>

<style scoped>
.sb-stack-card {
  transition: transform 280ms ease, opacity 280ms ease;
}
</style>
