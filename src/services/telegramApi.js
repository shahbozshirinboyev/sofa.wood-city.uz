import axios from "axios";

const token = "8110745041:AAGgqllrE9mwsCkQK8mhFsiG2quMGJHkD8I";
const http = axios.create({ baseURL: `https://api.telegram.org/bot${token}`, });
const chatId = "660100854";

export { http, chatId };