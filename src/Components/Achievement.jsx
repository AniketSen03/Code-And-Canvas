import React, { useEffect } from "react";

const achievements = [
  {
    title: "🥇 Hackathon Winner",
    description: "Winner of Technovision Hackathon 2025.",
    img: "https://cdn-icons-png.flaticon.com/512/2621/2621230.png",
  },
  {
    title: "🚀 100+ Projects Delivered",
    description: "Successfully completed 100+ client projects.",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
  },
  {
    title: "🌍 Global Clients",
    description: "Worked with clients from 15+ countries.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
  },
  {
    title: "📈 3+ Years Experience",
    description: "Experience in Web Development & Graphic Design.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const Achievements = () => {
  useEffect(() => {
    document.title = "Achievements | Code and Canva"; // Change title
  }, []) 
  return (
    <section className="achievements-section py-12  text-white text-center">
      <img src="./achievements.jpg" alt="" />
      <h2 className="text-5xl font-bold my-6 font-serif">🏅 Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="achievement-card bg-white text-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 hover:bg-red-400 hover:text-white"
          >
            <img
              src={achievement.img}
              alt={achievement.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">{achievement.title}</h3>
            <p className="text-gray-600 mt-2 font-serif text-center">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
