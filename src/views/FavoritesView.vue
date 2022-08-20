<script setup>
import { storeToRefs } from 'pinia';
import { useStorePokemon } from '../stores/pokemon';
const { favorites } = storeToRefs(useStorePokemon());
const { deleteFromFavorites } = useStorePokemon();
</script>
<template>
    <div>
       <h1 class="h2">Favoritos</h1>
       <ul class="list-group list-unstyled" v-if="favorites.length">
        <template v-for="item of favorites" :key="item.id">
            <li class="list-group-item">
                {{item.name}} <button @click="deleteFromFavorites(item.id)" type="button" class="btn btn-danger btn-sm">Eliminar</button>
            </li>
        </template>
       </ul>
    </div>
</template>