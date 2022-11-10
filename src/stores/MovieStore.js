import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const watchedMovies = computed(() =>
    movies.value.filter((el) => el.isWatched)
  );
  const totalCountMovies = computed(() => movies.value.length);

  const setActiveTab = (id) => {
    activeTab.value = id;
  };
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };
  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    toggleWatched,
    deleteMovie,
    setActiveTab,
  };
});
