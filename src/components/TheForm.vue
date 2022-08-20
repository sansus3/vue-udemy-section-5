<script setup>
const props = defineProps({
    form:{
        type: Object,
        default: ()=>({}),
    },
    label:{
        type: Object,
        default: () => ({}),
    }
});
console.log(props.form)
</script>
<template>
    <div class="form">
        <ul class="fields list-unstyled">
            <li class="field mb-3">
                <label class="form-label" for="">
                    <input 
                    type="text"
                    class="form-control" 
                    :placeholder="label.name"
                    v-model="form.name">
                </label>
            </li>
            <li class="field mb-3">
                <label class="form-label" for="">
                    <input 
                    type="text"
                    class="form-control" 
                    :placeholder="label.last_name"
                    v-model="form.last_name">
                </label>
            </li>
        </ul>
    </div>
</template>