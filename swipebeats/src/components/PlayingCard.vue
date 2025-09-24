<template>
  <section
    class="flex h-full flex-col gap-5 rounded-3xl border border-fuchsia-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-purple-900/40 p-6 text-white shadow-[0_0_35px_-15px_rgba(255,0,255,0.6)]"
  >
    <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
      <div class="flex h-full items-center justify-center text-white/50">
        Playing Preview
      </div>
    </div>

    <div class="space-y-1">
      <h2 class="text-2xl font-semibold tracking-wide">Cyber Dreams</h2>
      <p class="text-sm text-fuchsia-300 uppercase">Neon Pulse</p>
    </div>

    <div class="space-y-3 text-white/70">
      <div>
        <div class="flex items-center justify-between text-xs text-white/40">
          <span>2:24</span>
          <span>3:42</span>
        </div>
        <div class="mt-2 h-2 rounded-full bg-white/10">
          <div class="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400"></div>
        </div>
      </div>

      <div class="flex items-center justify-center gap-4 text-sm text-white/80">
        <button class="rounded-full border border-white/10 px-3 py-2">···</button>
        <button class="rounded-full border border-cyan-400/50 bg-cyan-400/20 px-5 py-4 text-base font-semibold text-cyan-100">
          ⏯
        </button>
        <button class="rounded-full border border-white/10 px-3 py-2">⏭</button>
      </div>

      <div class="h-16 rounded-2xl border border-white/10 bg-white/5">
      </div>

      <div class="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
        <p class="mb-1 text-white/40 uppercase tracking-[0.3em]">Now Playing</p>
        <p class="text-sm text-white/80">In this electric dream</p>
      </div>
    </div>
  </section>
</template>
