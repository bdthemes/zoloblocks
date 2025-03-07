
import axios from "axios";

const instance = axios.create({
    baseURL: "https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo",
});

export const getDemoData = async (props) => {
  const { categories } = props;
//   console.log('props', props);
    try {
        const response = await instance.get("/demos", {
            params: {
               ...categories && { categories: categories },
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const getPatternsData = async (props) => {
    const { categories } = props;
    try {
        const response = await instance.get("/patterns", {
            params: {
                ...categories && { categories: categories },
            },
        });
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
