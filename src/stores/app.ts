import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {

    const title = ref("My App")
    const viewName = ref("")

    return { title, viewName }
})