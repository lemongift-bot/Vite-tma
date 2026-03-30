import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // Asosiy tugmani sozlash
    tg.MainButton.setText("PROFILGA O'TISH");
    tg.MainButton.show();
    tg.MainButton.enable();

    const handleClick = () => {
      navigate('/profile');
    };

    tg.onEvent('mainButtonClicked', handleClick);

    // Sahifadan chiqayotganda eventni tozalash
    return () => {
      tg.offEvent('mainButtonClicked', handleClick);
      tg.MainButton.hide();
    };
  }, [navigate, tg]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bosh sahifa 🏠</h1>
      <p>Telegram pastki tugmasini bosing yoki pastdagi havoladan foydalaning:</p>
      <button 
        onClick={() => navigate('/profile')}
        style={{ padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
      >
        Profilga o'tish
      </button>
    </div>
  );
};

export default Home;
