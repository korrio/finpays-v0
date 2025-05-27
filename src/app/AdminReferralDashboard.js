import React, { useState } from 'react';
import { 
  Users, 
  ArrowLeft, 
  DollarSign, 
  TrendingUp,
  Target,
  Award,
  Eye,
  Download,
  Filter,
  Search,
  MoreVertical,
  Crown,
  Star,
  ChevronDown,
  ChevronRight,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AdminReferralDashboard = ({ setCurrentPage }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [expandedNodes, setExpandedNodes] = useState(new Set(['user_001']));
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock MLM Data
  const [mlmStats] = useState({
    totalReferrers: 1247,
    totalCommissionPaid: 2847350,
    activeReferrers: 892,
    avgCommissionPerUser: 2285,
    topPerformers: 45,
    pendingPayouts: 156780,
    monthlyGrowth: 24.5,
    conversionRate: 12.3
  });

  const [mlmTree] = useState([
    {
      id: 'user_001',
      name: 'สมชาย ใจดี',
      email: 'somchai@email.com',
      level: 1,
      directReferrals: 8,
      totalNetwork: 156,
      totalCommission: 45600,
      monthlyCommission: 8950,
      joinDate: '2024-01-15',
      status: 'active',
      tier: 'diamond',
      children: [
        {
          id: 'user_002',
          name: 'สุดา จริงใจ',
          email: 'suda@email.com',
          level: 2,
          directReferrals: 5,
          totalNetwork: 23,
          totalCommission: 12400,
          monthlyCommission: 2850,
          joinDate: '2024-02-20',
          status: 'active',
          tier: 'gold',
          children: [
            {
              id: 'user_003',
              name: 'มานี รักดี',
              email: 'manee@email.com',
              level: 3,
              directReferrals: 3,
              totalNetwork: 8,
              totalCommission: 3200,
              monthlyCommission: 890,
              joinDate: '2024-03-10',
              status: 'active',
              tier: 'silver'
            },
            {
              id: 'user_004',
              name: 'วิชัย สร้างดี',
              email: 'wichai@email.com',
              level: 3,
              directReferrals: 2,
              totalNetwork: 5,
              totalCommission: 1800,
              monthlyCommission: 450,
              joinDate: '2024-03-25',
              status: 'inactive',
              tier: 'bronze'
            }
          ]
        },
        {
          id: 'user_005',
          name: 'อนันต์ พัฒนา',
          email: 'anan@email.com',
          level: 2,
          directReferrals: 7,
          totalNetwork: 35,
          totalCommission: 18900,
          monthlyCommission: 4200,
          joinDate: '2024-01-28',
          status: 'active',
          tier: 'platinum'
        }
      ]
    }
  ]);

  const [topPerformers] = useState([
    { id: 1, name: 'สมชาย ใจดี', commission: 45600, referrals: 156, growth: 24.5, tier: 'diamond' },
    { id: 2, name: 'อนันต์ พัฒนา', commission: 32400, referrals: 89, growth: 18.2, tier: 'platinum' },
    { id: 3, name: 'สุดา จริงใจ', commission: 28900, referrals: 67, growth: 15.8, tier: 'gold' },
    { id: 4, name: 'วิชา สำเร็จ', commission: 21500, referrals: 45, growth: 12.3, tier: 'gold' },
    { id: 5, name: 'มานี รักดี', commission: 18700, referrals: 38, growth: 9.7, tier: 'silver' }
  ]);

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const getTierIcon = (tier) => {
    switch(tier) {
      case 'diamond': return <Crown className="h-4 w-4 text-purple-600" />;
      case 'platinum': return <Award className="h-4 w-4 text-gray-600" />;
      case 'gold': return <Star className="h-4 w-4 text-yellow-600" />;
      case 'silver': return <Target className="h-4 w-4 text-gray-400" />;
      default: return <Users className="h-4 w-4 text-bronze-600" />;
    }
  };

  const getTierColor = (tier) => {
    switch(tier) {
      case 'diamond': return 'bg-purple-100 text-purple-800';
      case 'platinum': return 'bg-gray-100 text-gray-800';
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'silver': return 'bg-gray-50 text-gray-600';
      default: return 'bg-orange-100 text-orange-800';
    }
  };

  const MLMTreeNode = ({ node, level = 0 }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);

    return (
      <div className="ml-4" style={{ marginLeft: level * 24 }}>
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border hover:shadow-sm transition-all mb-2">
          {hasChildren && (
            <button
              onClick={() => toggleNode(node.id)}
              className="p-1 rounded hover:bg-gray-100"
            >
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          )}
          
          <div className="flex items-center space-x-2 flex-1">
            {getTierIcon(node.tier)}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800">{node.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(node.tier)}`}>
                  {node.tier}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  node.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {node.status}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {node.email} • Level {node.level}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-blue-600">{node.directReferrals}</div>
              <div className="text-gray-500">Direct</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-green-600">{node.totalNetwork}</div>
              <div className="text-gray-500">Network</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-purple-600">฿{node.monthlyCommission.toLocaleString()}</div>
              <div className="text-gray-500">Monthly</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-orange-600">฿{node.totalCommission.toLocaleString()}</div>
              <div className="text-gray-500">Total</div>
            </div>
          </div>

          <button className="p-2 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-6 border-l-2 border-gray-200 pl-4">
            {node.children.map(child => (
              <MLMTreeNode key={child.id} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('admin')}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold">Referral MLM Dashboard</h1>
                <p className="text-sm text-gray-600">จัดการและติดตามระบบ Multi-Level Marketing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="7d">7 วันล่าสุด</option>
                <option value="30d">30 วันล่าสุด</option>
                <option value="90d">90 วันล่าสุด</option>
                <option value="1y">1 ปีล่าสุด</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Referrers</p>
                <p className="text-2xl font-bold text-blue-600">{mlmStats.totalReferrers.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+{mlmStats.monthlyGrowth}% จากเดือนที่แล้ว</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Commission Paid</p>
                <p className="text-2xl font-bold text-green-600">฿{mlmStats.totalCommissionPaid.toLocaleString()}</p>
                <p className="text-xs text-blue-600 mt-1">฿{mlmStats.avgCommissionPerUser.toLocaleString()} ต่อคน</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Referrers</p>
                <p className="text-2xl font-bold text-purple-600">{mlmStats.activeReferrers}</p>
                <p className="text-xs text-gray-600 mt-1">{((mlmStats.activeReferrers/mlmStats.totalReferrers)*100).toFixed(1)}% Active Rate</p>
              </div>
              <Activity className="h-8 w-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Payouts</p>
                <p className="text-2xl font-bold text-orange-600">฿{mlmStats.pendingPayouts.toLocaleString()}</p>
                <p className="text-xs text-red-600 mt-1">รอการอนุมัติ</p>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'ภาพรวม', icon: BarChart3 },
                { id: 'tree', label: 'MLM Tree', icon: Users },
                { id: 'performers', label: 'Top Performers', icon: Award },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    selectedTab === tab.id 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
                    <p className="text-3xl font-bold">{mlmStats.conversionRate}%</p>
                    <p className="text-sm opacity-80">จากผู้เยี่ยมชมเป็นสมาชิก</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Avg Network Size</h3>
                    <p className="text-3xl font-bold">23.4</p>
                    <p className="text-sm opacity-80">คนต่อ Referrer</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Top Tier</h3>
                    <p className="text-3xl font-bold">{mlmStats.topPerformers}</p>
                    <p className="text-sm opacity-80">Diamond Members</p>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">กิจกรรมล่าสุด</h3>
                  <div className="space-y-3">
                    {[
                      { action: 'New Registration', user: 'สมชาย ใจดี', time: '5 นาทีที่แล้ว', type: 'success' },
                      { action: 'Commission Paid', user: 'สุดา จริงใจ', amount: '฿2,850', time: '15 นาทีที่แล้ว', type: 'payout' },
                      { action: 'Level Up', user: 'มานี รักดี', tier: 'Silver → Gold', time: '1 ชั่วโมงที่แล้ว', type: 'upgrade' },
                      { action: 'Referral Made', user: 'อนันต์ พัฒนา', time: '2 ชั่วโมงที่แล้ว', type: 'referral' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' :
                            activity.type === 'payout' ? 'bg-blue-500' :
                            activity.type === 'upgrade' ? 'bg-purple-500' : 'bg-orange-500'
                          }`} />
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-gray-600">{activity.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {activity.amount && <p className="font-semibold text-green-600">{activity.amount}</p>}
                          {activity.tier && <p className="font-semibold text-purple-600">{activity.tier}</p>}
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'tree' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">MLM Network Tree</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="ค้นหา referrer..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600 mb-4">
                    <div>Referrer</div>
                    <div className="text-center">Direct</div>
                    <div className="text-center">Network</div>
                    <div className="text-center">Monthly</div>
                    <div className="text-center">Total</div>
                  </div>
                  
                  <div className="space-y-2">
                    {mlmTree.map(node => (
                      <MLMTreeNode key={node.id} node={node} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'performers' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Top Performers</h3>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                      <option>เรียงตาม Commission</option>
                      <option>เรียงตาม Network Size</option>
                      <option>เรียงตาม Growth Rate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Top Performers List */}
                  <div className="bg-white border rounded-lg">
                    <div className="p-4 border-b">
                      <h4 className="font-semibold">Commission Leaders</h4>
                    </div>
                    <div className="divide-y">
                      {topPerformers.map((performer, index) => (
                        <div key={performer.id} className="p-4 flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                            index === 0 ? 'bg-yellow-500' :
                            index === 1 ? 'bg-gray-400' :
                            index === 2 ? 'bg-orange-600' : 'bg-blue-500'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{performer.name}</span>
                              {getTierIcon(performer.tier)}
                            </div>
                            <div className="text-sm text-gray-600">
                              {performer.referrals} referrals • +{performer.growth}% growth
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600">
                              ฿{performer.commission.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Performance Comparison</h4>
                    <div className="space-y-4">
                      {topPerformers.slice(0, 5).map((performer, index) => (
                        <div key={performer.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{performer.name}</span>
                            <span>฿{performer.commission.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(performer.commission / topPerformers[0].commission) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Growth Chart */}
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Network Growth Trend</h4>
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {[65, 78, 82, 95, 103, 118, 125, 132, 145, 156, 168, 180].map((value, index) => (
                        <div key={index} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${(value/180)*100}%` }}>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Jan</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Tier Distribution */}
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Tier Distribution</h4>
                    <div className="space-y-3">
                      {[
                        { tier: 'Diamond', count: 45, percentage: 3.6, color: 'bg-purple-500' },
                        { tier: 'Platinum', count: 89, percentage: 7.1, color: 'bg-gray-500' },
                        { tier: 'Gold', count: 234, percentage: 18.8, color: 'bg-yellow-500' },
                        { tier: 'Silver', count: 567, percentage: 45.5, color: 'bg-gray-400' },
                        { tier: 'Bronze', count: 312, percentage: 25.0, color: 'bg-orange-600' }
                      ].map(tier => (
                        <div key={tier.tier} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded ${tier.color}`} />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-medium">{tier.tier}</span>
                              <span className="text-gray-600">{tier.count}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div 
                                className={`h-2 rounded-full ${tier.color}`}
                                style={{ width: `${tier.percentage}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{tier.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Monthly Commission Trends */}
                <div className="bg-white border rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Monthly Commission Trends</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">฿2.84M</div>
                      <div className="text-sm text-gray-600">Total Paid</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">฿157K</div>
                      <div className="text-sm text-gray-600">This Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">+24.5%</div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReferralDashboard;