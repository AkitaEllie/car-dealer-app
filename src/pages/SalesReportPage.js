import React from 'react';
import SalesReport from '../components/AdminSalesReport';

const SalesReportPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Sales Report</h1>
      <SalesReport />
    </div>
  );
};

export default SalesReportPage;
