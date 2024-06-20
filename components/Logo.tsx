import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text"
    >
      PageForm
    </Link>
  );
}

export default Logo;
