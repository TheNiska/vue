<script setup>
  import { ref, watch, computed } from "vue";
  import Question from "@/components/Question.vue";
  import df from "@/data/quizes.json";
  import { useRoute } from "vue-router";
  import Result from "@/components/Result.vue";

  const route = useRoute();
  const quiz_data = df.find((x) => x.id === parseInt(route.params.quiz_id));
  const questions_len = quiz_data.questions.length;
  const current_question_index = ref(0);
  const correct_answers_num = ref(0);

  // const question_progress = ref(`${current_question_index.value + 1} / ${quiz_data.questions.length}`);
  // watch(current_question_index, () => {
  //   question_progress.value = `${current_question_index.value + 1} / ${quiz_data.questions.length}`
  // })

  const question_progress = computed(() => {
    return `${current_question_index.value + 1} / ${questions_len}`
  });

  const bar_percentage = computed(() => {
    return Math.round(current_question_index.value / questions_len * 10000) / 100
  });

  const onOptionSelected = (is_correct) => {
    if (is_correct) {
      correct_answers_num.value++;
    }
    current_question_index.value++;
  }

</script>

<template>
  <div>
    <header v-if="current_question_index < questions_len">
      <h4>Вопрос {{ question_progress }} {{ bar_percentage }} %</h4>
      <div class="bar"> 
        <div class="completion" :style="{width: `${bar_percentage}%`}"></div>
      </div>
    </header>
    <div style="overflow: hidden;">
      <Transition name="bounce" mode="out-in">
        <Question
          v-if="current_question_index < questions_len"
          :question="quiz_data.questions[current_question_index]"
          @optionSelected="onOptionSelected"
        />
        <Result v-else="current_question_index >= questions_len" :correct_answers_num="correct_answers_num" :questions_len="questions_len"/>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  header {
    margin-top: 20px;
  }

  header h4 {
    font-size: 30px;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
  }

  .completion {
    height: 100%;
    width: 0;
    background-color: bisque;
  }

  /* bounce transitions */
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>