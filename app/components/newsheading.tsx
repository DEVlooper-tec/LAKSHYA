'use client';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsHeading() {
  const [showFinalHeading, setShowFinalHeading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <h1
      data-aos="fade-down"
      className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
    >
      {!showFinalHeading ? (
        <Typewriter
          options={{ autoStart: true, loop: false, delay: 50 }}
          onInit={(typewriter) => {
            typewriter
              .typeString('📰 Latest Tech News & Updates')
              .callFunction(() => setShowFinalHeading(true))
              .start();
          }}
        />
      ) : (
        '📰 Latest Tech News & Updates'
      )}
    </h1>
  );
}
