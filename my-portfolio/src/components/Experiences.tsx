import "../styles/experiencesStyles.css";
import gradAward from "../resources/experiencePhotos/graduationAward.jpg";
import hackNJIT from "../resources/experiencePhotos/hackNJIT.jpg";
import hackRU from "../resources/experiencePhotos/hackRU.jpg";
import tennisAward from "../resources/experiencePhotos/tennisAward.jpg";
import thinkFast from "../resources/experiencePhotos/thinkFast.jpg";
import vintageCompFestival from "../resources/experiencePhotos/vintageCompFestival.jpg";
import tennisTeam from "../resources/experiencePhotos/tennisTeam.png";

function Experiences() {
  return (
    <>
      <div className="experienceSection">
        <h1>Experience</h1>
        <main className="row">
          <section className="col">
            <div className="experienceList">
              <div className="experience">
                <div className="box">
                  <div>
                    <h4>2022-2024</h4>
                    <h3>Brookdale Community College</h3>
                    <p>
                      At Brookdale, I laid the groundwork for my coding journey.
                      I immersed myself in hands-on projects, late-night
                      debugging sessions, and enough coffee to power a small
                      server farm. It was the place where my passion for
                      computer science was born, and every challenge only made
                      me more determined to dive deeper into the world of
                      technology.
                    </p>
                  </div>
                </div>
                <div className="experiencePhotos">
                  <img src={gradAward}></img>
                  <img src={thinkFast}></img>
                  <img src={tennisTeam}></img>
                  <img src={tennisAward}></img>
                </div>
              </div>

              <div className="experience">
                <div className="box">
                  <div>
                    <h4>2022-2024</h4>
                    <h3>Brookdale Community College</h3>
                    <p>
                      At Brookdale, I laid the groundwork for my coding journey.
                      I immersed myself in hands-on projects, late-night
                      debugging sessions, and enough coffee to power a small
                      server farm. It was the place where my passion for
                      computer science was born, and every challenge only made
                      me more determined to dive deeper into the world of
                      technology.
                    </p>
                  </div>
                </div>
                <div className="experiencePhotos">
                  <img src={hackNJIT}></img>

                  <img src={hackRU}></img>
                  <img src={vintageCompFestival}></img>
                </div>
              </div>
              <div className="experience">
                <div className="box">
                  <div>
                    <h4>2022-2024</h4>
                    <h3>Brookdale Community College</h3>
                    <p>
                      At Brookdale, I laid the groundwork for my coding journey.
                      I immersed myself in hands-on projects, late-night
                      debugging sessions, and enough coffee to power a small
                      server farm. It was the place where my passion for
                      computer science was born, and every challenge only made
                      me more determined to dive deeper into the world of
                      technology.
                    </p>
                  </div>
                </div>
                <div className="experiencePhotos">
                  <img src={""}></img>
                  <img src={""}></img>
                  <img src={""}></img>
                  <img src={""}></img>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="col">
            <div className="experiencePhotos">
              <div className="box">
                <h3>Brookdale Community College</h3>

                <img src={gradAward}></img>
                <img src={thinkFast}></img>
                <img src={tennisTeam}></img>
                <img src={tennisAward}></img>
              </div>

              <div className="box">
                <h3>Computer Science Club President</h3>
                <img src={vintageCompFestival}></img>
                <img src={hackNJIT}></img>
                <img src={hackRU}></img>
              </div>
              <div className="box">
                <h3>Stevens Institute of Technology</h3>
              </div>
            </div>
          </section> */}
        </main>
      </div>
    </>
  );
}

export default Experiences;
