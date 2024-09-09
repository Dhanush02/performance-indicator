import React, { useEffect, useRef } from 'react';
import './GuageCharts.css'; // Ensure you import the CSS file

const Gauge = ({ percent, strokeColor, backgroundColor }) => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const radius = Number(circle.getAttribute('r'));
        const circumference = 2 * Math.PI * radius;
        const length = (circumference * percent) / 100;

        // Use setTimeout to ensure CSS transitions apply
        setTimeout(() => {
            circle.style.strokeDasharray = `${length} 9999`;
            circle.style.strokeOpacity = 1;
        }, 1);
    }, [percent]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="transparent" className="gauge">
            <circle cx="22" cy="22" r="20" stroke={backgroundColor} strokeWidth="4" />
            <circle ref={circleRef} cx="22" cy="22" r="20" stroke={strokeColor} strokeWidth="4" />
        </svg>
    );
};

export default Gauge;
