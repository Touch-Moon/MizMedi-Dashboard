import React, { useState, useEffect } from "react";
import svgPaths from '../../imports/svg-9lna0gexs7';
import './Navigation.scss';

// Logo SVG Components
const LogoIcon: React.FC = () => (
  <svg className="logo-icon" fill="none" viewBox="0 0 47.9315 47.9217">
    <g>
      <path d={svgPaths.p1d2ba380} fill="currentColor" />
      <path d={svgPaths.p16c64200} fill="currentColor" />
    </g>
  </svg>
);

const LogoText: React.FC = () => (
  <svg className="logo-text" fill="none" viewBox="0 0 91.3147 18.8449">
    <g>
      <path d={svgPaths.p21c14600} fill="currentColor" />
      <path d={svgPaths.p2c523d00} fill="currentColor" />
      <path d={svgPaths.p30fc3e00} fill="currentColor" />
      <path d={svgPaths.p2073b480} fill="currentColor" />
      <path d={svgPaths.p264e9880} fill="currentColor" />
      <path d={svgPaths.p2552ccf0} fill="currentColor" />
      <path d={svgPaths.pc137bc0} fill="currentColor" />
    </g>
  </svg>
);

const DownArrowIcon: React.FC = () => (
  <svg className="down-arrow-icon" fill="none" viewBox="0 0 12.2 6.7">
    <path
      d="M0.6 0.6L6.1 6.1L11.6 0.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
);

const MyChartIcon: React.FC = () => (
  <svg className="menu-icon" fill="none" viewBox="0 0 13.2 14.575">
    <path
      d={svgPaths.p274c5700}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
);

const LoginIcon: React.FC = () => (
  <svg className="menu-icon" fill="none" viewBox="0 0 11.6992 14.6992">
    <path d={svgPaths.p2f1ca700} fill="currentColor" />
  </svg>
);

const GlobalIcon: React.FC = () => (
  <svg className="menu-icon" fill="none" viewBox="0 0 13.7222 13.7222">
    <path
      d={svgPaths.p22e86780}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.722222"
    />
  </svg>
);

const HamburgerIcon: React.FC = () => (
  <svg className="hamburger-icon" fill="none" viewBox="0 0 19.2 15.7">
    <path
      d={svgPaths.p3f3e5080}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
);

// Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // body 스크롤 제어
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu: string) => {
    console.log(`Clicked: ${menu}`);
    setIsMenuOpen(false); // 메뉴 클릭시 모바일 메뉴 닫기
    // 메뉴 클릭 로직 추가
  };

  // 모바일 메뉴 오버레이 클릭시 닫기
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Mobile Hamburger Button */}
        <button 
          className="nav-mobile-hamburger"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <HamburgerIcon />
        </button>

        {/* Logo Section */}
        <div className="nav-logo-wrap">
          <button className="nav-logo" aria-label="홈으로 가기">
            <LogoIcon />
            <LogoText />
          </button>
          
          <div className="nav-divider" />
          
          <button className="nav-logo-menu" onClick={() => handleMenuClick('아이드림센터')}>
            <span>아이드림센터</span>
            <DownArrowIcon />
          </button>
        </div>

        {/* Desktop Menu */}
        <div 
          className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}
          onClick={handleOverlayClick}
        >
          <div className="nav-menu-main">
            <button onClick={() => handleMenuClick('센터 소개')}>센터 소개</button>
            <button onClick={() => handleMenuClick('진료분야')}>진료분야</button>
            <button onClick={() => handleMenuClick('아이드림 연구소')}>아이드림 연구소</button>
            <button onClick={() => handleMenuClick('감사합니다')}>감사합니다</button>
          </div>

          
        </div>

        <div className="nav-desktop-right">
            <div className="nav-menu-sign">
                <button className="nav-menu-sign-item" onClick={() => handleMenuClick('My Chart')}>
                <MyChartIcon />
                <span>My Chart</span>
                <div className="nav-menu-divider" />
                </button>
                
                <button className="nav-menu-sign-item" onClick={() => handleMenuClick('Login')}>
                <LoginIcon />
                <span>Login</span>
                <div className="nav-menu-divider" />
                </button>
                
                <button className="nav-menu-sign-item" onClick={() => handleMenuClick('Global')}>
                <GlobalIcon />
                <span>Global</span>
                </button>
            </div>
            {/* Desktop Hamburger Button */}
            <button 
            className="nav-desktop-hamburger"
            onClick={toggleMenu}
            aria-label="전체 메뉴"
            >
            <HamburgerIcon />
            </button>
        </div>

        
      </div>
    </nav>
  );
};

export default Navigation;