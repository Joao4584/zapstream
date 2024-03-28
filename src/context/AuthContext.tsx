'use client';

import ChildrenProps from '@/@types/children';
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';

// Definindo o tipo para o contexto de autenticação
type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

// Componente provedor de autenticação
export const AuthProvider = ({ children }: ChildrenProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    // Função para fazer logout
    const logout = () => {
        setIsAuthenticated(false);
    };

    useLayoutEffect(() => {
        getInformationUser();
    }, []);

    const getInformationUser = () => {

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
