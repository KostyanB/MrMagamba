import { useState } from 'react';

export function useCount() {
    const [count, setCount] = useState(1);
    const onChange = e => {
        const value = e.target.value < 1 ? 1 : e.target.value > 100 ? 100 : e.target.value;
        setCount(value);
    }
    return {count, setCount, onChange};
}