'use client';

import { AxiosResponse } from "axios";
import api from "@/src/lib/api";
import { ToastAction } from "@/src/components/ui/toast";
import { useToast } from "@/src/components/ui/use-toast";


interface sendLoginProps {
    user: string;
    password: string
}
export const sendLogin = async ({ user, password }: sendLoginProps): Promise<AxiosResponse<any, any> | boolean> => {
    const { toast } = useToast()

    try {
        const response = await api.post('/auth/login', {
            user: user,
            password: password
        });
        return response;
    } catch (error: any) {
        console.error('Erro durante a requisição:', error);
        if (error.isAxiosError && error.response && error.response.status >= 400 && error.response.status < 500) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
        return false;
    }
}