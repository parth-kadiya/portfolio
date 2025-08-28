// src/components/Donate.js
import React, { useEffect } from 'react';
import './Ai.css';

// 🆕 Import custom hook and animation CSS
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/ScrollAnimation.css'; // If not already globally imported

export default function Ai() {
  useEffect(() => {
    window.scrollTo(0, 0);  // माउंट होते ही टॉप पर स्क्रॉल
  }, []);

  // PUBLIC_URL के साथ assets path
  const rawPath = `${process.env.PUBLIC_URL}/assets/Gpay.png`;
  const qrImage = encodeURI(rawPath); // spaces को encode करने के लिए

  // 🆕 Hook for scroll animation
    const [ref, isVisible] = useScrollAnimation();

  // Download handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrImage;
    // download attribute में सिर्फ filename चाहिए
    link.download = 'Gpay.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share handler (Web Share API)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Donate via UPI',
          text: 'Scan this QR code to donate via UPI.',
          url: window.location.origin + qrImage
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      alert('Your browser does not support sharing.');
    }
  };

  return (
    <div
  className={`donate-page scroll-animate ${isVisible ? 'visible' : ''}`}
  ref={ref}
>
      <h2>Coming Soon</h2>
      <div className="qr-container">
        <img src={qrImage} alt="UPI QR Code" className="qr-image" />
      </div>
      <div className="actions">
        <button onClick={handleDownload} className="action-btn">
          <i className="fa-solid fa-download"></i> Download
        </button>
        <button onClick={handleShare} className="action-btn">
          <i className="fa-solid fa-share-nodes"></i> Share
        </button>
      </div>
    </div>
  );
}
