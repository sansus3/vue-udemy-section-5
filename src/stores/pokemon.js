import { defineStore } from 'pinia';
import { ref } from "vue";
import { useRouter } from 'vue-router';

export const useStorePokemon = defineStore('pokemon',()=>{
    const favorites = ref([]);
    const router = useRouter();

    const addFavorites = data => {        
        favorites.value.push(data);
        router.push({name:'favorites'});
    }

    const isInFavorites = id => favorites.value.findIndex(item=>item.id===id)>-1;

    const deleteFromFavorites = id => {
        favorites.value = favorites.value.find(item=>item.id!==id);
    }

    return {
        favorites,
        addFavorites,
        isInFavorites,
        deleteFromFavorites,
    }
});