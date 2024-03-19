import React from "react";
import ListSocial from "./ListSocial";

import {
  BehanceLogo,
  Calendar,
  DownloadSimple,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import ProfileImage from "./ProfileImage";
import ListData from "./ListData";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-7 pb-7 px-7 md:px-40 items-center rounded-md h-auto dark:bg-[#24292F] dark:text-white">
      <div className="flex flex-col items-center gap-2">
        <ProfileImage />
        <ListSocial>Front-end Developer</ListSocial>
        <div className="flex gap-1">
          <ListSocial link={"https://www.instagram.com/daniramdani10/"}>
            <InstagramLogo size={20} color="#E12A57" />
          </ListSocial>
          <ListSocial link={"https://www.linkedin.com/in/dani-ramdani10/"}>
            <LinkedinLogo size={20} color="#144679" />
          </ListSocial>
          <ListSocial link={"https://github.com/daniramdani10/"}>
            <GithubLogo size={20} />
          </ListSocial>
          <ListSocial link={"behance"}>
            <BehanceLogo size={20} color="#1773EA" />
          </ListSocial>
        </div>
      </div>

      <div className="w-full flex flex-col items-center lg:items-end gap-2">
        <div className="bg-slate-50 w-full h-auto rounded-md flex flex-col gap-5 py-5 font-poppins text-xs dark:bg-[#333B43] dark:text-white">
          <ListData label="Phone" content="+62 812 7140 0716">
            <Phone size={20} color="#238636" />
          </ListData>
          <ListData label="Email" content="ddaniramdani10@gmail.com">
            <Envelope size={20} color="#E12A57" />
          </ListData>
          <ListData label="Location" content="Indonesia, South Jakarta">
            <MapPin size={20} color="#FD7590" />
          </ListData>
          <ListData label="Birthday" content="December 10, 1997">
            <Calendar size={20} color="#1773EA" />
          </ListData>
        </div>
        <button className="flex items-center gap-3 bg-[#238636] px-5 py-2 w-max text-white rounded-md mt-2 text-xs dark:bg-[#238636] dark:text-white">
          <DownloadSimple size={24} color="white" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Profile;
