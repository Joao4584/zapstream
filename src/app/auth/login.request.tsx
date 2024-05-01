'use client';

import { AxiosResponse } from "axios";
import api from "@/src/lib/api";
import { ToastAction } from "@/src/components/ui/toast";
import { useToast } from "@/src/components/ui/use-toast";


interface sendLoginProps {
    user: string;
    password: string
}
export const sendLogin = async ({ user, password }: sendLoginProps): Promise<AxiosResponse<any, any> | { success: boolean, message: string }> => {
    try {
        const response = await api.post('/auth/login', { user, password });
        return response;
    } catch (error: any) {
        console.error('Erro durante a requisição:', error);

        if (error.isAxiosError && error.response) {
            const status = error.response.status;
            const message = error.response.data.message || 'Erro ao fazer login';
            return { success: false, message };
        }

        return { success: false, message: 'Erro inesperado ao tentar fazer login' };
    }
};