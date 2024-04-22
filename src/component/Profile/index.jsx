import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import ButtonSocial from "./ButtonSocial";

const index = () => {
  const handleDownloadCV = () => {
    // Mengganti URL dengan URL tempat CV Anda tersedia
    const cvUrl = "/cv/dani_ramdani.pdf";

    // Membuat sebuah elemen anchor untuk menginisiasi pengunduhan CV
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "dani_ramdani.pdf"; // Nama file CV yang akan diunduh
    document.body.appendChild(link);

    // Klik link secara otomatis untuk menginisiasi pengunduhan CV
    link.click();

    // Hapus elemen anchor setelah selesai
    document.body.removeChild(link);
  };
  return (
    <div className="py-14 gap-7 flex flex-col">
      <div className="flex flex-col gap-3 ">
        <div className="font-bold text-4xl text-neutral-300">Dani Ramdani</div>
        <div className="text-neutral-300">Fullstack Developer</div>
        <p>
          I am a junior fullstack developer who has attended a full-stack
          developer bootcamp at Harisenin
        </p>
      </div>
      <div className="flex  justify-between">
        <div className="flex gap-3">
          <ButtonSocial href={"https://github.com/daniramdani10"}>
            <GithubLogo size={18} />
          </ButtonSocial>
          <ButtonSocial href={"https://www.linkedin.com/in/dani-ramdani10"}>
            <LinkedinLogo size={18} />
          </ButtonSocial>
          <ButtonSocial href={"https://www.instagram.com/daniramdani10"}>
            <InstagramLogo size={18} />
          </ButtonSocial>
          <ButtonSocial href={"https://wa.me/6281271400716"}>
            <WhatsappLogo size={18} />
          </ButtonSocial>
        </div>
        <button
          onClick={handleDownloadCV}
          className="btn btn-secondary btn-sm text-neutral-800"
        >
          See Resume
        </button>
      </div>
    </div>
  );
};

export default index;
