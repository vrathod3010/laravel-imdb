<template>
    <div class="relative mt-3 md:mt-0">
        <input
            v-model.lazy="search"
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

        <div class="absolute bg-gray-600 rounded w-64 mt-4">
            <ul>
                <li
                    v-for="movie in results"
                    :key="movie.id"
                    class="border-b border-gray-700"
                >
                    <a
                        :href="`/movies/${movie.id}`"
                        class="block hover:bg-gray-700 px-3 py-3"
                    >
                        {{ movie.title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            results: [],
            search: ""
        };
    },
    watch: {
        search: function(value) {
            axios
                .get("/api/search?query=" + encodeURIComponent(value))
                .then(res => (this.results = res.data))
                .catch(err => console.log(err));
        }
    }
};
</script>

<style scoped></style>
