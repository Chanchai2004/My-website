// API service functions

import { IUser } from '../interfaces/IUSER';
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';


async function Login(data: IUser) {
    try { 
        const response = await axios.post(`${API_BASE_URL}/auth/login`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
  }


const apiService = {
  Login,
};

export default apiService;