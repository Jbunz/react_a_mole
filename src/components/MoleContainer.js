import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ score, setScore }) => {
    const [displayMole, setDisplayMole] = useState(false);

    const handleClick = () => {
        if (displayMole) {
            setScore(score + 1);
            setDisplayMole(false);
        }
    };

    const moleOrEmpty = displayMole ? (
        <Mole handleClick={handleClick} />
    ) : (
        <EmptySlot />
    );

    return <div onClick={handleClick}>{moleOrEmpty}</div>;
};

export default MoleContainer;
