import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
    interface ViewDescription {
        /** @type {'main' | 'youtube' } */
        name: string
        title: string
    }

    const title = ref("My App")
    const currentView = reactive<ViewDescription>({name: 'main', title: 'Main'})

    function showMain () {
        // @ts-ignore
        this.currentView = {name: 'home', title: 'Home View'}
    }

    return { title, currentView, showMain }
})