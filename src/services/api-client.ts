import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9dd178ffae194519ae57c05fcff9612b'
    }
})