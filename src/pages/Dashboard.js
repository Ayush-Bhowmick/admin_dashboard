import React from 'react';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';
import KanbanBoard from '../components/KanbanBoard';
import Calendar from '../components/Calendar'; // Correct import path

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Chart />
      <DataTable />
      <KanbanBoard />
      <Calendar />
    </div>
  );
};

export default Dashboard;
