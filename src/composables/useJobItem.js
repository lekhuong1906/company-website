import { ref } from "vue";
import axios from "axios"
import { SERVER } from "@/constants";
// const jobs = ref(null);
const getAllJob = async () => {
    try {
        const response = await axios.get(SERVER + 'careers');
        return response.data.data;
    } catch (error) {
        console.log(error);
        this.error = 'Failed to load jobs';
    }
}

export function useJobItem() {
    return { getAllJob }
}