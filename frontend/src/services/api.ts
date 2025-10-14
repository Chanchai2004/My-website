// API service functions

import { IUser } from '../interfaces/IUSER';
import axios from "axios";
import { IGuest } from '../interfaces/IGUEST';      

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';


interface AnalyticsResponse {
  total_guests: number;
  downloaded_cv_count: number;
  download_percentage: number;
  analytics: {
    total_guests: number;
    downloaded_cv_count: number;
    download_percentage: number;
  };
}


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

// API 1: Create Guest (ไม่มี input, สร้างอัตโนมัติ)
async function CreateGuest(): Promise<IGuest> {
    try {
        const response = await axios.post(`${API_BASE_URL}/guests`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating guest:", error);
        throw error;
    }
}

// API 2: Download CV (รับ guest_random_id และอัปเดต DownloadCV เป็น true)
async function DownloadCV(data: IGuest): Promise<Blob> {
    try {
        const response = await axios.post(`${API_BASE_URL}/download-cv`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            responseType: 'blob', // สำหรับไฟล์ PDF
        });
        return response.data;
    } catch (error) {
        console.error("Error downloading CV:", error);
        throw error;
    }
}

// API 3: Get Analytics (ดึงข้อมูลสถิติ Guest และการดาวน์โหลด CV)
async function GetAnalytics(): Promise<AnalyticsResponse> {
    try {
        const response = await axios.get(`${API_BASE_URL}/analytics`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error getting analytics:", error);
        throw error;
    }
}


const apiService = {
  Login,
  CreateGuest,
  DownloadCV,
  GetAnalytics,
};

export default apiService;