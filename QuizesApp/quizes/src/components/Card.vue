<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from "vue-router";

  const router = useRouter();
  const { quiz } = defineProps(['quiz']);

  const navigate_to_quiz = () => {
    router.push(`/quiz/${quiz.id}`);
  };

</script>

<template>
  <div class="card" @click="navigate_to_quiz()">
    <div class="card-image">
      <img :src="quiz.img" alt="quiz-image">
    </div>
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>Всего вопросов: {{ quiz.questions.length }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 310px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all .3s ease;
  }

  .card-image {
    width: 100%;
    height: 190px;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
    transition: all .3s ease;
  }

  .card:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }

  .card:hover .card-image img {
    transform: scale(1.1);
  }

  .card .card-text {
    padding: 10px;
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>