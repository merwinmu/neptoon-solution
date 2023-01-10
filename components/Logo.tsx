import React from "react";
import Image from 'next/image';

function Logo() {
  return (
    <Image
    priority
    src="/Logo.png"
    height={200}
    width={100}
    alt="neptoon.ch"
  />  );
}

export default Logo;