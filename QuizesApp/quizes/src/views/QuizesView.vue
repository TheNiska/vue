<script setup>
  import df from "../data/quizes.json";
  import {ref, watch} from "vue";
  import Card from "../components/Card.vue";
  import gsap from "gsap";


  const quizes = ref(df);
  const search = ref("");

  watch(search, () => {
    quizes.value = df.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
  });

  const beforeEnter = (e1) => {
    e1.style.transform = "translateY(-60px)";
    e1.style.opacity = 0;
  }

  const enter = (el) => {
    gsap.to(el, {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: el.dataset.index * 0.2
    })
  }
</script>

<template>
  <header>
    <h1>Тестирование</h1>
    <input v-model.trim="search" type="text" placeholder="Поиск...">
  </header>

  <div class="options-container">
    <TransitionGroup @before-enter="beforeEnter" @enter="enter" appear>
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    margin-right: 30px;
    font-weight: bolder;
  }

  header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 0.8rem;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>