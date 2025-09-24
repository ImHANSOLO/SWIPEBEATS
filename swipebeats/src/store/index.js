import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    // TODO: load tracks from local JSON and track playback state
    tracks: [],
    currentTrackId: null,
    isPlaying: false,
  }),
  getters: {
    // TODO: derive current track, queue order, and theme tokens
  },
  mutations: {
    // TODO: update playback state, queue, and theme palette
  },
  actions: {
    // TODO: bootstrap store by hydrating track data and preloading assets
  },
});

export default store;
