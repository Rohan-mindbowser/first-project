import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center min-h-[100px]">
      <div>© 2023 Endurence space, Inc.</div>
      <div className="flex gap-4">
        <Image src="/1.png" width={25} height={25} alt="logo" />
        <Image src="/2.png" width={25} height={25} alt="logo" />
        <Image src="/3.png" width={25} height={25} alt="logo" />
        <Image src="/4.png" width={25} height={25} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
