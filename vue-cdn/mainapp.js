import { ref } from 'vue';

export default {
  setup() {
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
    };

    return {
        show_modal,
        note_text,
        notes,
        err_msg,
        add_note,
    }
  },
  template: `
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
`,

}