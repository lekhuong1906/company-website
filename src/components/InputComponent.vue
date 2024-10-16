<template>
    <div>
        <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ title }}
        </label>
        <input :type="type" :id="id" class="item__input" :placeholder="placeholder" required :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup>
defineEmits([
    'update:modelValue'
]);
defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'text'
    },
    placeholder : {
        type: String,
        default: 'Enter to write something ...'
    },
    modelValue : {
        required : true
    }
})
</script>

<style scoped>
.item__input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>
