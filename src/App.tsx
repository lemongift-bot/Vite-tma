import React, { useEffect } from 'react';

// Telegram WebApp obyekti uchun tip yaratamiz
declare global {
  interface Window {
    Telegram: any;
  }
}

const App: React.FC = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // Ilovani to'liq ekranga yoyish
    tg.ready();
    tg.expand();
  }, [tg]);

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      color: tg.themeParams.text_color || '#000',
      background: tg.themeParams.bg_color || '#fff',
      height: '100vh' 
    }}>
      <h1>Salom, Dunyo! 🌍</h1>
      <p>Foydalanuvchi: <b>{tg.initDataUnsafe?.user?.first_name || 'Mehmon'}</b></p>
      
      <button 
        onClick={() => tg.close()}
        style={{
          padding: '10px 20px',
          backgroundColor: tg.themeParams.button_color || '#248bed',
          color: tg.themeParams.button_text_color || '#ffffff',
          border: 'none',
          borderRadius: '8px',
          marginTop: '20px'
        }}
      >
        Ilovani yopish
      </button>
    </div>
  );
};

export default App;
