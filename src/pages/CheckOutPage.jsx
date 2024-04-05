import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

function generateOrderNumber() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 14; 
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

const CheckOutPage = () => {
    const [orderNumber, setOrderNumber] = useState(generateOrderNumber());
    const [confettiWidth, setConfettiWidth] = useState(0);
  const [confettiHeight, setConfettiHeight] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setConfettiWidth(window.innerWidth * 0.20); // Set the confetti width to 80% of the window width
    setConfettiHeight(window.innerHeight * 0.27); // Set the confetti width to 80% of the window width

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false); // Fade out the confetti after 3 seconds
    }, 3000);

    return () => clearTimeout(confettiTimer); // Clean up the timer when component unmounts
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mb-20 relative">
        <h1 className="text-2xl font-bold mb-4">Congrats on Your Order!🎉🎉</h1>
        <p className="text-lg mb-4">Here is your order number:</p>
        <p className="text-xl font-semibold mb-8">{orderNumber}</p>
        <p className="text-lg mb-3">Thank you for shopping with us.</p>
        <p className="text-lg">You will receive a confirmation email soon!</p>

        {/* Confetti component with fade-out animation */}
        {showConfetti && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Confetti
              width={confettiWidth}
              height={confettiHeight}
              numberOfPieces={200}
              recycle={false} // Prevent confetti from recycling
              opacity={1} // Set initial opacity to 1
              tweenDuration={3000} // Duration of the fade-out animation
              run={showConfetti} // Control when to run the confetti animation
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOutPage;
