<script setup lang="ts">
import { ref, watch } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useThemeStore } from "@/stores/useThemeStore";

const themeStore = useThemeStore();

let foo = ref("sam");
let bar = ref(1);

const receivedId = ref<number | null>(null);
const receivedValue = ref("");
const message = ref("test defineModel");

function handleChange(id: number) {
  receivedId.value = id;
}
function handleValue(value: string) {
  receivedValue.value = value;
}

watch(
  () => themeStore.theme,
  (val) => {
    document.documentElement.className = val;
  }
);
</script>

<template>
  <div>
    <div>=====</div>
    <button @click="themeStore.toggleTheme">切換主題</button>
    <h1>父組件</h1>
    <div>{{ receivedId }}</div>
    <div>{{ receivedValue }}</div>
    <div>{{ message }}</div>
    <div>=====</div>
    <HelloWorld
      :foo="foo"
      :bar="bar"
      @change="handleChange"
      @update="handleValue"
      v-model="message"
    />
  </div>
</template>

<style>
html.dark {
  background-color: white;
  color: black;
}
html.dark {
  background-color: black;
  color: white;
}
</style>
