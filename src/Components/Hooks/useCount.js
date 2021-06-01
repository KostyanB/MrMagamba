import { useState } from 'react';

export function useCount(startCount) {
    const [count, setCount] = useState(startCount || 1);

    const validCount = (value) => {
        value = value < 1 ? 1 : value > 100 ? 100 : value;
        setCount(value);
    }
    const onChange = e => {
        const value = e.target.value.replace(/^0+/, '');
        validCount(value)
    }
    return {count, setCount, onChange, validCount};
}