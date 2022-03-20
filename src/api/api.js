import axios from "axios";

export default class terminalServer {
    static async getResponse() {
    return axios.get("./mockData.json")
}
}
