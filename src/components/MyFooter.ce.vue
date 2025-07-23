<script setup lang="ts">
defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  onTrigger: [value: { message: string }]
}>()

const handleClick = () => {
  emit('onTrigger', { message: 'Footer Clicked !' })
}
</script>

<template>
  <footer class="footer">
    <h3>{{ title || 'Default Footer' }}</h3>
    <button @click="handleClick">Click Me</button>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e7e7e7;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>