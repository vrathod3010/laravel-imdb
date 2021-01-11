<template>
    <div ref="searchDropdown" class="relative mt-3 md:mt-0">
        <input
            v-model="search"
            type="text"
            class="bg-gray-600 rounded-full w-64 px-4 py-1 pl-8 focus:outline-none focus:shadow-outline"
            placeholder="Search"
        />
        <div class="absolute top-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-current text-gray-300 w-5 mt-2 ml-2"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>

        <div v-if="loading" class="spinner top-0 right-0 mt-4 mr-4"></div>
        <div
            v-if="!loading && search.length > 0"
            @click="search = ''"
            style="top:-.12rem"
            class="absolute cursor-pointer  w-4 h-4 right-0  mr-5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current text-gray-300 w-5 mt-2 ml-2"
                viewBox="0 0 20 20"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div v-if="isOpen" class="absolute z-50 bg-gray-600 rounded w-64 mt-4">
            <ul v-if="results.length > 0">
                <li
                    v-for="movie in results"
                    :key="movie.id"
                    class="border-b border-gray-700"
                >
                    <inertia-link
                        :href="`/movies/${movie.id}`"
                        class=" hover:bg-gray-700 px-3 py-3 flex items-center"
                    >
                        <img
                            v-if="movie.poster_path"
                            class="w-8"
                            :src="
                                `https://image.tmdb.org/t/p/w92/${movie.poster_path}`
                            "
                            alt=""
                        />
                        <img
                            v-else
                            src="https://via.placeholder.com/50x75"
                            alt="poster"
                            class="w-8"
                        />

                        <span class="ml-4">{{ movie.title }}</span>
                    </inertia-link>
                </li>
            </ul>
            <div
                v-if="search.length > 2 && results.length == 0"
                class="px-3 py-3"
            >
                No results for {{ search }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            results: [],
            search: "",
            loading: false,
            isOpen: true
        };
    },
    mounted() {
        this.$refs.searchDropdown.addEventListener(
            "blur",
            e => {
                // this.search = "";
            },
            true
        );
    },
    watch: {
        search: function(value) {
            this.loading = true;
            axios
                .get("/api/search?query=" + encodeURIComponent(value))
                .then(res => (this.results = res.data))
                .catch(err => console.log(err))
                .finally(() => (this.loading = false));
        }
    }
};
</script>

<style scoped></style>
