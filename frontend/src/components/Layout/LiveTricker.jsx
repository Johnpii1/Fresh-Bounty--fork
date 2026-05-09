function LiveTricker() {
  return (
    <div className="w-full overflow-hidden bg-[#0a0a0a] py-3 mt-8 relative">

      {/* FADE EDGES */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="ticker-track">

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="ticker-content">

            <span className="icon">🚀</span>
            Welcome to Happy Bounty •

            <span className="icon">💰</span>
            Earn Rewards •

            <span className="icon">🧩</span>
            Complete Tasks •

            <span className="icon">⚡</span>
            Instant Payouts •

            <span className="icon">🎯</span>
            New Bounties Added Daily •

          </div>
        ))}

      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-content {
          white-space: nowrap;
          padding-right: 60px;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;

          background: linear-gradient(90deg, #ff1ac6, #ff4dff, #00ffe1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          text-shadow: 0 0 10px rgba(255, 26, 198, 0.2);
        }

        /* ✅ FIXED ICON STYLE */
        .icon {
          display: inline-flex;
          font-size: 16px;
          -webkit-text-fill-color: initial; /* important fix */
          animation: float 2.5s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(255, 26, 198, 0.4));
        }

        .icon:nth-of-type(2n) {
          animation-delay: 0.3s;
        }

        .icon:nth-of-type(3n) {
          animation-delay: 0.6s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>

    </div>
  );
}

export default LiveTricker;