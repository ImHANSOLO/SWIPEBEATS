<template>
  <div class="min-h-screen bg-[#0a0a0f] text-slate-100">
    <audio id="hidden-audio" crossorigin="anonymous" class="hidden"></audio>

    <!-- TODO: add floating menu + history icons to mirror reference UI -->

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>
