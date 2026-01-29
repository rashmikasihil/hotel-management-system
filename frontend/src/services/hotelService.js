import axios from "axios";

const API_URL = "http://localhost:5000/api/hotels";

export const getHotels = () => axios.get(API_URL);
export const createHotel = (data) => axios.post(API_URL, data);
export const updateHotel = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteHotel = (id) => axios.delete(`${API_URL}/${id}`);
