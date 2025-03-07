
import axios from "axios";
import { setActiveCat } from "../store/actions";

const instance = axios.create({
    baseURL: "https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo",
});

export const getDemoData = async (props) => {
  const { tag, categories } = props;
  console.log('props', props);
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


export const getDemoCategoriesData = async () => {
    try {
        const response = await instance.get("/demos/categories");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
