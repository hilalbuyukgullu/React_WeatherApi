import axios from "axios";

export const service = axios.create({
  baseURL: "http://api.weatherstack.com",
  timeout:1000
})

export function weather(search: string) {
  const params = {
    access_key:"6cc973282e57f2cee209e11d8fa67a80",
    query:search
  }
  return service.get("/current",{params:params})
}  