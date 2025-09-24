<template>
  <div class="px-6 py-12 lg:py-16">
    <div class="mx-auto flex max-w-5xl flex-col gap-10">
      <header class="header text-center">
        <h1 class="header__title">SWIPEBEATS</h1>
        <p class="mt-2 uppercase header__subtitle">Discover your sound</p>
      </header>
      <div class="flex flex-col gap-6 lg:flex-row">
        <div class="flex-1">
          <SwipeDeck />
        </div>
        <div class="flex-1">
          <PlayingCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwipeDeck from '../components/SwipeDeck.vue';
import PlayingCard from '../components/PlayingCard.vue';
</script>

<style scoped>
.header{
  color: rgba(255, 255, 255, 0.8);
}

.header__title {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #ffffff;
}

.header__subtitle {
  font-size: 14px;
  letter-spacing: 6px;
  color: rgba(255, 255, 255, 0.4);
}
</style>
