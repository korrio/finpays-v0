"use client"
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Shield, 
  CreditCard, 
  Users, 
  Plus, 
  ArrowLeft, 
  Check, 
  AlertTriangle, 
  Truck, 
  MessageCircle,
  Wallet,
  Settings,
  BarChart3,
  QrCode,
  Phone,
  Mail,
  Clock,
  DollarSign,
  FileText,
  Eye,
  Upload
} from 'lucide-react';

import ReferralSystem from './ReferralSystem';
import AdminReferralDashboard from './AdminReferralDashboard';

const FinpaysPrototype = () => {
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
    landing: <LandingPage setCurrentPage={setCurrentPage} setUserType={setUserType} />,
    signup: <SignupPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />,
    login: <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />,
    dashboard: <Dashboard 
      setCurrentPage={setCurrentPage} 
      userType={userType}
      deals={deals}
      walletBalance={walletBalance}
      notifications={notifications}
    />,
    createDeal: <CreateDeal setCurrentPage={setCurrentPage} deals={deals} setDeals={setDeals} />,
    dealDetail: <DealDetail setCurrentPage={setCurrentPage} deal={deals[0]} />,
    payment: <PaymentPage setCurrentPage={setCurrentPage} deal={deals[0]} />,
    dispute: <DisputePage setCurrentPage={setCurrentPage} deal={deals[0]} />,
    wallet: <WalletPage setCurrentPage={setCurrentPage} balance={walletBalance} />,
    admin: <AdminDashboard setCurrentPage={setCurrentPage} deals={deals} />,
    referral: <ReferralSystem setCurrentPage={setCurrentPage} />,
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

// Landing Page Component
const LandingPage = ({ setCurrentPage, setUserType }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Finpays</span>
        </div>
        <div className="space-x-4">
          <button 
            onClick={() => setCurrentPage('login')}
            className="text-white hover:text-blue-200 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-all"
          >
            เข้าสู่ระบบ
          </button>
          <button 
            onClick={() => setCurrentPage('signup')}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            สมัครสมาชิก
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          ซื้อ-ขายออนไลน์ปลอดภัย
          <br />
          <span className="text-yellow-300">ด้วย e-Escrow</span>
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          แพลตฟอร์ม Payment Gateway สำหรับ Social Commerce ที่ลดความเสี่ยงการโกง
          <br />
          ใช้ PromptPay API ค่าธรรมเนียมต่ำ เริ่มต้นเพียง 2%
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <button 
            onClick={() => {
              setUserType('buyer');
              setCurrentPage('signup');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
          >
            <ShoppingCart className="inline mr-2" />
            สำหรับผู้ซื้อ
          </button>
          <button 
            onClick={() => {
              setUserType('seller');
              setCurrentPage('signup');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
          >
            <Users className="inline mr-2" />
            สำหรับผู้ขาย
          </button>
          <button 
            onClick={() => {
              setUserType('admin');
              setCurrentPage('admin');
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
          >
            <Shield className="inline mr-2" />
            สำหรับแอดมิน
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
          <Shield className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">ปลอดภัย 100%</h3>
          <p className="text-blue-100">เงินจะถูกพักไว้จนกว่าจะได้รับสินค้า</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
          <CreditCard className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">ค่าธรรมเนียมต่ำ</h3>
          <p className="text-blue-100">เพียง 2% + 10 บาท ถูกกว่า marketplace ใหญ่</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
          <QrCode className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">ใช้งานง่าย</h3>
          <p className="text-blue-100">สแกน QR ผ่าน PromptPay เสร็จใน 30 วินาที</p>
        </div>
      </div>

      {/* Stats */}
      <div className="text-center">
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-yellow-300">10,000+</div>
            <div className="text-blue-100">ธุรกรรมปลอดภัย</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">99.9%</div>
            <div className="text-blue-100">ความพึงพอใจ</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">2M+</div>
            <div className="text-blue-100">มูลค่าธุรกรรม</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Signup Page Component  
const SignupPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    firstName: '',
    lastName: '',
    idCard: '',
    bankAccount: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">สมัครสมาชิก Finpays</h2>
          <p className="text-gray-600">ขั้นตอนที่ {step} จาก 3</p>
        </div>

        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`flex items-center ${num < 3 ? 'flex-1' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > num ? <Check className="h-4 w-4" /> : num}
              </div>
              {num < 3 && <div className={`flex-1 h-1 ml-2 ${step > num ? 'bg-blue-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">หมายเลขโทรศัพท์</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="0xx-xxx-xxxx"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ส่ง OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">รหัส OTP</label>
              <input
                type="text"
                value={formData.otp}
                onChange={(e) => setFormData({...formData, otp: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
                placeholder="000000"
                maxLength="6"
              />
              <p className="text-sm text-gray-600 mt-2">กรุณากรอกรหัส OTP ที่ส่งไปยัง {formData.phone}</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ยืนยัน OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">ชื่อ</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">นามสกุล</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">เลขบัตรประชาชน</label>
              <input
                type="text"
                value={formData.idCard}
                onChange={(e) => setFormData({...formData, idCard: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="x-xxxx-xxxxx-xx-x"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">เลขบัญชีธนาคาร</label>
              <input
                type="text"
                value={formData.bankAccount}
                onChange={(e) => setFormData({...formData, bankAccount: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="xxx-x-xxxxx-x"
              />
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              สมัครสมาชิก
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setCurrentPage('landing')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← กลับหน้าแรก
          </button>
        </div>
      </div>
    </div>
  );
};

// Login Page Component
const LoginPage = ({ setCurrentPage, setIsLoggedIn }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
      <div className="text-center mb-8">
        <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">เข้าสู่ระบบ</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">หมายเลขโทรศัพท์</label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="0xx-xxx-xxxx"
          />
        </div>
        
        <button
          onClick={() => {
            setIsLoggedIn(true);
            setCurrentPage('dashboard');
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          ส่ง OTP เพื่อเข้าสู่ระบบ
        </button>

        <div className="text-center">
          <span className="text-gray-600">ยังไม่มีบัญชี? </span>
          <button
            onClick={() => setCurrentPage('signup')}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setCurrentPage('landing')}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← กลับหน้าแรก
        </button>
      </div>
    </div>
  </div>
);

// Dashboard Component
const Dashboard = ({ setCurrentPage, userType, deals, walletBalance, notifications }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Finpays</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('wallet')}
              className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Wallet className="h-4 w-4" />
              <span>฿{walletBalance.toLocaleString()}</span>
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-800">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
            <button 
              onClick={() => setCurrentPage('admin')}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">ดีลทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-800">{deals.length}</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">รอชำระ</p>
              <p className="text-2xl font-bold text-orange-600">1</p>
            </div>
            <Clock className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">กำลังจัดส่ง</p>
              <p className="text-2xl font-bold text-blue-600">1</p>
            </div>
            <Truck className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>

              <p className="text-gray-600 text-sm">รายได้เดือนนี้</p>
              <p
          onClick={() => {
            // setIsLoggedIn(true);
            setCurrentPage('referral');
          }}
          className="text-2xl font-bold text-green-600"
        >
          ฿{walletBalance.toLocaleString()}
        </p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Deals List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">ดีลล่าสุด</h3>
                <button
                  onClick={() => setCurrentPage('createDeal')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>สร้างดีล</span>
                </button>
              </div>
            </div>
            <div className="divide-y">
              {deals.map((deal) => (
                <div key={deal.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                     onClick={() => setCurrentPage('dealDetail')}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{deal.product}</h4>
                      <p className="text-gray-600 text-sm mb-2">รหัส: {deal.id}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>ผู้ซื้อ: {deal.buyer}</span>
                        <span>฿{deal.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        deal.status === 'PAID' ? 'bg-green-100 text-green-800' :
                        deal.status === 'SHIPPED' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {deal.status === 'PAID' ? 'ชำระแล้ว' :
                         deal.status === 'SHIPPED' ? 'จัดส่งแล้ว' : 'รอชำระ'}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{deal.createdAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">การแจ้งเตือน</h3>
            </div>
            <div className="divide-y">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4">
                  <p className="text-sm text-gray-800 mb-1">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">เมนูด่วน</h3>
            </div>
            <div className="p-6 space-y-3">
              <button
                onClick={() => setCurrentPage('createDeal')}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Plus className="h-5 w-5 text-blue-600" />
                <span>สร้างดีลใหม่</span>
              </button>
              <button
                onClick={() => setCurrentPage('wallet')}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Wallet className="h-5 w-5 text-green-600" />
                <span>จัดการกระเป๋าเงิน</span>
              </button>
              <button
                onClick={() => setCurrentPage('referral')}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Users className="h-5 w-5 text-blue-600" />
                <span>แนะนำเพื่อน</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <span>รายงานยอดขาย</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Create Deal Component
const CreateDeal = ({ setCurrentPage, deals, setDeals }) => {
  const [formData, setFormData] = useState({
    product: '',
    price: '',
    shipping: '',
    description: '',
    confirmDays: 7
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = {
      id: `DL${String(deals.length + 1).padStart(3, '0')}`,
      product: formData.product,
      price: parseInt(formData.price),
      shipping: parseInt(formData.shipping),
      buyer: 'รอผู้ซื้อ',
      seller: 'คุณ',
      status: 'PENDING',
      createdAt: new Date().toISOString().split('T')[0],
      confirmDeadline: new Date(Date.now() + formData.confirmDays * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    setDeals([...deals, newDeal]);
    setCurrentPage('payment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold">สร้างดีลใหม่</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">ชื่อสินค้า</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="เช่น iPhone 15 Pro Max 256GB"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">ราคาสินค้า (บาท)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">ค่าจัดส่ง (บาท)</label>
                    <input
                      type="number"
                      value={formData.shipping}
                      onChange={(e) => setFormData({...formData, shipping: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">รายละเอียดสินค้า</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32"
                    placeholder="อธิบายรายละเอียดสินค้า สภาพ การใช้งาน ฯลฯ"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">ระยะเวลายืนยันรับสินค้า</label>
                  <select
                    value={formData.confirmDays}
                    onChange={(e) => setFormData({...formData, confirmDays: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value={3}>3 วัน</option>
                    <option value={7}>7 วัน</option>
                    <option value={14}>14 วัน</option>
                    <option value={30}>30 วัน</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">สรุปค่าธรรมเนียม</h4>
                  <div className="space-y-1 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>ราคาสินค้า:</span>
                      <span>฿{formData.price ? parseInt(formData.price).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ค่าจัดส่ง:</span>
                      <span>฿{formData.shipping ? parseInt(formData.shipping).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ค่าธรรมเนียม (2%):</span>
                      <span>฿{formData.price ? Math.round(parseInt(formData.price) * 0.02).toLocaleString() : '0'}</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-1">
                      <span>คุณจะได้รับ:</span>
                      <span>฿{formData.price ? (parseInt(formData.price) - Math.round(parseInt(formData.price) * 0.02)).toLocaleString() : '0'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentPage('dashboard')}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    สร้างดีล & สร้าง QR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Payment Page Component
const PaymentPage = ({ setCurrentPage, deal }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">ชำระเงิน - {deal?.id}</h1>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
          <QrCode className="h-32 w-32 mx-auto mb-6 text-blue-600" />
          <h2 className="text-2xl font-bold mb-4">สแกน QR เพื่อชำระเงิน</h2>
          <p className="text-gray-600 mb-6">กรุณาสแกน QR Code ด้วยแอป Banking หรือ PromptPay</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span>สินค้า:</span>
                <span className="font-semibold">{deal?.product}</span>
              </div>
              <div className="flex justify-between">
                <span>ราคา:</span>
                <span>฿{deal?.price?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>ค่าจัดส่ง:</span>
                <span>฿{deal?.shipping?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>รวมทั้งสิ้น:</span>
                <span>฿{((deal?.price || 0) + (deal?.shipping || 0)).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              ยกเลิก
            </button>
            <button
              onClick={() => setCurrentPage('dealDetail')}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              ชำระเงินแล้ว
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Deal Detail Component
const DealDetail = ({ setCurrentPage, deal }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">รายละเอียดดีล - {deal?.id}</h1>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-4">{deal?.product}</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">รหัสดีล:</span>
                  <span className="font-semibold">{deal?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ราคา:</span>
                  <span className="font-semibold">฿{deal?.price?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ค่าจัดส่ง:</span>
                  <span className="font-semibold">฿{deal?.shipping?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ผู้ซื้อ:</span>
                  <span className="font-semibold">{deal?.buyer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ผู้ขาย:</span>
                  <span className="font-semibold">{deal?.seller}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">วันที่สร้าง:</span>
                  <span className="font-semibold">{deal?.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">สถานะ:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    deal?.status === 'PAID' ? 'bg-green-100 text-green-800' :
                    deal?.status === 'SHIPPED' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {deal?.status === 'PAID' ? 'ชำระแล้ว' :
                     deal?.status === 'SHIPPED' ? 'จัดส่งแล้ว' : 'รอชำระ'}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            {deal?.trackingNumber && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">ข้อมูลการจัดส่ง</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">หมายเลขติดตาม:</span>
                    <span className="font-semibold">{deal.trackingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">กำหนดยืนยัน:</span>
                    <span className="font-semibold">{deal.confirmDeadline}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">การดำเนินการ</h3>
              <div className="space-y-3">
                {deal?.status === 'SHIPPED' && (
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    <Check className="inline mr-2 h-4 w-4" />
                    ยืนยันรับสินค้า
                  </button>
                )}
                <button 
                  onClick={() => setCurrentPage('dispute')}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <AlertTriangle className="inline mr-2 h-4 w-4" />
                  เปิดข้อพิพาท
                </button>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <MessageCircle className="inline mr-2 h-4 w-4" />
                  แชทกับคู่ค้า
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">ประวัติดีล</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <p className="font-semibold text-sm">ชำระเงินแล้ว</p>
                    <p className="text-xs text-gray-500">20 พ.ค. 2025 14:30</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                  <div>
                    <p className="font-semibold text-sm">จัดส่งสินค้า</p>
                    <p className="text-xs text-gray-500">21 พ.ค. 2025 09:15</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-1"></div>
                  <div>
                    <p className="font-semibold text-sm text-gray-500">รอยืนยันรับสินค้า</p>
                    <p className="text-xs text-gray-500">กำหนด 30 พ.ค. 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Dispute Page Component
const DisputePage = ({ setCurrentPage, deal }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('dealDetail')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">เปิดข้อพิพาท - {deal?.id}</h1>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="text-center mb-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">เปิดข้อพิพาท</h2>
            <p className="text-gray-600">กรุณาระบุปัญหาที่พบ เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชั่วโมง</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">ประเภทปัญหา</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                <option>ไม่ได้รับสินค้า</option>
                <option>สินค้าไม่ตรงตามรายละเอียด</option>
                <option>สินค้าเสียหาย</option>
                <option>ผู้ขายไม่ตอบ</option>
                <option>อื่นๆ</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">รายละเอียดปัญหา</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none h-32"
                placeholder="อธิบายปัญหาที่พบโดยละเอียด..."
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">แนบหลักฐาน (ถ้ามี)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">ลากไฟล์มาวาง หรือคลิกเพื่อเลือกไฟล์</p>
                <p className="text-xs text-gray-500 mt-1">รองรับ JPG, PNG, PDF ขนาดไม่เกิน 5MB</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setCurrentPage('dealDetail')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                ส่งข้อพิพาท
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// Wallet Page Component
const WalletPage = ({ setCurrentPage, balance }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">กระเป๋าเงิน</h1>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wallet Balance */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <Wallet className="h-8 w-8" />
                <span className="text-sm opacity-80">ยอดคงเหลือ</span>
              </div>
              <div className="text-4xl font-bold mb-2">฿{balance.toLocaleString()}</div>
              <p className="opacity-80">พร้อมใช้งาน</p>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">ประวัติการทำธุรกรรม</h3>
              </div>
              <div className="divide-y">
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Plus className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">ได้รับเงินจากดีล DL001</p>
                      <p className="text-sm text-gray-500">25 พ.ค. 2025 - 16:30</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">+฿44,100</span>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowLeft className="h-5 w-5 text-blue-600 rotate-180" />
                    </div>
                    <div>
                      <p className="font-semibold">ถอนเงินเข้าบัญชี xxx-x-12345-x</p>
                      <p className="text-sm text-gray-500">24 พ.ค. 2025 - 09:15</p>
                    </div>
                  </div>
                  <span className="text-red-600 font-semibold">-฿30,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Withdrawal */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">ถอนเงิน</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">จำนวนเงิน</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="0"
                    max={balance}
                  />
                  <p className="text-xs text-gray-500 mt-1">ยอดคงเหลือ: ฿{balance.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">บัญชีปลายทาง</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                    <option>กสิกรไทย xxx-x-12345-x</option>
                    <option>เพิ่มบัญชีใหม่</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  ถอนเงิน
                </button>
              </form>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">ข้อมูลการถอนเงิน</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• ระยะเวลา T+1 (วันทำการถัดไป)</li>
                <li>• ไม่มีค่าธรรมเนียม</li>
                <li>• ขั้นต่ำ 100 บาท</li>
                <li>• เวลาทำการ 09:00-17:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Admin Dashboard Component
const AdminDashboard = ({ setCurrentPage, deals }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold">แดชบอร์ดผู้ดูแลระบบ</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">Admin Panel</span>
          </div>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">ดีลทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-800">{deals.length}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">ข้อพิพาท</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">รายได้วันนี้</p>
              <p className="text-2xl font-bold text-green-600">฿2,450</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">ผู้ใช้ใหม่</p>
              <p className="text-2xl font-bold text-purple-600">18</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Deals */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">ดีลล่าสุด</h3>
          </div>
          <div className="divide-y max-h-96 overflow-y-auto">
            {deals.map((deal) => (
              <div key={deal.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm">{deal.product}</p>
                    <p className="text-xs text-gray-500">{deal.id} - {deal.buyer}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      deal.status === 'PAID' ? 'bg-green-100 text-green-800' :
                      deal.status === 'SHIPPED' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {deal.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">฿{deal.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Logs */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">ระบบ Logs</h3>
          </div>
          <div className="divide-y max-h-96 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">Payment callback received - DL001</p>
                  <p className="text-xs text-gray-500">25 พ.ค. 2025 14:30:25</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">New user registration - user_12345</p>
                  <p className="text-xs text-gray-500">25 พ.ค. 2025 13:15:10</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">Dispute opened - DL003</p>
                  <p className="text-xs text-gray-500">25 พ.ค. 2025 12:45:33</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">KYC verification pending - user_12340</p>
                  <p className="text-xs text-gray-500">25 พ.ค. 2025 11:20:15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="mt-8">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">เครื่องมือผู้ดูแล</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium">จัดการผู้ใช้</span>
            </button>
            <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium">จัดการข้อพิพาท</span>
            </button>
            <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium">รายงานรายได้</span>
            </button>
            <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="h-8 w-8 text-gray-600 mb-2" />
              <span className="text-sm font-medium">ตั้งค่าระบบ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FinpaysPrototype;