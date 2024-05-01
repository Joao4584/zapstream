'use client';

const defaultToken = "vN$y*K}d=2@J,x8q";

export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(defaultToken);
    }
    return null;  // or a default value if needed
}

export const setToken = (token: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(defaultToken, token);
    }
}
