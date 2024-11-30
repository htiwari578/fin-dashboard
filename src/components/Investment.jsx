import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

const Investment = () => {
  
  const doughnutData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Gold', 'Cash'],
    datasets: [
      {
        label: 'Asset Allocation',
        data: [50, 20, 10, 10, 10],
        backgroundColor: ['#4CAF50', '#FF5722', '#FFC107', '#03A9F4', '#9C27B0'], 
      },
    ],
  };


  const investmentGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Investment Growth',
        data: [10000, 10500, 11000, 12000, 13000, 12500],
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Asset Allocation',
      },
    },
  };

  const investmentGrowthOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Investment Growth Over Time',
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Investment Tracker</h2>
      
 
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Investments</h3>
          <p className="text-2xl font-bold">$10,000</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Returns</h3>
          <p className="text-2xl font-bold">$2,000</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Growth</h3>
          <p className="text-2xl font-bold">20%</p>
        </div>
      </div>

    
      <div className="mb-8 flex justify-center">
        <div style={{ width: '300px', height: '300px' }}>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

    
      <div className="mb-8 flex justify-center">
        <div style={{ width: '400px', height: '300px' }}>
          <Line data={investmentGrowthData} options={investmentGrowthOptions} />
        </div>
      </div>
    </div>
  );
};

export default Investment;
