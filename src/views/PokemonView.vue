<script>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useGetData } from '../composables/useGetData';


export default{
    setup(){
        const router = useRouter();
        const {getData,data,loading, error} = useGetData();
        const route = useRoute();
        getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        const handleBack = () => {
            router.push({name:'home'})
        }       
        return{
            handleBack,
            data,
            loading,
            error,
        }
    },
}
</script>
<template>
    <div>
        <h1 class="h2">Pokemon {{$route.params.name}}</h1>
        <div class="card" style="width:132px" v-if="!data?.error">
        <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
        <div v-else>
            <!-- Ojo: Estamos utilizando "Optional chaining" en la notación del objeto pokemon?.property por si no le da tiempo a traer los datos -->
                <img :src="data?.sprites.back_default" :alt="data?.name" class="card-img-top">
                 <div class="card-body h5">
                    {{data?.name}}
                </div>
            </div>
        </div>
        <div v-if="error" class="alert alert-danger mt-2">
            {{error.message}}
        </div>
       
        <button @click="handleBack" class="btn btn-primary mt-2">Volver</button>
    </div>
</template>