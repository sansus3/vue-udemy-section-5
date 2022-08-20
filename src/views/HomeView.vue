<script setup>
import {useGetData} from '../composables/useGetData';
const {getData,data,error,loading} = useGetData();
getData('https://pokeapi.co/api/v2/pokemon');

const nextPage = () => {
  getData(data.value.next);
}
const previousPage = () => {
  getData(data.value.previous);
}
</script>

<template>
  <main>
    <h1>Pokemon</h1>
    <div class="alert alert-danger" v-if="error">
      {{error.message}} ({{error?.code}})
    </div>
    <div class="btn-group m-2" role="group" aria-label="Navegación a la siguiente y anterior página">
      <button type="button" @click="previousPage" :disabled="data?.previous===null" class="btn btn-secondary">Anterior</button>
      <button type="button" @click="nextPage" :disabled="data?.next===null" class="btn btn-secondary">Siguiente</button>

    </div>
    <ul class="list-group">
        <li class="list-group-item list-group-item-action" v-for="item of data?.results" :key="item.name">
          <span class="fw-bold">{{item.name}}</span>
          <div>
            <RouterLink :to="{name:'pokemon',params:{name:item.name}}">{{item.url}}</RouterLink>
          </div>
        </li>
    </ul>
  </main>
</template>
