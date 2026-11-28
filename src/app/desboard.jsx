
import React from "react";

const stats = [
  { title: "Total Projects", value: "24", change: "+12%", icon: "📁" },
  { title: "Completed Tasks", value: "86", change: "+8.5%", icon: "✅" },
  { title: "In Progress", value: "12", change: "Active", icon: "⏳" },
  { title: "Team Members", value: "08", change: "+2 new", icon: "👥" },
];

const tasks = [
  { name: "Design Homepage", project: "Website Redesign", status: "Completed", color: "green" },
  { name: "Build Authentication", project: "Dashboard App", status: "In Progress", color: "purple" },
  { name: "API Integration", project: "Backend System", status: "Pending", color: "yellow" },
  { name: "Fix Responsive Layout", project: "Website Redesign", status: "In Progress", color: "purple" },
];

const navigation = [
  { icon: "◫", name: "Dashboard" },
  { icon: "▣", name: "My Projects" },
  { icon: "▤", name: "My Tasks" },
  { icon: "▦", name: "Calendar" },
  { icon: "♙", name: "Team Members" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f6f5fb] flex text-gray-800">

      {/* Sidebar */}
      <aside className="w-64 bg-[#17152b] text-white p-6 hidden md:flex flex-col">

        <h1 className="text-2xl font-bold mb-12">
          Task<span className="text-purple-400">Flow.</span>
        </h1>

        <p className="text-gray-500 text-xs uppercase mb-4">
          Workspace
        </p>

        <nav className="space-y-2">
          {navigation.map((item, index) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                index === 0
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-[#292640] hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="mt-auto bg-[#292640] p-4 rounded-xl">
          <p className="font-semibold text-sm">Upgrade your plan</p>
          <p className="text-gray-400 text-xs mt-2">
            Get more features and manage your projects easily.
          </p>
          <button className="bg-purple-600 w-full py-2 rounded-lg mt-4 text-sm hover:bg-purple-700">
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-8 min-w-0">

        {/* Navbar */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-500 text-sm mt-1">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white p-3 rounded-xl shadow-sm">
              🔔
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700">
                N
              </div>
              <div>
                <p className="font-semibold text-sm">Naveen Negi</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-2xl p-7 text-white mb-8">
          <h2 className="text-2xl font-bold">
            Good Evening, Naveen! 👋
          </h2>
          <p className="text-purple-100 mt-2">
            Stay productive and keep moving towards your goals.
          </p>

          <button className="mt-5 bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-purple-50">
            + Create New Project
          </button>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <span className="text-2xl">{stat.icon}</span>
              </div>

              <h3 className="text-3xl font-bold mt-4">
                {stat.value}
              </h3>

              <p className="text-green-600 text-sm mt-2">
                {stat.change}
              </p>
            </div>
          ))}
        </section>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Activity Chart */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-bold">Weekly Activity</h3>
                <p className="text-sm text-gray-500">
                  Your productivity this week
                </p>
              </div>

              <select className="border rounded-lg p-2 text-sm outline-none">
                <option>This Week</option>
                <option>Last Week</option>
                <opt
          {/* Project Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold">Project Progress</h3>
            <p className="text-gray-500 text-sm mt-1">
              Overall completion
            </p>

            <form onSubmit={handlePayment}>

              {paymentMethod === "card" && (
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Name on card"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                      />
                    </div>


            <div className="flex justify-center items-center py-9">
              <div className="w-36 h-36 rounded-full border-[14px] border-purple-500 border-r-purple-100 border-b-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">75%</h2>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span className="font-semibold">18 Projects</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>In Progress</span>
                <span className="font-semibold">6 Projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Tasks */}
        <section className="bg-white p-6 rounded-2xl shadow-sm mt-8 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold">Recent Tasks</h3>
              <p className="text-sm text-gray-500">
                Track your latest activities
              </p>
            </div>

            <button className="text-purple-600 font-semibold text-sm">
              View All →
            </button>
          </div>

          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="text-gray-400 text-sm border-b">
                <th className="py-4">Task Name</th>
                <th>Project</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.name} className="border-b last:border-0">
                  <td className="py-5 font-semibold">{task.name}</td>
                  <td className="text-gray-500 text-sm">{task.project}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.color === "green"
                        ? "bg-green-100 text-green-700"
                  
        </section>

      </main>
    </div>
    <button className="mt-5 bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold hover:bg-purple-50">
            + Create New Project
          </button>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <span className="text-2xl">{stat.icon}</span>
              </div>

              <h3 className="text-3xl font-bold mt-4">
                {stat.value}
              </h3>

              <p className="text-green-600 text-sm mt-2">
                {stat.change}
              </p>
            </div>
          ))}
        </section>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Activity Chart */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-bold">Weekly Activity</h3>
                <p className="text-sm text-gray-500">
                  Your productivity this week
                </p>
              </div>

              <select className="border rounded-lg p-2 text-sm outline-none">
                <option>This Week</option>
                <option>Last Week</option>
                <opt
          {/* Project Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold">Project Progress</h3>
            <p className="text-gray-500 text-sm mt-1">
              Overall completion
            </p>

            <form onSubmit={handlePayment}>

              {paymentMethod === "card" && (
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Name on card"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                      />
                    </div>
  );
}

export default App;
