import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Required for Pie Chart
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinanceTracker = () => {
  // Data for the bar chart (Income vs Expenses vs Savings)
  const barData = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [
      {
        label: 'Amount in $',
        data: [5000, 3000, 2000],
        backgroundColor: ['#4CAF50', '#FF5722', '#03A9F4'], // Colors for bars
      },
    ],
  };

  // Data for the Pie Chart (Expense breakdown)
  const pieData = {
    labels: ['Food', 'Rent', 'Entertainment', 'Transport', 'Others'],
    datasets: [
      {
        label: 'Expenses Breakdown',
        data: [600, 1200, 300, 400, 500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Colors for pie chart
      },
    ],
  };

  // Data for the Line Chart (Income over months)
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Income',
        data: [4000, 4500, 5000, 5200, 4800, 5300],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
    ],
  };

  // Options for the chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Finance Overview',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expenses Breakdown',
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income Over Time',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Finance Tracker</h2>
      
      {/* Summary Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Income</h3>
          <p className="text-2xl font-bold">$5000</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Expenses</h3>
          <p className="text-2xl font-bold">$3000</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Savings</h3>
          <p className="text-2xl font-bold">$2000</p>
        </div>
      </div>
      
      {/* Bar Chart */}
      <div className="mb-8">
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Pie Chart for Expense Breakdown */}
      <div className="mb-8 flex justify-center">
        <div style={{ width: '300px', height: '300px' }}>

        <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      {/* Line Chart for Income Over Time */}
      <div className="mb-8 flex justify-center">
        <div style={{ width: '300px', height: '300px' }}>

        <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default FinanceTracker;
