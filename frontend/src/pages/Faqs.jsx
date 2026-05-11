import { Link } from "react-router-dom";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I earn on Happy Bounty?",
      answer:
        "Users earn rewards by completing campaigns, referrals, social tasks, and community activities.",
    },
    {
      question: "How long do withdrawals take?",
      answer:
        "Withdrawals are usually processed within 24–72 hours after verification.",
    },
    {
      question: "Can I create multiple accounts?",
      answer:
        "No. Multiple accounts may lead to account suspension.",
    },
    {
      question: "Why was my submission rejected?",
      answer:
        "Your submission may be rejected if task instructions were not followed correctly.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 py-10">

        {/* TOP SECTION */}
        <div className="relative flex flex-col items-center justify-center text-center mb-14">

          {/* BACK BUTTON (UPDATED WITH LINK) */}
          <Link
            to="/"
            className="absolute left-0 top-0 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-pink-500/30 hover:bg-pink-500/10 transition backdrop-blur-md"
          >
            <span className="text-xl text-pink-400">←</span>

            <span className="hidden sm:block text-sm font-medium text-white">
              Back
            </span>
          </Link>

         
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent max-w-5xl">
            Frequently Asked Questions
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed px-2">
            Find answers about rewards, withdrawals, campaigns,
            referrals, and everything related to Happy Bounty.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full max-w-2xl bg-white/5 border border-pink-500/30 rounded-2xl px-5 py-4 outline-none focus:border-pink-400 transition backdrop-blur-md"
          />
        </div>

        {/* FAQ CARDS */}
        <div className="space-y-5 max-w-4xl mx-auto w-full">

          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-pink-500/50 transition duration-300"
            >

              <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-semibold">

                <span>{faq.question}</span>

                <span className="text-pink-400 text-2xl">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-300 leading-relaxed text-center">
                {faq.answer}
              </p>

            </details>
          ))}
        </div>

        {/* SUPPORT SECTION */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/5 border border-pink-500/20 rounded-3xl p-8 text-center backdrop-blur-lg">

          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
            Still have questions?
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
            Our support team is ready to help you anytime.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 font-semibold transition duration-300">
            Contact Support
          </button>

        </div>

      </div>
    </div>
  );
}