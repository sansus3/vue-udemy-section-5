import { ref } from "vue";
import axios from "axios";


export const useGetData = () => {
    const data = ref(null);
    const error = ref(false);
    const loading = ref(false);

    const getData = async $url => {
        loading.value = true;
        try {
            const res = await axios.get($url); 
            //console.log(res)
            data.value = res.data;  
        } catch (err) {
            error.value = err; 
        } finally{
            loading.value = false;
        }
    }

    return {
        getData,
        data,
        error,
        loading,
    }  
}