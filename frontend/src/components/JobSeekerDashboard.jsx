import { useState } from 'react';
import { Brain, LogOut, User, TrendingUp, Target, Briefcase, FileSearch, Menu, X } from 'lucide-react';
import { SkillProfile } from './SkillProfile';
import { SkillGapAnalysis } from './SkillGapAnalysis';
import { CareerPathView } from './CareerPathView';
import { JobRecommendations } from './JobRecommendations';
import { ResumeAnalyzer } from './ResumeAnalyzer';

export function JobSeekerDashboard({ userName, onLogout }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'resume-analyzer', label: 'Resume Analyzer', icon: FileSearch },
    { id: 'gap-analysis', label: 'Gap Analysis', icon: Target },
    { id: 'career-path', label: 'Career Path', icon: TrendingUp },
    { id: 'job-recommendations', label: 'Jobs', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-purple-600" />
                <span className="text-xl text-purple-900">SkillNuron AI</span>
              </div>
            )}
            {sidebarCollapsed && (
              <div className="mx-auto">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
                sidebarCollapsed ? 'hidden' : 'block'
              }`}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {sidebarCollapsed && (
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="mt-2 p-2 hover:bg-gray-100 rounded-lg transition-colors mx-auto block"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${sidebarCollapsed ? 'justify-center' : ''}`}
                title={sidebarCollapsed ? item.label : ''}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200">
          {!sidebarCollapsed ? (
            <div className="mb-3">
              <p className="text-xs text-gray-500">Logged in as</p>
              <p className="text-sm text-gray-900 truncate">{userName}</p>
            </div>
          ) : (
            <div className="mb-3 flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${
              sidebarCollapsed ? 'justify-center' : ''
            }`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <LogOut className="w-4 h-4" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      >
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white transition-transform duration-300 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Sidebar Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-purple-600" />
              <span className="text-xl text-purple-900">SkillNuron AI</span>
            </div>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile User Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="mb-3">
              <p className="text-xs text-gray-500">Logged in as</p>
              <p className="text-sm text-gray-900 truncate">{userName}</p>
            </div>
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileSidebarOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
                <div>
                  <h1 className="text-xl lg:text-2xl text-gray-900">
                    {menuItems.find(item => item.id === activeTab)?.label}
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Welcome back, {userName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm">
                  <Brain className="w-4 h-4" />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="px-4 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto w-full">
            {activeTab === 'profile' && <SkillProfile />}
            {activeTab === 'resume-analyzer' && <ResumeAnalyzer />}
            {activeTab === 'gap-analysis' && <SkillGapAnalysis />}
            {activeTab === 'career-path' && <CareerPathView />}
            {activeTab === 'job-recommendations' && <JobRecommendations />}
          </div>
        </main>
      </div>
    </div>
  );
}
