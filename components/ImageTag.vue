<template>
    <img :src='image ? image : "/images/fpo-0"+random_number+".jpg"' :alt="alt || ''" :class="image.class || classes " width="768" height="768">
</template>

<script>
export default {
    name: "ImageTag",
    props: {
        image: {},
        classes: '',
        alt: ''
    },
    data() {
        let random_number = Math.floor(Math.random(2) * Math.floor(2)) + 1;
        return {
            random_number: random_number
        }
    }
}
</script>