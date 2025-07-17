import React from "react";
import SectionTitles from "./SectionTitles";
import { PiGraduationCap } from "react-icons/pi";
import { BiBarChart } from "react-icons/bi";
import { PiRobot } from "react-icons/pi";
import FeaturesCard from "./FeaturesCard";

const featuresCards = [
  {
    icon: <PiGraduationCap />,
    title: "Personalized Learning Roadmaps",
    desc: "Tailored study plans based on your strengths and weaknesses.",
  },
  {
    icon: <BiBarChart />,
    title: "Smart Test Analysis",
    desc: "In-depth analysis of your IQ, EQ, and behavior.",
  },
  {
    icon: <PiRobot />,
    title: "Interactive AI Assistant",
    desc: "Get instant support and guidance from our AI assistant.",
  },
];

function Features() {
  return (
    <section className="bg-secondary">
      <div className="container py-14">
        <SectionTitles
          headTitle="Why ThinkPal?"
          secondaryTitle="Empowering students with personalized learning and career guidance."
        />
        {/* look into globals.css to understand what is content-with-3 */}
        <div className="content content-with-3 ">
          {featuresCards.map((card, index) => (
            <div
              key={index}
              className="card flex justify-start items-center flex-col bg-white shadow py-10 px-5 col-span-1 text-center gap-5 rounded-xl"
            >
              <FeaturesCard
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
