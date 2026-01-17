import axios from "axios";
export const BASE_URL = "https://openlibrary.org/search.json?";
//q+harry+potter

export function Data(data, url) {

    const sendData = axios.post(url, data);

    const getData = axios.get(url);

    return { sendData, getData };
}

