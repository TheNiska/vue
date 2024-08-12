<script setup>
  import { ref } from "vue";
  const count = ref(0);

  const add_to_count = () => {
    count.value++;
  };

  const sub_from_count = () => {
    count.value--; 
  };

</script>

<template>
  <main>
    <div>
      <h4>Текущий показатель</h4>
      <h1>
        {{ count }}
      </h1>
      <button @click="sub_from_count()">-</button>
      <button @click="add_to_count()">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    text-align: center;
  }
</style>
