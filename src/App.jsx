import Content from "./component/Content";
import ContentEducation from "./component/ContentEducation";
import Profile from "./component/Profile/";

function App() {
  return (
    <div className="container mx-auto px-5 font-poppins text-slate-400 ">
      <Profile />
      <Content title="ABOUT">
        A bachelor's degree in Informatics Engineering from Kuningan University.
        I am a junior fornt-end developer who is attending a full-stack
        developer bootcamp in Harisenin. A detail-oriented individual who is
        eager for a full-time opportunity in Full-Stack Web Development.
      </Content>
      <Content title="EDUCATION">
        <ContentEducation
          title={"Harisenin Bootcamp"}
          year={"2024"}
          subtitle={"Fullstack developer"}
          desc={
            "Final Project: Design and Develop Sportwear commerce within three months"
          }
        />
        <ContentEducation
          title={"Kuningan University"}
          year={"2015-2020"}
          subtitle={"Bachelor's Degree in Informatics Engineering - 3.47/4.00"}
          desc={
            "Thesis : The Virtual Reality-Based Shortest Path Searching Application For Existing Building Locations In Kuningan University Using Dijkstra Algorithm"
          }
        />
      </Content>
      <Content title="EXPERIENCE">
        <ContentEducation
          title={"Roomfazza"}
          year={"2018 - present"}
          subtitle={"Social Media Specialist"}
        >
          Jobdesk:
          <div>Make plans to advertise product sales</div>
          <div>
            Create content for social media and advertising needs Scheduling
          </div>
          <div>content uploads to social media</div>
        </ContentEducation>
      </Content>
      <Content title="PROJECTS">
        <div className="flex flex-col gap-3">
          <div className="text-secondary">Build a Sportwear commerce</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            minus assumenda sit, suscipit perferendis quasi consequatur
            repudiandae. Enim, rem quibusdam iste quia vitae, nemo adipisci
            facilis atque nobis esse doloribus!
          </div>
          <div className="flex gap-2">
            <div className="badge badge-primary text-secondary text-xs">
              React
            </div>
            <div className="badge badge-primary text-secondary text-xs">
              Redux
            </div>
            <div className="badge badge-primary text-secondary text-xs">
              Tailwind
            </div>
            <div className="badge badge-primary text-secondary text-xs">
              Express
            </div>
            <div className="badge badge-primary text-secondary text-xs">
              Sequelize
            </div>
          </div>
          <img
            src="/img/profile.jpg"
            alt="sportwear-commerce"
            className="w-full h-52 object-cover rounded"
          />
        </div>
      </Content>
    </div>
  );
}

export default App;
