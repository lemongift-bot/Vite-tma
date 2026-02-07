import { useEffect, useState } from 'react';
import './App.css';

// SDK ni window ob'ektidan olish
const tg = (window as any).Telegram.WebApp;

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Ilovani tayyorlash
    tg.ready();
    tg.expand(); // Ilovani to'liq ekranga yoyish

    // Foydalanuvchi ma'lumotlarini olish
    setUser(tg.initDataUnsafe?.user);

    // Asosiy tugma
    tg.MainButton.text = "Salom Berish";
    tg.MainButton.show();
    
    tg.MainButton.onClick(() => {
      tg.showAlert("Salom, " + tg.initDataUnsafe?.user?.first_name);
    });

    return () => tg.MainButton.hide();
  }, []);

  return (
    <div className="app-container">
      <h1>Mening Mini Appim</h1>
      {user ? (
        <div className="user-card">
          <p><b>Ism:</b> {user.first_name}</p>
          <p><b>Username:</b> @{user.username}</p>
          <p><b>ID:</b> {user.id}</p>
        </div>
      ) : (
        <p>Telegramdan tashqarida ishga tushirildi</p>
      )}
      <button className="close-btn" onClick={() => tg.close()}>Yopish</button>
    </div>
  );
}

export default App;
