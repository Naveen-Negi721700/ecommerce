
import React from "react";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "David Wilson",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=13",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#f8f7fc] text-gray-800">

      {/* Hero Section */}
      <section className="bg-[#17152b] text-white px-6 py-24 text-center">
        <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
          About TaskFlow
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-5">
          Making teamwork
          <span className="text-purple-400"> effortless.</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
          We help individuals and teams organize their work,
          manage projects, and achieve their goals with confidence.
        </p>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-xl font-semibold transition">
          Explore Our Platform
        </button>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <span className="text-purple-600 font-semibold">
            OUR STORY
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Work smarter, not harder.
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            TaskFlow was created with one simple idea:
            managing work should be simple, organized, and stress-free.
            We believe that great ideas need great organization.
          </p>

          <p className="text-gray-500 mt-4 leading-8">
            Our platform brings projects, tasks, and teams together
            in one place so you can focus on what really matters.
          </p>

          <button className="mt-7 bg-[#17152b] text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
            Learn More →
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
            alt="Team collaborating"
            className="rounded-3xl shadow-xl w-full h-80 object-cover"
          />

          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-purple-600">
              100%
            </h3>
            <p className="text-gray-500 text-sm">
              Focus on productivity
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            ["10K+", "Active Users"],
            ["500+", "Projects Created"],
            ["50+", "Countries"],
            ["99%", "Customer Satisfaction"],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-bold text-purple-600">
                {number}
              </h3>
              <p className="text-gray-500 mt-2">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <span className="text-purple-600 font-semibold">
            WHAT DRIVES US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-9 rounded-3xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-5">🎯</div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-500 mt-4 leading-7">
              To simplify project management and empower
              everyone to work together more efficiently.
            </p>
          </div>

          <div className="bg-[#17152b] text-white p-9 rounded-3xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-5">🚀</div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-gray-400 mt-4 leading-7">
              To create a world where teams can collaborate
              without limits and turn their biggest ideas into reality.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 px-6">

        <div className="text-center mb-14">
          <span className="text-purple-600 font-semibold">
            MEET OUR TEAM
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            The people behind TaskFlow
          </h2>

          <p className="text-gray-500 mt-4">
            A team passionate about building better ways to work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {team.map((person) => (
            <div
              key={person.name}
              className="bg-[#f8f7fc] rounded-2xl p-5 text-center hover:-translate-y-2 transition duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />

              <h3 className="text-xl font-bold mt-5">
                {person.name}
              </h3>

              <p className="text-purple-600 mt-2">
                {person.role}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-700 to-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to get more done?
          </h2>

          <p className="text-purple-100 mt-5 max-w-xl mx-auto">
            Start organizing your projects and make every day
            more productive with TaskFlow.
          </p>

          <button className="mt-8 bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-purple-50 transition">
            Get Started Now →
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17152b] text-gray-400 py-8 px-6 text-center">
        <h2 className="text-white text-2xl font-bold">
          Task<span className="text-purple-400">Flow.</span>
        </h2>

        <p className="mt-3 text-sm">
          Making teamwork effortless.
        </p>

        <p className="mt-6 text-xs">
          © 2026 TaskFlow. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default About;
