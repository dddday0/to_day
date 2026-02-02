import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080'

class HttpService {
    
    async save(params)  {
        const res = await axios.post("/practice", params)
        return res.data
    };

    async findAll() {
        const res = await axios.get("/practice")
            return res.data;
    };

    async findById({id})  {
        const res = await axios.get(`${"/practice"}/${id}`)
        return res.data;
    };

    async ud(params)  {
        const res = await axios.put("/practice", params)
        return res.data;
    };

    async dl(params)  {
        const res = await axios.delete("/practice", {params})
        return res.data;
    };


}

export default new HttpService();














export default new HttpService(); 