<template>
    <div class="relative slide">
        <div class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
            <ol class="z-50 flex w-4/12 justify-center">
                <li v-for="(img, i) in images" :key="i"
                    class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
            </ol>
        </div>
        <div class="carousel-inner relative overflow-hidden w-full">
            <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i"
                :class="`${active === i ? 'active' : 'left-full'}`"
                class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                <img class="block w-full h-96" :src="img" alt="First slide" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        images: [
            "https://picsum.photos/id/237/1024/800",
            "https://picsum.photos/id/238/1024/800",
            "https://picsum.photos/id/239/1024/800"
        ],
        active: 0
    }),
    mounted() {
        let i = 0;
        setInterval(() => {
            if (i > this.images.length - 1) {
                i = 0;
            }
            this.active = i;
            i++;
        }, 2000);
    }
}
</script>

<style>
.left-full {
    left: -100%;
}

.carousel-item {
    float: left;
    position: relative;
    display: block;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
}

.carousel-item.active {
    left: 0;
}
</style>
