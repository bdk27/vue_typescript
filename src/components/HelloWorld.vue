<script setup lang="ts">
import { ref } from "vue";

interface Props {
  foo: string;
  bar?: number;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  change: [id: number];
  update: [value: string];
}>();

let x = ref<string | number>(1);
let count = ref(0);
const msg = defineModel<string>();

function handleChange() {
  emit("change", count.value);
}
function handleUpdate() {
  emit("update", `Count is now ${count.value}`);
}
</script>

<template>
  <h1 class="text-red-500">test</h1>
  <p>{{ (x as number).toFixed(2) }}</p>
  <div>{{ props.foo }}</div>
  <div>{{ props.bar }}</div>
  <div>
    <p>計數: {{ count }}</p>
    <button @click="count++">增加</button>
    <br />
    <button @click="handleChange">發送 change 事件</button>
    <br />
    <button @click="handleUpdate">發送 update 事件</button>
  </div>
  <input type="text" v-model="msg" />
</template>

<style scoped></style>
