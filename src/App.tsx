import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileOverlay } from './components/layout/MobileOverlay';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Customers } from './pages/Customers';
import { Reports } from './pages/Reports';
import { Performance } from './pages/Performance';
import { Settings } from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar isOpen={sidebarOpen} />
          </div>

          {/* Mobile Sidebar with Overlay */}
          <div className="lg:hidden">
            <MobileOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
              <Sidebar isOpen={true} />
            </MobileOverlay>
          </div>
          
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;