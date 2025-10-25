'use client';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function InternshipsPage() {
  const [opportunities, setOpportunities] = useState([]);
  const [showFinalHeading, setShowFinalHeading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchData = async () => {
      try {
        const res = await fetch(`${window.location.origin}/api/internships`);
        const data = await res.json();
        setOpportunities(data.opportunities);
      } catch (err) {
        console.error('Failed to fetch internships:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white px-6 py-10 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-32 h-32 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-30 animate-ping"></div>

      {/* Slide-in Sidebar CTA */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-[#1a1a1a] text-white px-4 py-2 rounded-r-lg shadow-lg animate-slide-in z-50">
        <p className="text-sm font-medium">🚀 Level up your career!</p>
      </div>

      {/* Heading with Typewriter */}
      <h1
        data-aos="fade-down"
        className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        {!showFinalHeading ? (
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('🎓 Internships, Courses & Scholarships')
                .callFunction(() => setShowFinalHeading(true))
                .start();
            }}
          />
        ) : (
          '🎓 Internships, Courses & Scholarships'
        )}
      </h1>

      {/* Internship Cards */}
      {opportunities.length === 0 ? (
        <p className="text-center text-gray-400">Loading opportunities...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-pink-500 transition duration-300"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 relative z-10">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Apply / Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
