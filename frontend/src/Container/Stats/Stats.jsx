import React, { useState } from 'react';
import './Stats.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { BarChart, Bar } from 'recharts';

function Stats() {
  const data = [
    {
      year: 2017,
      wasteGeneration: 1.8,
      wasteManagementCost: 200,
    },
    { year: 2018, wasteGeneration: 2.0, wasteManagementCost: 220 },
    { year: 2019, wasteGeneration: 2.2, wasteManagementCost: 240 },
    { year: 2020, wasteGeneration: 2.1, wasteManagementCost: 252 },
    { year: 2021, wasteGeneration: 2.3, wasteManagementCost: 260 },
    { year: 2022, wasteGeneration: 2.5, wasteManagementCost: 280 },
    { year: 2023, wasteGeneration: 2.8, wasteManagementCost: 300 },
    { year: 2024, wasteGeneration: 3.2, wasteManagementCost: 320 },
  ];

  return (
    <div className="stats-page">
      <h1>Waste Management Stats in Healthcare (2017 - 2024)</h1>
      <div className="chart__cont">
        <div className="chart-container">
          <h2>Waste Generation Over Time</h2>
          <LineChart width={400} height={200} data={data}>
            <Line type="monotone" dataKey="wasteGeneration" stroke="#8884d8" />
            <XAxis dataKey="year">
              <XAxis.Label value="Year" position="bottom" />
            </XAxis>

            <YAxis>
              <YAxis.Label value="Tons of Waste" position="right" />
            </YAxis>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
          </LineChart>
        </div>

        <div className="chart-container">
          <h2>Waste Management Cost Over Time</h2>
          <BarChart width={400} height={200} data={data}>
            <Bar dataKey="wasteManagementCost" fill="#745683" />
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid stroke="" strokeDasharray="5 5" />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Stats;
