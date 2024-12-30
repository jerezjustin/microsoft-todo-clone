import { useCallback } from "react";
import {
    getLocalStorage,
    removeLocalStorage,
    setLocalStorage,
} from "../helpers/localStorageHelper";

export const useLocalStorage = () => {
    const getValue = useCallback((key: string) => {
        try {
            return getLocalStorage(key);
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            return null;
        }
    }, []);

    const setValue = useCallback((key: string, value: unknown) => {
        try {
            setLocalStorage(key, value);
        } catch (error) {
            console.error("Error writing to localStorage:", error);
        }
    }, []);

    const removeValue = useCallback((key: string) => {
        try {
            removeLocalStorage(key);
        } catch (error) {
            console.error("Error removing from localStorage:", error);
        }
    }, []);

    return { getValue, setValue, removeValue };
};
