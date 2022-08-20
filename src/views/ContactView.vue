<script setup>
  import { ref } from 'vue';
  import TheForm from '../components/TheForm.vue';
  const data = ref({
    name: 'Xurxo',
    last_name:'',
  });
</script>
<template>
  <div class="about">
    <h1>Contácteme</h1>
    <form action="#">
      <the-form v-model:form="data" :label="{name:'Nombre',last_name:'Apellidos'}"></the-form>
      <pre>
        {{data}}
      </pre>
    </form>
  </div>
</template>