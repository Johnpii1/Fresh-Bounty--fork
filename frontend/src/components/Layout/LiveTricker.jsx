function LiveTricker() {
  return (
    <div className="w-full">
      <div className="ticker mt-8">
        <div className="ticker-track text-green-400 font-semibold">
          <div className="ticker-content">
            🚀 Welcome to Happy Bounty • 💰 Earn Rewards • 🧩 Complete Tasks • ⚡ Instant Payouts • 🎯 New Bounties Added Daily •
          </div>

          <div className="ticker-content">
            🚀 Welcome to Happy Bounty • 💰 Earn Rewards • 🧩 Complete Tasks • ⚡ Instant Payouts • 🎯 New Bounties Added Daily •
          </div>
        </div>
      </div>

      <style>{`
        .ticker {
          overflow: hidden;
          white-space: nowrap;
          background: #111827;
          padding: 10px 0;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }

        .ticker-content {
          white-space: nowrap;
          padding-right: 50px;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default LiveTricker;