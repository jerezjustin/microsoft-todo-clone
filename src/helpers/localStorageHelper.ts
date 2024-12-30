export const getLocalStorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const setLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};
