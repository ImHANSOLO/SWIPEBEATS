<template>
  <section
    class="flex h-full flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-900/40 p-6 text-white shadow-[0_0_35px_-15px_rgba(0,255,255,0.6)]"
  >
    <div class="space-y-4">
      <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
        <div class="flex h-full items-center justify-center text-white/50">
          Cover Preview
        </div>
      </div>

      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs text-white/50 uppercase">
          <span class="rounded-full border border-cyan-400/40 px-3 py-1">New</span>
          <span class="rounded-full border border-pink-400/40 px-3 py-1">Popular</span>
        </div>
        <h2 class="text-2xl font-semibold tracking-wide">Digital Rain</h2>
        <p class="text-sm text-cyan-300">Matrix Echo</p>
        <div class="flex items-center gap-4 text-xs text-white/50">
          <span>3:28</span>
          <span>Ambient • Synthwave</span>
        </div>
      </div>

      <div class="h-12 rounded-xl border border-cyan-400/20 bg-cyan-400/5">
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center gap-6">
      <button
        class="h-14 w-14 rounded-full border border-red-500/40 bg-red-500/20 text-sm font-semibold text-red-300 shadow-[0_0_25px_-5px_rgba(255,0,0,0.7)]"
      >
        ✕
      </button>
      <button
        class="h-14 w-14 rounded-full border border-cyan-400/40 bg-cyan-400/20 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_-5px_rgba(0,255,255,0.7)]"
      >
        ✓
      </button>
    </div>
  </section>
</template>
