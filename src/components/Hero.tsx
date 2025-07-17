"use client";
import React from "react";
import MyButton from "./MyButton";
import heroImage from "../../public/image/Landing.webp";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero">
      <div className="container py-[40px] flex flex-col lg:flex-row justify-center lg:justify-between  items-center min-h-screen gap-10">
        <div className="text text-center lg:text-start  flex flex-col gap-5 w-full md:w-[500px] ">
          <h2 className="text-[30px] md:text-[40px] xl:text-[50px] font-bold">
            Start Smarter with ThinkPal
          </h2>
          <p>
            ThinkPal is your smart study & career guide powered by AI, Discover
            your strengths, track your learning journy, and plan your future
          </p>
          <div className="heroButtons flex justify-center flex-col gap-5 md:block">
            <MyButton
              styles=" max-sm:w-full"
              text="Get Started"
              onClick={() => console.log("Clicked")}
              textColor="black"
              bgColor="var(--main-color)"
            />
            <MyButton
              styles="md:ml-4 max-sm:w-full"
              text="Take Free Assessment"
              onClick={() => console.log("Clicked")}
              textColor="black"
              bgColor="white"
            />
          </div>
        </div>
        <Image
          src={heroImage}
          alt={"Hero Image"}
          priority
          className="size-full md:size-[500px] "
        />
      </div>
    </section>
  );
}

export default Hero;
