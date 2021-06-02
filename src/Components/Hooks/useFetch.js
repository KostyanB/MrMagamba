import { useEffect, useState } from 'react';

export const useFetch = () => {

    const [responce, setResponce] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const json = await fetch('DB.json');
                const res = await json.json();
                setResponce(res);
            } catch(err) {
                setError(err);
            }
        })();
    }, []); // пустой массив чтобы запустилась 1 раз

    return { responce, error };
}