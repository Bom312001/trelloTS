const storageKey = 'APP_MUSIC_PLAYER';


function useLocalStorage() {
    const getDataStorage = () => {
        const dataStr = localStorage.getItem(storageKey) || '{}';
        return JSON.parse(dataStr);
    };

    const setStorage= (key: any, value: any): any => {
        const dataStorage = getDataStorage();
        dataStorage[key] = value;

        const dataJSON = JSON.stringify(dataStorage);
        localStorage.setItem(storageKey, dataJSON);

        return dataStorage[key];
    };

    const getStorage = (key: any): any => {
        const dataStorage = getDataStorage();
        return dataStorage[key];
    };

    return {
        getStorage,
        setStorage,
    };
}

export default useLocalStorage;
