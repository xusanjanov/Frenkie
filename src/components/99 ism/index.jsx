import React from 'react';

const allohIsmlari = [
    "Ar-Rahman", "Ar-Rahim", "Al-Malik", "Al-Quddus", "As-Salam", "Al-Mu'min", "Al-Muhaymin", "Al-Aziz", "Al-Jabbar", "Al-Mutakabbir",
    "Al-Khaliq", "Al-Bari'", "Al-Musawwir", "Al-Ghaffar", "Al-Qahhar", "Al-Wahhab", "Ar-Razzaq", "Al-Fattah", "Al-`Alim", "Al-Qabid",
    "Al-Basit", "Al-Khafid", "Ar-Rafi`", "Al-Mu'izz", "Al-Mudhill", "As-Sami`", "Al-Basir", "Al-Hakam", "Al-`Adl", "Al-Latif", 
    "Al-Khabir", "Al-Halim", "Al-Azim", "Al-Ghafur", "Ash-Shakur", "Al-`Aliyy", "Al-Kabir", "Al-Hafiz", "Al-Muqit", "Al-Hasib", 
    "Al-Jalil", "Al-Karim", "Ar-Raqib", "Al-Mujib", "Al-Wasi`", "Al-Hakim", "Al-Wadud", "Al-Majid", "Al-Ba'ith", "Ash-Shahid", 
    "Al-Haqq", "Al-Wakil", "Al-Qawiyy", "Al-Matin", "Al-Waliyy", "Al-Hamid", "Al-Muhsi", "Al-Mubdi'", "Al-Mu`id", "Al-Muhyi", 
    "Al-Mumit", "Al-Hayy", "Al-Qayyum", "Al-Wajid", "Al-Majid", "Al-Wahid", "Al-Ahad", "As-Samad", "Al-Qadir", "Al-Muqtadir", 
    "Al-Muqaddim", "Al-Mu'akhkhir", "Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin", "Al-Waliyy", "Al-Mut`ali", "Al-Barr", 
    "At-Tawwab", "Al-Muntaqim", "Al-`Afuww", "Ar-Ra'uf", "Malik al-Mulk", "Dhul-Jalali wal-Ikram", "Al-Muqsit", "Al-Jami`", 
    "Al-Ghaniyy", "Al-Mughni", "Al-Mani`", "Ad-Darr", "An-Nafi`", "An-Nur", "Al-Hadi", "Al-Badi'", "Al-Baqi", "Al-Warith", 
    "Ar-Rashid", "As-Sabur"
  ];
  
const AllohIsmlari = () => {
  return (
    <div>
      <h1>Allohning 99 ta Ismi</h1>
      <ul>
        {allohIsmlari.map((ism, index) => (
          <li key={index}>{ism}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllohIsmlari;
