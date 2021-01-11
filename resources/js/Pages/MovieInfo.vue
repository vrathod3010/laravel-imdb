<template>
    <layout
        ><div class="movie-info border-b border-gray-700">
            <div
                :style="heroImageStyle"
                class="hidden lg:block hero-image h-80  shadow-inner "
            ></div>
            <div
                class="container mx-auto px-4 pt-16 pb-8 items-center lg:items-start flex flex-col lg:flex-row"
            >
                <img
                    :src="
                        `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    "
                    alt="movie image"
                    class="w-96 transform lg:-translate-y-40 "
                    width="md:24rem w-64"
                />
                <div class="mt-12 lg:mt-0 lg:ml-24 transform ">
                    <h2 class="text-4xl font-semibold">{{ movie.title }}</h2>
                    <div class="flex items-center text-gray-300 text-sm mt-1">
                        <svg
                            class="fill-current text-orange-400 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <span class="ml-1">{{ movie.vote_average * 10 }}%</span>
                        <span class="mx-2">|</span>
                        <span>{{ releaseDate(movie.release_date) }}</span>
                        <span class="mx-2">|</span>
                        <div class="text-gray-300 text-sm">
                            {{ genresString }}
                        </div>
                    </div>

                    <p class="text-gray-200 mt-8 text-justify">
                        {{ movie.overview }}
                    </p>

                    <div class="mt-12">
                        <h4 class="text-white font-semibold">Featured Cast</h4>
                        <div class="flex mt-4 divide-x-2 divide-orange-400">
                            <div
                                v-for="crew in movieCrew"
                                class="px-4"
                                :key="crew.id + crew.job"
                            >
                                <div>{{ crew.name }}</div>
                                <div class="text-sm text-gray-300">
                                    {{ crew.job }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="videoUrl" class="mt-12">
                        <a
                            :href="videoUrl"
                            class="flex focus:outline-none focus:shadow-outline items-center bg-orange-400 text-gray-800 rounded font-semibold px-5 py-4 hover:bg-orange-500 transition ease-in-out duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-6 current-fill mr-2"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Play Trailer
                        </a>
                    </div>
                    <!-- <div
                        style="background-color: rgba(0, 0, 0, .5);"
                        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
                    >
                        <div
                            class="container mx-auto lg:px-32 rounded-lg overflow-y-auto"
                        >
                            <div class="bg-gray-900 rounded">
                                <div class="flex justify-end pr-4 pt-2">
                                    <button
                                        @click="isOpen = false"
                                        class="text-3xl leading-none hover:text-gray-300"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div class="modal-body px-8 py-8">
                                    <div
                                        class="responsive-container overflow-hidden relative"
                                        style="padding-top: 56.25%"
                                    >
                                        <iframe
                                            class="responsive-iframe absolute top-0 left-0 w-full h-full"
                                            :src="
                                                `https://www.youtube.com/embed/${movie.videos.results[0].key}`
                                            "
                                            style="border:0;"
                                            allow="autoplay; encrypted-media"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <div
            v-if="movieCast.length > 0"
            class=" movie-cast border-b border-gray-700"
        >
            <div class="container mx-auto px-4 py-16">
                <h2 class="text-4xl font-semibold">Cast</h2>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-8"
                >
                    <cast-card
                        v-for="cast in movieCast"
                        :key="cast.id"
                        :cast="cast"
                    ></cast-card>
                </div>
            </div>
        </div>

        <div
            v-if="movie.images.backdrops.length > 0"
            class=" movie-cast border-b border-gray-700"
        >
            <div class="container mx-auto px-4 py-16">
                <h2 class="text-4xl font-semibold">Images</h2>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-8"
                >
                    <div
                        v-for="img in movie.images.backdrops"
                        :key="img.id"
                        class="mt-8"
                    >
                        <img
                            loading="lazy"
                            data-zoomable
                            :src="
                                `https://image.tmdb.org/t/p/original/${img.file_path}`
                            "
                            alt="movie images"
                        />
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import moment from "moment";
import Layout from "@/Shared/Layout";
import CastCard from "@/components/CastCard";
export default {
    components: {
        Layout,
        CastCard
    },
    props: {
        movie: Object
    },
    methods: {
        releaseDate(date) {
            return moment(date).format("MMM Do YYYY");
        }
    },
    computed: {
        heroImageStyle() {
            Array.prototype.sample = function() {
                return this[Math.floor(Math.random() * this.length)];
            };

            if (this.movie.images.backdrops.length > 0) {
                return (
                    'background: url("' +
                    "https://image.tmdb.org/t/p/original/" +
                    this.movie.images.backdrops.sample().file_path +
                    '");'
                );
            } else {
                return "background: black";
            }
        },
        genresString() {
            let result = "";
            for (let i = 0; i < this.movie.genres.length; i++) {
                if (this.movie.genres.length - 1 == i) {
                    result += this.movie.genres[i].name;
                } else {
                    result += this.movie.genres[i].name + ", ";
                }
            }
            return result;
        },
        movieCrew() {
            return this.movie.credits.crew.splice(0, 3);
        },
        videoUrl() {
            if (this.movie.videos.results.length > 0) {
                return (
                    "https://youtube.com/watch?v=" +
                    this.movie.videos.results[0].key
                );
            }
            return null;
        },
        movieCast() {
            return this.movie.credits.cast
                .filter(i => i.profile_path !== null)
                .splice(0, 12);
        }
    }
};
</script>

<style scoped>
.hero-image {
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
