import React from 'react';
import Dashboard from './Dasboard'
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, RadialBarChart, RadialBar, Tooltip, Legend,
} from 'recharts';

function Statistic() {
  // Sahte verileri oluştur
  const dataBar = [
    { name: 'A', value: 12 },
    { name: 'B', value: 19 },
    { name: 'C', value: 3 },
    { name: 'D', value: 5 },
  ];

  const dataLine = [
    { name: 'A', value: 10 },
    { name: 'B', value: 5 },
    { name: 'C', value: 15 },
    { name: 'D', value: 8 },
  ];

  const dataPie = [
    { name: 'A', value: 30 },
    { name: 'B', value: 12 },
    { name: 'C', value: 20 },
    { name: 'D', value: 15 },
  ];

  const dataDoughnut = [
    { name: 'A', value: 25 },
    { name: 'B', value: 18 },
    { name: 'C', value: 10 },
    { name: 'D', value: 30 },
  ];

  return (
    <Dashboard>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px', color: '#333' }}>Bu alan  chartları barındırır</h1>
    </div>


      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Bar Chart */}
        <BarChart width={400} height={300} data={dataBar}>
          <Bar dataKey="value" fill="#8884d8" />
          <Tooltip />
          <Legend />
        </BarChart>

        {/* Line Chart */}
        <LineChart width={400} height={300} data={dataLine}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <Tooltip />
          <Legend />
        </LineChart>

        {/* Pie Chart */}
        <PieChart width={400} height={300}>
          <Pie data={dataPie} dataKey="value" nameKey="name" fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>

        {/* Doughnut Chart */}
        <RadialBarChart width={400} height={300} innerRadius="40%" outerRadius="60%" data={dataDoughnut}>
          <RadialBar dataKey="value" fill="#8884d8" />
          <Tooltip />
          <Legend />
        </RadialBarChart>
      </div>
    </Dashboard>
  );
}

export default Statistic;
