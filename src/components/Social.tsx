import Link from "next/link";
import React from "react";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const data = [
  {
    icon: <CiTwitter />,
    path: "#",
  },
  {
    icon: <CiFacebook />,
    path: "#",
  },
  {
    icon: <FaInstagram />,
    path: "#",
  },
];

function Social() {
  return (
    <div className="centralize-content gap-2 md:gap-5 text-white text-2xl">
      {data.map((ele, index) => (
        <Link href={ele.path} key={index}>
          {ele.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
