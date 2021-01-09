<template>
    <layout>
        <div class="container mx-auto pt-16 px-4 ">
            <div class="popular-movies ">
                <h2
                    class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
                >
                    popular movies
                </h2>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-8"
                >
                    <movie-card
                        v-for="movie in popularMovies"
                        :key="movie.id"
                        :movie="movie"
                        :genres="genres"
                    ></movie-card>
                </div>
            </div>

            <div class="now-playing-movies py-24">
                <h2
                    class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
                >
                    now playing
                </h2>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-8"
                >
                    <movie-card
                        v-for="movie in nowPlayingMovies"
                        :key="movie.id"
                        :movie="movie"
                        :genres="genres"
                    ></movie-card>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import MovieCard from "@/components/MovieCard";
export default {
    components: {
        Layout,
        MovieCard
    },
    props: {
        popularMovies: Array,
        genres: Object,
        nowPlayingMovies: Array
    }
};
</script>

<style></style>
