<template>
    <!-- <h1>Hoạt động</h1> -->
    <div class="swiper-container">
        <swiper :slides-per-view="1" :pagination="{ clickable: true }" :navigation="true" :loop="true"
            :autoplay="{ delay: 3000 }">
            <swiper-slide v-for="(item, index) in items" :key="index">
                
                    <img class="w-full h-full" :src="item.image" :alt="'Slide ' + (index + 1)" />
                
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import image from '../assets/images/anh-1.jpg'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            items: [
                { image: image },
                { image: image },
                { image: image },
            ],
        };
    },
};
</script>

<style>
.swiper-container {
    width: 100%;
    height: fit-content
    /* Set your desired height */
}

.swiper-slide img {
    width: 100%;
    height: fit-content;
}
</style>