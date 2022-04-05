import React from 'react';
import './spinBox.css';

export interface SpinBoxProps {
    size?: 'small' | 'medium' | 'large';

    value: number;

    onPlusClick: () => void;
    onMinusClick: () => void;
}

export const SpinBox = ({
    size = 'medium',
    value = 0,
    onPlusClick,
    onMinusClick,
}: SpinBoxProps) => {
    return (
        <div className={['spin-box', `spin-box--${size}`].join(' ')}>
            <div className={'button-area'} onClick={onMinusClick}>
                <div>-</div>
            </div>
            <div className={'number-area'}>
                {value}
            </div>
            <div className={'button-area'} onClick={onPlusClick}>
                +
            </div>
        </div>
    )
};