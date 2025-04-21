import React, { useState, useCallback } from 'react';

function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
        setTick(tick => tick + 1);
    }, []);
    return update;
}

/*В примере с useForceUpdate я обернул функцию обновления в useCallback для оптимизации,
 чтобы не пересоздавать функцию на каждый ререндер.*/

export default function ForceUpdateComponent() {
    const forceUpdate = useForceUpdate();
    const [count, setCount] = useState(0);

    console.log('🔄 Компонент перерендерился');

    return (
        <div style={{ padding: 20 }}>
            <h2>Force Update Пример</h2>

            <p>Счётчик: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>
                Увеличить счётчик
            </button>

            <p style={{ marginTop: '1rem' }}>Компонент можно обновить без изменения состояния:</p>
            <button onClick={forceUpdate}>
                Force Update (принудительный ререндер)
            </button>
        </div>
    );
}
