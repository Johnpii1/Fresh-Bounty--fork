

import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 py-10">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-pink-500/30 hover:bg-pink-500/10 transition mb-10"
        >
          <span className="text-xl text-pink-400">←</span>
          <span className="text-sm font-medium">Back</span>
        </Link>

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent mb-3">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-10">
          Got questions, partnership requests, or feedback? Send us a message.
        </p>

        {/* FORM + INFO WRAPPER */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 p-6 rounded-3xl border border-pink-500/20 backdrop-blur-md"
          >

            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-pink-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-pink-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className="w-full mt-2 p-3 rounded-xl bg-black border border-gray-700 focus:border-pink-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 font-semibold transition"
            >
              Send Message
            </button>

          </form>

          {/* INFO SECTION */}
          <div className="space-y-6">

            <div className="p-6 rounded-3xl bg-white/5 border border-pink-500/20">
              <h3 className="text-xl font-bold mb-2 text-pink-400">
                Support
              </h3>
              <p className="text-gray-300">
                We respond within 24–48 hours for all user inquiries and partnerships.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-pink-500/20">
              <h3 className="text-xl font-bold mb-2 text-pink-400">
                Partnerships
              </h3>
              <p className="text-gray-300">
                Looking to collaborate? We are open to Web3 projects, influencers, and startups.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-pink-500/20">
              <h3 className="text-xl font-bold mb-3 text-pink-400">
                Socials
              </h3>

              <div className="flex flex-col gap-2 text-gray-300">
                <a href="#" className="hover:text-pink-400">Twitter / X</a>
                <a href="#" className="hover:text-pink-400">Discord</a>
                <a href="#" className="hover:text-pink-400">Telegram</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}