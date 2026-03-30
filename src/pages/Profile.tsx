import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // Orqaga qaytish tugmasini ko'rsatish
    tg.BackButton.show();

    const handleBack = () => {
      navigate('/');
    };

    tg.onEvent('backButtonClicked', handleBack);

    // Sahifadan chiqayotganda yashirish
    return () => {
      tg.offEvent('backButtonClicked', handleBack);
      tg.BackButton.hide();
    };
  }, [navigate, tg]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Mening Profilim 👤</h1>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
        <p>Ism: <b>{tg.initDataUnsafe?.user?.first_name || 'Foydalanuvchi'}</b></p>
        <p>ID: <code>{tg.initDataUnsafe?.user?.id || 'Noma'lum'}</code></p>
      </div>
      <br />
      <button onClick={() => navigate('/')}>Bosh sahifaga qaytish</button>
    </div>
  );
};

export default Profile;
