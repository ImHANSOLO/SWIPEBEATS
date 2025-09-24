<template>
  <section
    class="sb-fade-in-right flex h-full flex-col gap-5 rounded-3xl border border-fuchsia-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-purple-900/40 p-5 text-white shadow-[0_0_35px_-15px_rgba(255,0,255,0.6)] sm:gap-6 sm:p-6"
  >
    <div class="overflow-hidden rounded-2xl border border-white/5 bg-white/5">
      <img
        v-if="track.cover"
        :src="track.cover"
        :alt="track.title"
        class="h-56 w-full object-cover sm:h-64"
      />
      <div v-else class="flex h-56 items-center justify-center text-white/50 sm:h-64">
        Cover Preview
      </div>
    </div>

    <div class="space-y-2 sm:space-y-3">
      <h2 class="text-2xl font-semibold tracking-wide sm:text-[1.65rem]">{{ track.title }}</h2>
      <p class="text-sm text-fuchsia-300 uppercase sm:text-base">{{ track.artist }}</p>
    </div>

    <div class="space-y-4 text-white/70">
      <div>
        <div class="flex items-center justify-between text-xs text-white/40">
          <span>{{ formatDuration(track.duration) }}</span>
          <span v-if="genreText">{{ genreText }}</span>
        </div>
        <div class="mt-2 h-2 rounded-full bg-white/10">
          <div class="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400"></div>
        </div>
      </div>

      <div class="flex items-center justify-center gap-4 text-sm text-white/80">
        <button class="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10" type="button">More</button>
        <button class="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/20 text-base font-semibold text-cyan-100 transition hover:bg-cyan-400/30 sm:h-12 sm:w-12" type="button"><el-icon><CaretRight /></el-icon></button>
        <button class="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10" type="button">Next</button>
      </div>

      <div class="h-14 rounded-2xl border border-white/10 bg-white/5"></div>

      <div class="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
        <p class="mb-1 text-white/40 uppercase tracking-[0.3em]">Now Playing</p>
        <p class="text-sm text-white/80">In this electric dream</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { CaretRight } from '@element-plus/icons-vue';

const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});

const bullet = '\u2022';

const genreText = computed(() => {
  if (!Array.isArray(props.track.genre) || props.track.genre.length === 0) {
    return '';
  }
  let result = '';
  for (let i = 0; i < props.track.genre.length; i++) {
    if (i === 0) {
      result = props.track.genre[i];
    } else {
      result += ' ' + bullet + ' ' + props.track.genre[i];
    }
  }
  return result;
});

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
</script>