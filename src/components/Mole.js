import React, { useEffect } from 'react';

const Mole = ({ handleClick }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClick();
        }, Math.random() * 3000 + 1000);

        return () => clearTimeout(timer);
    }, [handleClick]);

    return <img src="/mole.png" alt="mole" />;
};

export default Mole;
