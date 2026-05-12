

import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* BACK */}
      <Link
        to="/"
        className="text-pink-400 mb-8 inline-block"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      {/* PROFILE */}
      <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 mb-6">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Profile</h2>
        <p className="text-gray-300">Manage your personal information</p>
      </div>

      {/* APPEARANCE */}
      <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 mb-6">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Appearance</h2>
        <button className="px-4 py-2 bg-pink-500 rounded-xl">
          Toggle Theme
        </button>
      </div>

      {/* WALLET */}
      <div className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 mb-6">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Wallet</h2>
        <Link
  to="/ConnectConfig"
  className="px-4 py-2 bg-pink-500 rounded-xl inline-block text-center"
>
  Connect Wallet
</Link>
      </div>

    </div>
  );
}