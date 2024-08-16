<script setup>
  import { defineProps, defineEmits } from 'vue';

  const emit = defineEmits(['optionSelected']);
  const emit_selected_option = (is_correct) => {
    emit("optionSelected", is_correct)
  };

  const { question } = defineProps(['question']);

</script>
<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
      <div 
        v-for="option in question.options"
        :key="option.id"
        class="option"
        @click="emit_selected_option(option.isCorrect)"
      >
        <p class="option-label">{{ option.label }}</p>
        <p class="option-value">{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .question-container {
    margin-top: 20px;
  }

  .question {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .option {
    display: flex;
    margin-bottom: 0.7rem;
    cursor: pointer;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: 60px;
  }

  .option-label {
    background-color: bisque;
    width: 60px;
    height: 100%;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-value {
    padding: 1rem;
    height: 100%;
    border: 2px solid bisque;
    background-color: #ffeedd;
    width: 500px;
  }
</style>