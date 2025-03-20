import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const AuthImage = (props: Props) => {
  return (
    <div className="flex w-screen min-h-100vh justify-between gap-8 bg-white">
      <div className="w-full flex justify-center items-center">
        {props.children}
      </div>
      <Image
        alt=""
        src="https://res.cloudinary.com/dagcnqvlx/image/upload/v1739881194/Frame_1321316047_kxiq7x.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "100vh", padding: "40px" }}
      />
    </div>
  );
};

export default AuthImage;
