import { CheckCircle, Database, Laptop } from "@phosphor-icons/react";
import React from "react";
import DetailList from "./DetailList";
import ListSide from "./ListSide";
import HeaderAbout from "./HeaderAbout";
import TagTech from "./TagTech";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 p-7 font-poppins text-base md:px-40">
        <HeaderAbout label="About">
          I am a junior fornt-end developer who is attending a full-stack
          developer bootcamp in Harisenin. I turn designs into interactive web
          pages.
        </HeaderAbout>
        <div className="flex flex-col gap-1">
          <div className="text-base font-semibold">What i do</div>
          <div className="flex justify-center gap-5 flex-wrap">
            <ListSide logo={<Laptop size={36} />} label="Front-end">
              <DetailList>
                Building responsive SPA & PWA in React.js and Vue.js
              </DetailList>
              <DetailList>
                Building Responsive Static Websites Using Next.js
              </DetailList>
              <div className="flex gap-3 items-start">
                <div className="text-xs">Tech Stack:</div>
                <div className="flex gap-1 flex-wrap ">
                  <TagTech>Html</TagTech>
                  <TagTech>JavaScript</TagTech>
                  <TagTech>Css</TagTech>
                  <TagTech>React Js</TagTech>
                  <TagTech>Vue Js</TagTech>
                  <TagTech>TypeScript</TagTech>
                  <TagTech>Next Js</TagTech>
                  <TagTech>Redux Js</TagTech>
                </div>
              </div>
            </ListSide>

            <ListSide logo={<Database size={36} />} label="Back-end">
              <DetailList>Manage database system</DetailList>
              <DetailList>
                Building Rest API using Express and Prisma
              </DetailList>
              <div className="flex gap-3 items-start">
                <div className="text-xs">Tech Stack:</div>
                <div className="flex gap-1 flex-wrap">
                  <TagTech>Database</TagTech>
                  <TagTech>Express</TagTech>
                  <TagTech>Sequelize</TagTech>
                  <TagTech>Prisma</TagTech>
                </div>
              </div>
            </ListSide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
