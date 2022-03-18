import React, { useState } from 'react';
import Calendar from 'react-calendar';

export const Planner = () => {
    const [value, onChange] = useState(new Date());
    const onClickDay = (value, event) => alert('Clicked day: ', value)
    return (
        <div className="react-calendar" >
            <Calendar onClick={onClickDay()} onChange={onChange} value={value} />
        </div>
    );
}