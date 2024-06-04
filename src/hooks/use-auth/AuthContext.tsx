'use client';

import ChildrenProps from '@/@types/children';
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { getInformationUserRequest } from './Auth.request';
import LoadingPage from '../../components/loading/loadingPage';

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: ChildrenProps) => {
    const [userInfo, setUserInfo] = useState<any>(null);


    useLayoutEffect(() => {
        getInformationUser();
    }, []);

    const getInformationUser = async () => {
        try {
            const response = await getInformationUserRequest();
            const userData = response.data;
            setUserInfo(userData);
        } catch (error) {
            console.error('Erro ao obter informações do usuário:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
            {
                userInfo != null ? children : <LoadingPage />
            }
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
