"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import NavBar from "./NavBar";
import MyButton from "./MyButton";

function MobileNavBar({ styles }: { styles: string }) {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className={`${styles}`}>
      <button className="text-4xl" onClick={() => setShowNav((i) => !i)}>
        <IoIosMenu />
      </button>
      <AnimatePresence>
        {showNav && (
          <div className="fixed top-0 right-0 w-screen h-screen bg-black/55">
            <motion.nav
              key="box"
              transition={{ duration: 0.3 }}
              initial={{ x: "300px" }}
              animate={{ x: "0" }}
              exit={{ x: "300px" }}
              className="absolute top-0 right-0 w-[300px] h-screen shadow bg-white px-6 pt-20 pb-10 text-center flex flex-col justify-between"
            >
                {/* close nav */}
              <button
                className=" absolute top-5 left-5 text-2xl"
                onClick={() => setShowNav((i) => !i)}
              >
                <IoClose />
              </button>

            <NavBar styles="flex flex-col gap-6 text-2xl h-full " />

                        <MyButton styles='' text="Start Your Journey" onClick={()=>console.log("Clicked")} textColor="black" bgColor="var(--main-color)" />
            
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavBar;
