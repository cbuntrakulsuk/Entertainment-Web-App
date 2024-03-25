import React from "react";
import Image from "next/image";

// Assuming the image file is in the `public/assets` directory
import Logo from "../public/assets/logo.svg";
import Home from "../public/assets/icon-nav-home.svg";
import Movies from "../public/assets/icon-nav-movies.svg";
import TV from "../public/assets/icon-nav-tv-series.svg";
import Bookmarks from "../public/assets/icon-nav-bookmark.svg";
import Avatar from "../public/assets/image-avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="h-screen m-8 w-24 bg-semiDarkBlue text-center rounded-2xl">
        <div className="pt-8 pb-20 flex justify-center items-center">
          <Image
            src={Logo} // Path to your image
            alt="Logo" // Descriptive alternative text
          />
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Image
            src={Home} // Path to your image
            alt="Navigation icon for Home" // Descriptive alternative text
          />
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Image
            src={Movies} // Path to your image
            alt="Navigation icon for Movies" // Descriptive alternative text
          />
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Image
            src={TV} // Path to your image
            alt="Navigation icon for TV Series" // Descriptive alternative text
          />
        </div>
        <div className="pb-10 flex justify-center items-center">
          <Image
            src={Bookmarks} // Path to your image
            alt="Navigation icon for Bookmarks" // Descriptive alternative text
          />
        </div>

        <div className="pb-10 flex justify-center items-center">
          <Image
            src={Avatar} // Path to your image
            width={40}
            height={40}
            alt="Navigation icon for Avatar" // Descriptive alternative text
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
