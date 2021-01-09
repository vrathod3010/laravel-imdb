<template>
    <div class="mt-8 ">
        <inertia-link :href="`/movies/${movie.id}`">
            <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                alt="parasite"
                srcset=""
                class="transition transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl"
            />
        </inertia-link>
        <div class="mt-2">
            <a href="#" class="text-lg mt-2  hover:text-gray-200"
                >{{ movie.title }}
            </a>

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
            </div>
            <div class="text-gray-300 text-sm flex flex-wrap">
                {{ genresString }}
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: {
        movie: Object,
        genres: Object
    },
    computed: {
        genresString() {
            let result = "";
            for (let i = 0; i < this.movie.genre_ids.length; i++) {
                if (this.movie.genre_ids.length - 1 == i) {
                    result += this.genres[this.movie.genre_ids[i]];
                } else {
                    result += this.genres[this.movie.genre_ids[i]] + ", ";
                }
            }

            return result;
        }
    },
    methods: {
        releaseDate(date) {
            return moment(date).format("MMM Do YYYY");
        }
    }
};
</script>

<style></style>
