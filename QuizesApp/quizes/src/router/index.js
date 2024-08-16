import QuestionView from "@/views/QuestionView.vue";
import QuizesView from "@/views/QuizesView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },
        {
            path: "/quiz/:quiz_id",
            name: "question",
            component: QuestionView
        }
    ]
});

export default router;