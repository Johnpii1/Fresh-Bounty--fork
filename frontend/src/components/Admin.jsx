import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">

      {/* SIDEBAR */}
      <aside
        className={`fixed md:relative z-20 w-64 h-full bg-black border-r border-pink-500/20 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-pink-500/20">
          <h2 className="text-xl font-bold text-pink-500">
            HappyBounty
          </h2>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {["Dashboard", "Users", "Orders", "Products", "Settings"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block p-2 rounded hover:bg-pink-500/10 hover:text-pink-400 transition"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOPBAR */}
        <header className="bg-black border-b border-pink-500/20 p-4 flex justify-between items-center">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate(-1)}
              className="px-3 py-1 text-sm border border-pink-500/30 rounded hover:bg-pink-500/10 transition"
            >
              ← Back
            </button>

            {/* MOBILE MENU */}
            <button
              className="md:hidden text-2xl text-pink-500"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <h1 className="text-lg font-semibold text-pink-400">
              Dashboard
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <input
              placeholder="Search..."
              className="hidden sm:block bg-black border border-pink-500/20 px-3 py-1 rounded text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
            />

            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full border border-pink-500"
              alt="user"
            />
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {[
              { title: "Users", value: "1,240" },
              { title: "Revenue", value: "$8,500" },
              { title: "Orders", value: "320" },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-black border border-pink-500/20 p-5 rounded-xl hover:border-pink-500 transition"
              >
                <h2 className="text-gray-400">{card.title}</h2>
                <p className="text-2xl font-bold text-pink-500">
                  {card.value}
                </p>
              </div>
            ))}

          </div>

          {/* TABLE */}
          <div className="flex flex-col flex-1 bg-black border border-pink-500/20 rounded-xl overflow-hidden">

            {/* TABLE HEADER */}
            <div className="p-5 border-b border-pink-500/20 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-pink-400">
                Recent Users
              </h2>

              <span className="text-xs text-gray-500">
                Live Data
              </span>
            </div>

            {/* TABLE BODY */}
            <div className="flex-1 overflow-y-auto">

              <table className="w-full text-left">

                <thead className="sticky top-0 bg-black border-b border-pink-500/20 text-gray-400">
                  <tr>
                    <th className="p-4">Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {[
                    { name: "John Doe", email: "john@example.com", status: "Active" },
                    { name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
                    { name: "Mike Johnson", email: "mike@example.com", status: "Active" },
                    { name: "Sarah Lee", email: "sarah@example.com", status: "Active" },
                    { name: "David Kim", email: "david@example.com", status: "Inactive" },
                    { name: "Emma Stone", email: "emma@example.com", status: "Active" },
                    { name: "Chris Paul", email: "chris@example.com", status: "Active" },
                    { name: "Anna Bell", email: "anna@example.com", status: "Inactive" },
                    { name: "James Bond", email: "james@example.com", status: "Active" },
                    { name: "Tony Stark", email: "tony@example.com", status: "Active" },
                  ].map((user, i) => (
                    <tr
                      key={i}
                      className="border-b border-pink-500/10 hover:bg-pink-500/5 transition"
                    >
                      <td className="p-4">{user.name}</td>
                      <td>{user.email}</td>
                      <td className="text-pink-400">{user.status}</td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}