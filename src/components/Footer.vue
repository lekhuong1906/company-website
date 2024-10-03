<template>
    <footer class="py-8 px-[120px] first-letter:*:selection:bg-blue-100 bg-[#d9e4ea] py-10">
        <div class="max-w-7xl mx-auto">
            <!-- Top Section -->
            <div class="flex justify-between items-center gap-4">
                <!-- Logo and Trademark -->
                <div class="basis-1/3 text-lg font-bold text-blue-600">
                    Cadence<span class="text-brown-500">.</span>
                    <p class="text-sm text-gray-600 mt-2">
                        © Cadence®. The Cadence logo and the names associated with Cadence’s products are trademarks of
                        Cadence Logistics and/or its affiliates.
                    </p>
                </div>

                <!-- Links Sections -->
                <div class="basic-2/3">
                    <div class="grid grid-cols-4 gap-8 text-gray-700">
                        <div>
                            <h3 class="font-semibold mb-3">INFO</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:underline">About Cadence</a></li>
                                <li><a href="#" class="hover:underline">Help & Support</a></li>
                                <li><a href="#" class="hover:underline">FAQs</a></li>
                                <li><a href="#" class="hover:underline">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-3">SERVICES</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:underline">Transportation</a></li>
                                <li><a href="#" class="hover:underline">Packaging</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-3">COMPANY</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" class="hover:underline">Careers</a></li>
                                <li><a href="#" class="hover:underline">Management</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-3">CONTACT</h3>
                            <ul class="flex space-x-4">
                                <li v-for="(icon, index) in icons" :key="index">
                                    <a :href="icon.link">
                                        <img :src="icon.src">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="mt-10 text-center text-gray-600">
                Cadence Logistics 2022.
            </div>
        </div>
    </footer>

</template>

<script setup>
import { reactive, ref } from 'vue';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
console.log(facebook);

const icons = {
    'facebook': {
        name: 'Facebook',
        link: 'https://facebook.com',
        src: facebook
    },
    'instagram': {
        name: 'Instagram',
        link: 'https://instagram.com',
        src: instagram
    },
    'twitter': {
        name: 'Twitter',
        link: 'https://twitter.com',
        src: twitter
    },
    'linkedin': {
        name: 'Linkedin',
        link: 'https://linkedin.com',
        src: linkedin
    }
}

</script>

<style lang="css" scoped></style>