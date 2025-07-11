import React from 'react';

const Background = () => {
  return (
    <>
      {/* 🌸 Soft pastel gradient background */}
      <div className="absolute inset-0 z-[-10] bg-[radial-gradient(ellipse_at_top_left,#ffe6f0_10%,#fceeff_40%,#fddde6_60%,#e0f7f4_80%,_#e6ccff_100%)]" />

      {/* 🌈 10 animated pastel blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,#fbeffb_60%,#e0c3fc_100%)] opacity-50 blur-[2px] animate-[floatBlob_8s_ease-in-out_infinite_alternate] z-0 pointer-events-none shadow-[0_0_80px_20px_#e0c3fc55]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,#f67280_60%,#e0c3fc_100%)] opacity-50 blur-[2px] animate-[floatBlob_9s_ease-in-out_infinite_alternate] delay-[2s] shadow-[0_0_80px_20px_#f6728055] z-0 pointer-events-none" />
      <div className="absolute top-[40%] left-[-100px] w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,#c06c84_60%,#fbeffb_100%)] opacity-30 blur-[2px] animate-[floatBlob_7s_ease-in-out_infinite_alternate] delay-[4s] shadow-[0_0_60px_10px_#c06c8455] z-0 pointer-events-none" />
      <div className="absolute top-[70%] right-[10%] w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,#fbeffb_60%,#f67280_100%)] opacity-25 blur-[2px] animate-[floatBlob_6s_ease-in-out_infinite_alternate] delay-[6s] shadow-[0_0_40px_10px_#f6728055] z-0 pointer-events-none" />
      <div className="absolute top-[10%] right-[20%] w-[160px] h-[160px] rounded-full bg-[radial-gradient(circle,#e0c3fc_60%,#fbeffb_100%)] opacity-40 blur-[2px] animate-[floatBlob_10s_ease-in-out_infinite_alternate] delay-[1s] shadow-[0_0_60px_15px_#e0c3fc44] z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[25%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,#ffd6e0_60%,#fceeff_100%)] opacity-30 blur-[3px] animate-[floatBlob_9s_ease-in-out_infinite_alternate] delay-[3s] shadow-[0_0_70px_10px_#ffd6e055] z-0 pointer-events-none" />
      <div className="absolute top-[50%] right-[30%] w-[130px] h-[130px] rounded-full bg-[radial-gradient(circle,#d4bfff_60%,#fbeffb_100%)] opacity-35 blur-[2px] animate-[floatBlob_7s_ease-in-out_infinite_alternate] delay-[5s] shadow-[0_0_50px_10px_#d4bfff55] z-0 pointer-events-none" />
      <div className="absolute top-[60%] left-[20%] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,#ffe6fa_60%,#e0c3fc_100%)] opacity-30 blur-[2px] animate-[floatBlob_8s_ease-in-out_infinite_alternate] delay-[1s] shadow-[0_0_50px_10px_#ffe6fa55] z-0 pointer-events-none" />
      <div className="absolute top-[85%] right-[5%] w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,#ffcce0_60%,#ffe6f0_100%)] opacity-25 blur-[3px] animate-[floatBlob_9s_ease-in-out_infinite_alternate] delay-[2s] shadow-[0_0_40px_10px_#ffcce055] z-0 pointer-events-none" />
      <div className="absolute top-[30%] right-[50%] w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,#e6ccff_60%,#fbeffb_100%)] opacity-30 blur-[2px] animate-[floatBlob_10s_ease-in-out_infinite_alternate] delay-[2s] shadow-[0_0_60px_15px_#e6ccff55] z-0 pointer-events-none" />

      {/* 🎈 50 light blue floating bubbles */}
      {[...Array(50)].map((_, i) => {
        const size = Math.floor(Math.random() * 80) + 100; // 100–180px
        const top = Math.floor(Math.random() * 100);
        const left = Math.floor(Math.random() * 100);
        const duration = (Math.random() * 15 + 10).toFixed(1); // 10–25s (faster now)
        const delay = (Math.random() * 10).toFixed(1);
        return (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none z-0 animate-bubble"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'rgba(173, 216, 230, 0.15)', // light blue
              border: '1px solid rgba(173,216,230,0.25)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationTimingFunction: 'ease-in-out',
            }}
          />
        );
      })}

      {/* 🎥 Keyframe styles */}
      <style>
        {`
          @keyframes floatBlob {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(40px) scale(1.07) rotate(2deg); }
          }

          @keyframes bubbleFloat {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translate(-20px, -40px) scale(1.05);
              opacity: 1;
            }
            100% {
              transform: translate(20px, -60px) scale(1.1);
              opacity: 0.8;
            }
          }

          .animate-bubble {
            animation-name: bubbleFloat;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </>
  );
};

export default Background;









