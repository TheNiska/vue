<script setup>
  import { ref } from "vue";

  const show_modal = ref(false);
  const note_text = ref("");
  const notes = ref([]);
  const err_msg = ref("");

  let note_num = 0;

  const add_note = () => {
    if (note_text.value.length < 10) {
      err_msg.value = "Тест должен содержать минимум 10 символов";
      return;
    }
    note_num++;
    notes.value.push({
      id: 'note_' + note_num,
      text: note_text.value,
      date: new Date(),
      color: "hsl(" + Math.random() * 360 + ", 100%, 75%)", 
    });
    show_modal.value = false;
    note_text.value = "";
    err_msg.value = "";
  }
</script>

<template>
  <main>
    <div v-if="show_modal" class="overlay">
      <div class="modal">
        <textarea name="note" id="note" rows="10" v-model.trim="note_text"></textarea>
        <p v-if="err_msg" class="error">{{ err_msg }}</p>
        <button @click="add_note">Добавить запись</button>
        <button class="close" @click="show_modal = false">Закрыть</button>
      </div>
    </div>
  
    <div class="container">
      <header>
        <h1>Записки</h1>
        <button @click="show_modal = true">+</button>
      </header>

      <div class="cards-container">
        <div v-for="note in notes" class="card" :key="note.id"  :style="{backgroundColor: note.color}">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("ru-RU") }}</p>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    max-width: 1000px;
    padding: 0.8rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  header button {
    border: none;
    padding: 0.8rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 50%;
    color: #fff;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 0.8rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .modal {
    width: 750px;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
  }

  .modal .close {
    background-color: rgb(193, 15, 15);
    margin-top: 5px;
  }

  .modal .error {
    color: rgb(193, 15, 15);
  }
</style>

















