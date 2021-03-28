<template>
    <img :src='"/images/fpo-0"+random_number+".jpg"' :alt="image.class || ''" :class="image.class || classes ">
</template>

<script>
export default {
    name: "ImageTag",
    props: {
        image: {},
        classes: ''
    },
    data() {
        let random_number = Math.floor(Math.random(1) * Math.floor(2)) + 1;
        return {
            random_number: random_number
        }
    }
}
</script>