import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fee5500557844c84bace11d81246c896',
    },
});
