import React, { useState } from 'react';
import "../../Styles/chartForm.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const ChartSettings = () => {
    // State hooks for dropdown selections and text inputs
    const [xAxis, setXAxis] = useState('time');
    const [yAxis, setYAxis] = useState('quantity');
    const [xLabel, setXLabel] = useState('');
    const [yLabel, setYLabel] = useState('');

    // Handler function for applying configuration
    const applyConfig = () => {
        console.log('X Axis:', xAxis);
        console.log('Y Axis:', yAxis);
        console.log('X Label:', xLabel);
        console.log('Y Label:', yLabel);

        // Here you would update your chart configuration
        // For example:
        // chart.updateConfig({
        //     xAxis,
        //     yAxis,
        //     xLabel,
        //     yLabel
        // });
    };

    return (
        <div className="toolbar">
            {/* <CardContent> */}
            <label htmlFor="x-axis">X Axis:</label>
            <select
                id="x-axis"
                value={xAxis}
                onChange={(e) => setXAxis(e.target.value)}
            >
                <option value="time">Time</option>
                <option value="categories">Categories</option>
                <option value="values">Values</option>
            </select>

            <label htmlFor="y-axis">Y Axis:</label>
            <select
                id="y-axis"
                value={yAxis}
                onChange={(e) => setYAxis(e.target.value)}
            >
                <option value="quantity">Quantity</option>
                <option value="percentage">Percentage</option>
                <option value="price">Price</option>
            </select>

            <label htmlFor="x-label">X Label:</label>
            <input
                type="text"
                id="x-label"
                value={xLabel}
                onChange={(e) => setXLabel(e.target.value)}
                placeholder="Enter X axis label"
            />

            <label htmlFor="y-label">Y Label:</label>
            <input
                type="text"
                id="y-label"
                value={yLabel}
                onChange={(e) => setYLabel(e.target.value)}
                placeholder="Enter Y axis label"
            />

            <button onClick={applyConfig}>Apply</button>
            {/* </CardContent> */}
        </div>
    );
};

export default ChartSettings;
