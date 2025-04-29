import { Axios } from '../utils/axiosInstance';
const getTodoAPI = async () => {
    try {
        const response = await Axios.get('/todo');
        console.log(response);
        return response.data
    } catch (e) {
        console.log(e);
    }
};
 
export { getTodoAPI };
 
 