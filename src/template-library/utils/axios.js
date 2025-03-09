
import axios from "axios";

const instance = axios.create({
    baseURL: "https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo",
});

export const getDemoData = async (props) => {
    const { categories, reset } = props;
    try {
        const params = reset === false ? { ...(categories && { categories }) } : null;

        const response = await instance.get('/demos', params ? { params } : {});

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPatternsData = async (props) => {
    const { categories, reset = false } = props;
    try {
        const params = reset === false ? { ...(categories && { categories }) } : null;

        const response = await instance.get("/patterns", params ? { params } : {});
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

export const getPatternsCategoriesData = async () => {
    try {
        const response = await instance.get("/patterns/categories");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
