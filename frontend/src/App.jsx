import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { JobSeekerDashboard } from './components/JobSeekerDashboard';
import { RecruiterDashboard } from './components/RecruiterDashboard';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [initialLoginType, setInitialLoginType] = useState(null);

  const handleUserTypeSelect = (type, name) => {
    setInitialLoginType(type);
    setCurrentView('login');
  };

  const handleLogin = (type, name, email) => {
    setUserType(type);
    setUserName(name);
    setUserEmail(email);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setUserName('');
    setUserEmail('');
    setInitialLoginType(null);
    setCurrentView('landing');
  };

  const handleBackToLanding = () => {
    setInitialLoginType(null);
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return <LandingPage onUserTypeSelect={handleUserTypeSelect} />;
  }

  if (currentView === 'login') {
    return (
      <LoginPage 
        onLogin={handleLogin} 
        onBackToLanding={handleBackToLanding}
        initialUserType={initialLoginType}
      />
    );
  }

  return (
    <div>
      {userType === 'jobseeker' ? (
        <JobSeekerDashboard userName={userName} onLogout={handleLogout} />
      ) : (
        <RecruiterDashboard userName={userName} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;