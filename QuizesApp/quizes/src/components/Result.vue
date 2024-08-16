<script setup>
  import { defineProps } from "vue";
  import { RouterLink } from "vue-router";

  const { correct_answers_num, questions_len } = defineProps(['correct_answers_num', 'questions_len']);
</script>

<template>
  <div class="results">
    <h1>Yor results...</h1>
    <p>{{ correct_answers_num }} / {{ questions_len }}</p>
    <RouterLink to="/">Вернуться назад</RouterLink>
  </div>
</template>

<style scoped>
  .results {
    text-align: center;
    padding: 2rem 0;
  }

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    font-size: 3rem;
    font-weight: bolder;
    color: #777;
  }


</style>