import React, { useCallback, useEffect, useState } from 'react';
import './spinBox.css';

export interface SpinBoxProps {
    size?: 'small' | 'medium' | 'large';

    value: number;

    onPlusClick: () => void;
    onMinusClick: () => void;
    onPlusPress?: () => void;
    onMinusPress?: () => void;
}

function useLongPress(callback = () => { }, ms = 300) {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        let timerId: number;
        if (startLongPress) {
            timerId = window.setTimeout(callback, ms);
        } else {
            clearTimeout(timerId!);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [callback, ms, startLongPress]);

    const start = useCallback(() => {
        console.log("start")
        setStartLongPress(true)
    }, [])

    const stop = useCallback(() => {
        console.log("stop")
        setStartLongPress(false)
    }, [])

    return {
        onMouseDown: start,
        onMouseUp: stop,
        onMouseLeave: stop,
        onTouchStart: start,
        onTouchEnd: stop
    };
}

export const SpinBox = ({
    size = 'medium',
    value = 0,
    onPlusClick,
    onMinusClick,
    onPlusPress,
    onMinusPress,
}: SpinBoxProps) => {

    const plusPress = useLongPress(onPlusPress);
    const minusPress = useLongPress(onMinusPress);

    return (
        <div className={['spin-box', `spin-box--${size}`].join(' ')}>
            <div className={'button-area'} onClick={onMinusClick} {...minusPress}>
                <div>-</div>
            </div>
            <div className={'number-area'}>
                {value}
            </div>
            <div className={'button-area'} onClick={onPlusClick} {...plusPress}>
                +
            </div>
        </div>
    )
};