import { useState } from 'react';

const useLocalStorage = (propertyName, defaultValue) => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value = window.localStorage.getItem(propertyName);
            if(value){
                return JSON.parse(value);
            }else{
                window.localStorage.setItem(propertyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error){
            return defaultValue;
        }
    })
    const setValue = newValue => {
        try{
            window.localStorage.setItem(propertyName, JSON.stringify(newValue));
        } catch (error){}
        setStoredValue(newValue)
    };

    return [storedValue, setValue]
}
export default useLocalStorage;