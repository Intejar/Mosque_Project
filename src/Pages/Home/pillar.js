import React from "react";

const pillars = [
  {
    title: "Shahada",
    description:
      "The declaration of faith, which states 'There is no god but God, and Muhammad is the Messenger of God'.",
    image: "🌙",
  },
  {
    title: "Salah",
    description: "The practice of praying five times a day while facing Mecca.",
    image: "🧎",
  },
  {
    title: "Zakat",
    description:
      "The practice of giving a portion of one's savings to charity each year.",
    image: "💰",
  },
  {
    title: "Sawm",
    description: "The practice of fasting during the month of Ramadan.",
    image: "🙏",
  },
  {
    title: "Hajj",
    description: "The practice of making a pilgrimage to Mecca, Saudi Arabia.",
    image: "🕋",
  },
];

const FivePillars = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-5">
        Five Piller Of Islam
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-b ">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-b from-white to-orange-300 shadow-lg rounded-2xl p-6 w-64 text-center border border-gray-300 hover:shadow-2xl transition-all"
          >
            <div className="text-6xl mb-4">{pillar.image}</div>
            <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
            <p className="text-gray-600 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FivePillars;
