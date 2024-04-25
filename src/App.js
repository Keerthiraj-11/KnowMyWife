import React, { useRef } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const videoRef = useRef(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div className="app-container">
      <button className="center-button" onClick={handleStartCamera}>Click Here to Know Answer.</button>
      <div>
        <video ref={videoRef} autoPlay={true} />
      </div>
    </div>
  );
}

export default App;
