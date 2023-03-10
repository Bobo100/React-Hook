import React from 'react';
import UseStateFC from './component/UseStateFC';
import { UseRefFC } from './component/UseRefFC';
import { UseEffectFC } from './component/UseEffectFC';
export const Home = () => {
    return (
        <div className="container">

            <UseStateFC />
            <UseRefFC />
            <UseEffectFC />
        </div>
    );
};
