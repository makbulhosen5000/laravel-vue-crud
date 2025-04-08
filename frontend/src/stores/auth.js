import { defineStore } from "pinia";

// define authStore
export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user:'Makbul',
        }
    },
    getters: {},
    actions: {},
  })