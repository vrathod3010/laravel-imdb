<template>
    <div class="mt-8">
        <a href="#">
            <img
                :src="`https://image.tmdb.org/t/p/w300/${cast.profile_path}`"
                alt="cast profile"
                class="transition transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl"
            />
        </a>
        <div class="mt-2">
            <a href="#" class="text-lg mt-2 hover:text-gray-300">{{
                cast.name
            }}</a>
            <div class="text-sm text-gray-400">
                {{ cast.character }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cast: Object
    }
};
</script>

<style></style>
