"use client"
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deals, setDeals] = useState([
    {
      id: 'DL001',
      product: 'iPhone 15 Pro Max 256GB',
      price: 45000,
      shipping: 100,
      buyer: 'สมชาย ใจดี',
      seller: 'ร้านมือถือดัง',
      status: 'PAID',
      createdAt: '2025-05-20',
      trackingNumber: 'TH1234567890',
      confirmDeadline: '2025-05-30'
    },
    {
      id: 'DL002', 
      product: 'Airpods Pro Gen 3',
      price: 8900,
      shipping: 50,
      buyer: 'นางสาวสุดา จริงใจ',
      seller: 'Tech Store Bangkok',
      status: 'SHIPPED',
      createdAt: '2025-05-22',
      trackingNumber: 'TH0987654321',
      confirmDeadline: '2025-05-28'
    }
  ]);

  const [walletBalance, setWalletBalance] = useState(12450);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'ดีล DL001 ผู้ซื้อชำระเงินแล้ว', time: '10:30', type: 'payment' },
    { id: 2, message: 'ดีล DL002 อัปเดตหมายเลขพัสดุแล้ว', time: '14:15', type: 'shipping' }
  ]);

  const pages = {
    // landing: <LandingPage setCurrentPage={setCurrentPage} setUserType={setUserType} />,
    // signup: <SignupPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />,
    // login: <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />,
    // dashboard: <Dashboard 
    //   setCurrentPage={setCurrentPage} 
    //   userType={userType}
    //   deals={deals}
    //   walletBalance={walletBalance}
    //   notifications={notifications}
    // />,
    // createDeal: <CreateDeal setCurrentPage={setCurrentPage} deals={deals} setDeals={setDeals} />,
    // dealDetail: <DealDetail setCurrentPage={setCurrentPage} deal={deals[0]} />,
    // payment: <PaymentPage setCurrentPage={setCurrentPage} deal={deals[0]} />,
    // dispute: <DisputePage setCurrentPage={setCurrentPage} deal={deals[0]} />,
    // wallet: <WalletPage setCurrentPage={setCurrentPage} balance={walletBalance} />,
    // admin: <AdminDashboard setCurrentPage={setCurrentPage} deals={deals} />,
    // referral: <ReferralSystem setCurrentPage={setCurrentPage} />,
    admin: <AdminReferralDashboard setCurrentPage={setCurrentPage} />
  };

  // return (
  //   <div className="min-h-screen bg-gray-50">
  //     {pages[currentPage]}
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap');
        * {
          font-family: 'Kanit', sans-serif !important;
        }
        h1, h2, h3, h4, h5, h6 {
          color: #252525;
        }
      `}</style>
      {pages[currentPage]}
    </div>
  );
};


export default AdminDashboard;