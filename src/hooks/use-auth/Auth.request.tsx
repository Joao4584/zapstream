'use client';

import { AxiosResponse } from "axios";
import api from "@/src/lib/api";



export const getInformationUserRequest = async (): Promise<AxiosResponse<any, any>> => {
    try {
        const response = await api.get('/users');
        return response;
    } catch (error) {
        console.error('Erro durante a requisição:', error);
        throw error;
    }
}