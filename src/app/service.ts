const baseUrl = "http://localhost:3000/"

const basicFecth = async (endpoint: any) =>(await fetch(`${baseUrl}${endpoint}`)).json()


export default {
    getPizzaItems: async () => {
        return await basicFecth("pizzas");
    }
};