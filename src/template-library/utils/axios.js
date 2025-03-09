import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo',
});

export const getDemoData = async (props) => {
    const { categories, reset, packageType, tags } = props;
    try {
        const params =
            reset === false
                ? {
                      ...(categories && { categories }),
                      ...(packageType  && {
                              status: packageType,
                          }),
                        ...(tags && { tags }),
                  }
                : null;

        const response = await instance.get('/demos', params ? { params } : {});

        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPatternsData = async (props) => {
    const { categories, reset, packageType, tags } = props;
    try {
     const params =
         reset === false
             ? {
                   ...(categories && { categories }),
                   ...(packageType &&
                       packageType !== '' && {
                           status: packageType,
                       }),
                     ...(tags && { tags }),
               }
             : null;

        const response = await instance.get('/patterns', params ? { params } : {});
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getDemoCategoriesData = async () => {
    try {
        const response = await instance.get('/demos/categories');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPatternsCategoriesData = async () => {
    try {
        const response = await instance.get('/patterns/categories');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getDemosTagsData = async () => {
    try {
        const response = await instance.get('/demos/tags');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
