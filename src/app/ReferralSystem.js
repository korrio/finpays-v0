import React, { useState } from 'react';
import { 
  Users, 
  ArrowLeft, 
  DollarSign, 
  Copy
} from 'lucide-react';

const ReferralSystem = ({ setCurrentPage }) => {
  const [referralStats] = useState({
    totalReferrals: 0,
    referralLink: 'https://finpays.io/?ref=2FCV5HTZFZ',
    totalEarnings: 0,
    holdAmount: 0,
    availableForWithdrawal: 0,
    payoutsAmount: 0,
    potentialPayments: 0,
    testAccesses: 0
  });

  const copyReferralLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(referralStats.referralLink);
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage && setCurrentPage('dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold">Referral Program</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Referral Program Info */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-7 w-7 text-purple-600" />
                <h2 className="text-xl font-semibold">Referral Program</h2>
              </div>
              <div className="text-gray-600 space-y-2">
                <p>คุณจะได้รับ <strong className="text-purple-600">30-50%</strong> จากการซื้อและต่ออายุสมาชิกของผู้ที่คุณแนะนำ:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p><strong className="text-purple-700">50% Commission:</strong></p>
                    <p className="text-sm text-purple-600">Test, Business, Platinum, Enterprise, GURU</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p><strong className="text-orange-700">30% Commission:</strong></p>
                    <p className="text-sm text-orange-600">VIP Package</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">จำนวนผู้ที่แนะนำ</span>
                    <span className="text-2xl font-bold text-purple-600">{referralStats.totalReferrals}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 mb-2">Referral Link</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={referralStats.referralLink}
                        readOnly
                        className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                      />
                      <button
                        onClick={copyReferralLink}
                        className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Balance Section */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-7 w-7 text-green-600" />
                  <h2 className="text-xl font-semibold">ยอดคงเหลือ</h2>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-sm text-green-700">เปอร์เซ็นต์จากการชำระ</span>
                  <span className="text-lg font-bold text-green-700">50%</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">ยอดรวมที่ได้รับ</div>
                  <div className="text-2xl font-bold text-gray-800">${referralStats.totalEarnings}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">ยอดที่ถูกพัก</div>
                  <div className="text-2xl font-bold text-gray-400">${referralStats.holdAmount}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">พร้อมถอน</div>
                  <div className="text-2xl font-bold text-purple-600">${referralStats.availableForWithdrawal}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">ยอดที่ถอนแล้ว</div>
                  <div className="text-2xl font-bold text-purple-600">${referralStats.payoutsAmount}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">การชำระที่คาดการณ์</div>
                  <div className="text-2xl font-bold text-purple-600">${referralStats.potentialPayments} (0 pc)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Test accesses</div>
                  <div className="text-2xl font-bold text-purple-600">{referralStats.testAccesses} pc</div>
                </div>
              </div>

              <div className="mt-6">
                <button 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={referralStats.availableForWithdrawal === 0}
                >
                  <span>สั่งถอนเงิน</span>
                </button>
              </div>
            </div>
          </div>

          {/* Referral History Table */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">ประวัติการแนะนำ</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ผู้ใช้</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วันที่สมัคร</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">แพ็กเกจ</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-center text-gray-500" colSpan="5">
                      ยังไม่มีผู้ใช้ที่สมัครผ่านลิงก์ของคุณ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">วิธีการทำงาน</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">แชร์ลิงก์</h4>
                  <p className="text-sm text-gray-600">แชร์ลิงก์ referral ของคุณไปยังเพื่อนและครอบครัว</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">พวกเขาสมัครสมาชิก</h4>
                  <p className="text-sm text-gray-600">เมื่อมีคนสมัครผ่านลิงก์ของคุณและซื้อแพ็กเกจ</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">คุณได้รับ Commission</h4>
                  <p className="text-sm text-gray-600">รับ 30-50% จากการซื้อแพ็กเกจของผู้ที่คุณแนะนำ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing Tools */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">เครื่องมือแชร์</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold">f</span>
                  </div>
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-green-600 font-bold">L</span>
                  </div>
                  <span className="text-sm font-medium">Line</span>
                </button>
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-pink-600 font-bold">IG</span>
                  </div>
                  <span className="text-sm font-medium">Instagram</span>
                </button>
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold">T</span>
                  </div>
                  <span className="text-sm font-medium">Twitter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-800 mb-3">ข้อกำหนดและเงื่อนไข</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Commission จะถูกคำนวณจากยอดซื้อแพ็กเกจสุทธิ (ไม่รวม VAT)</li>
              <li>• การจ่าย Commission จะเกิดขึ้นหลังจากผู้ที่แนะนำใช้งานครบ 30 วัน</li>
              <li>• สามารถถอน Commission ขั้นต่ำ $50 ต่อครั้ง</li>
              <li>• การจ่ายเงินจะดำเนินการภายใน 7 วันทำการ</li>
              <li>• Finpays ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งล่วงหน้า</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSystem;