
import axios from "axios";

const instance = axios.create({
    baseURL: "https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo",
});

export const getDemoData = async () => {
    try {
        const response = await instance.get("/demos");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getDemoCategoriesData = async () => {
    try {
        const response = await instance.get("/demos/categories");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}