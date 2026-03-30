import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.BackButton.show();
    const handleBack = () => navigate('/');
    tg.onEvent('backButtonClicked', handleBack);

    return () => {
      tg.offEvent('backButtonClicked', handleBack);
      tg.BackButton.hide();
    };
  }, [navigate, tg]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Profil 👤</h1>
      <p>Ism: {tg.initDataUnsafe?.user?.first_name || 'Foydalanuvchi'}</p>
      <button onClick={() => navigate('/')}>Orqaga</button>
    </div>
  );
};

export default Profile;
