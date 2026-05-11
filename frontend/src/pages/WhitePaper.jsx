import { Link } from "react-router-dom";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 py-10 max-w-5xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-pink-500/30 hover:bg-pink-500/10 transition backdrop-blur-md mb-10"
        >
          <span className="text-xl text-pink-400">←</span>
          <span className="text-sm font-medium text-white">Back</span>
        </Link>

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent mb-6">
          Whitepaper
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Welcome to the Happy Bounty Whitepaper. This document explains our mission,
          ecosystem, rewards system, token utility, governance structure, and long-term vision
          for a decentralized earning economy.
        </p>

        {/* SECTIONS */}
        <div className="space-y-12">

          {/* INTRO */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Happy Bounty is a Web3 task-based earning platform designed to connect users
              with decentralized opportunities. It allows anyone, regardless of background,
              to earn rewards by completing simple digital tasks.
            </p>
          </section>

          {/* HOW IT WORKS */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              2. How It Works
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Users participate by completing bounties such as social engagement, referrals,
              testing dApps, and on-chain interactions. Each task is verified using automated
              smart verification systems before rewards are distributed.
            </p>
          </section>

          {/* REWARDS */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              3. Rewards System
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Rewards are distributed in native platform tokens. Task value depends on difficulty,
              time requirement, and engagement quality. Higher effort tasks yield higher rewards,
              ensuring fairness and motivation.
            </p>
          </section>

          {/* TOKEN UTILITY */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              4. Token Utility
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Happy Bounty token is used for rewards, governance voting, staking, and premium
              task access. Users can also use tokens to boost visibility for their own bounty listings.
            </p>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              5. Security & Verification
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The platform uses fraud detection systems, wallet verification, and automated checks
              to ensure that all completed tasks are legitimate and fairly rewarded.
            </p>
          </section>

          {/* ECOSYSTEM */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              6. Ecosystem
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Happy Bounty connects users, advertisers, and developers in one ecosystem.
              Advertisers post tasks, users complete them, and developers build integrations
              that expand the platform’s functionality.
            </p>
          </section>

          {/* ROADMAP */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              7. Roadmap
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Phase 1: Platform launch and basic bounty system</li>
              <li>Phase 2: Token integration and wallet support</li>
              <li>Phase 3: DAO governance and voting system</li>
              <li>Phase 4: Mobile app and global expansion</li>
              <li>Phase 5: Full decentralization</li>
            </ul>
          </section>

          {/* GOVERNANCE */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              8. Governance
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Token holders will have voting power on platform decisions such as task approval
              systems, reward adjustments, and future development proposals.
            </p>
          </section>

          {/* RISK DISCLAIMER */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              9. Risk Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Participation in decentralized systems involves risks including token volatility,
              smart contract bugs, and market fluctuations. Users are encouraged to participate
              responsibly.
            </p>
          </section>

          {/* FUTURE VISION */}
          <section>
            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              10. Future Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our goal is to build a global decentralized workforce where anyone can earn income
              by contributing value online without geographical limitations.
            </p>
          </section>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-pink-500/20 text-center backdrop-blur-lg">

          <h3 className="text-2xl font-bold mb-3">
            Ready to start earning?
          </h3>

          <p className="text-gray-300 mb-6">
            Explore bounties and begin your Web3 journey today.
          </p>

          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 font-semibold transition"
          >
            Explore Bounties
          </Link>

        </div>

      </div>
    </div>
  );
}