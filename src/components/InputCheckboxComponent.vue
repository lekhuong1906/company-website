<template>
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
            <input :id="id" type="checkbox" class="item__input--checkbox" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" required />
        </div>
        <label :for="id" class="item__label">
            {{ labelTitle }}
        </label>
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
    labelTitle: {
        type: String,
        default: 'Tick to accept'
    },
    modelValue: {
        require: true
    }
})
</script>

<style scoped>
.item__input--checkbox {
    @apply w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800
}

.item__label {
    @apply ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer
}
</style>