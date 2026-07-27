import React from "react";

const About = () => {
  const stats = [
    {
      icon: "ri-box-3-line",
      value: "20K+",
      title: "Products",
    },
    {
      icon: "ri-group-line",
      value: "50K+",
      title: "Happy Customers",
    },
    {
      icon: "ri-star-line",
      value: "4.9",
      title: "Avg. Rating",
    },
    {
      icon: "ri-truck-line",
      value: "99%",
      title: "On-time Delivery",
    },
  ];

  const values = [
    {
      icon: "ri-shield-check-line",
      title: "Trust",
      desc: "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: "ri-truck-line",
      title: "Speed",
      desc: "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: "ri-heart-3-line",
      title: "Community",
      desc: "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: "ri-star-line",
      title: "Quality",
      desc: "We curate the best products with zero compromise.",
    },
  ];

  const team = [
    {
      name: "Aryan Shah",
      role: "Founder & CEO",
      color: "bg-lime-400",
    },
    {
      name: "Priya Mehta",
      role: "Head of Product",
      color: "bg-blue-500",
    },
    {
      name: "Rohan Verma",
      role: "Lead Engineer",
      color: "bg-purple-500",
    },
    {
      name: "Sneha Kapoor",
      role: "Design Director",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className=" text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-20 space-y-24">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="w-20 h-20 rounded-3xl bg-lime-400 flex items-center justify-center">
            <i className="ri-flashlight-fill text-4xl text-black"></i>
          </div>

          <h1 className="text-6xl font-bold text-black">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div className="border border-gray-700 rounded-3xl p-8 hover:border-lime-400 transition">
              <div className="w-14 h-14 rounded-xl bg-lime-400/10 flex items-center justify-center">
                <i className={`${item.icon} text-lime-400 text-2xl`}></i>
              </div>

              <h2 className="text-4xl font-bold text-black mt-6">
                {item.value}
              </h2>

              <p className="text-gray-400 mt-2">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="border border-gray-700 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>

          <div className="space-y-6 text-gray-600 leading-8">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div className="border border-gray-700 rounded-3xl p-8 flex gap-6 hover:border-lime-400 transition">
              <div className="w-16 h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center">
                <i className={`${value.icon} text-2xl text-lime-400`}></i>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>

                <p className="text-gray-400 mt-2 leading-7">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {team.map((member) => (
            <div className="border border-gray-700 rounded-3xl p-8 text-center hover:border-lime-400 transition">
              <div
                className={`w-16 h-16 ${member.color} rounded-2xl mx-auto flex items-center justify-center`}
              >
                <span className="text-2xl font-bold">{member.name[0]}</span>
              </div>

              <h3 className="text-xl font-semibold mt-6">{member.name}</h3>

              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;