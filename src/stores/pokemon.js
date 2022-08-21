import { defineStore } from 'pinia';
import { ref } from "vue";
import { useRouter } from 'vue-router';

export const useStorePokemon = defineStore('pokemon',()=>{
    const favorites = ref([]);
    const router = useRouter();

    if(window.localStorage.getItem('pokemon'))
        favorites.value = JSON.parse(localStorage.getItem('pokemon'));


    const addFavorites = data => {        
        favorites.value.push(data);
        window.localStorage.setItem('pokemon',JSON.stringify(favorites.value));
        router.push({name:'favorites'});
    }

    const isInFavorites = id => favorites.value.findIndex(item=>item.id===id)>-1;

    const deleteFromFavorites = id => {        
        favorites.value = favorites.value.filter(item=>item.id!==id);
        window.localStorage.setItem('pokemon',JSON.stringify(favorites.value));
    }

    return {
        favorites,
        addFavorites,
        isInFavorites,
        deleteFromFavorites,
    }
});