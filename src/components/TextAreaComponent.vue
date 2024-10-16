<template>
    <div>
        <label for="message" class="item__label">
            {{ title }}
        </label>
        <textarea class="item__textarea" :id="id" rows="4" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"></textarea>
    </div>
</template>

<script setup>
defineEmits([
    'update:modelValue'
])
defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: 'Enter to write something ...'
    },
    modelValue : {
        required : true
    }
})
</script>

<style scoped>
.item__label {
    @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white
}

.item__textarea {
    @apply block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>