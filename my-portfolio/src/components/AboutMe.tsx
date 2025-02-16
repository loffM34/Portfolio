import "../styles/aboutMeStyles.css";
import image from "../resources/profilePic.jpg";

function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <div className="ProfileSection">
          <img src={image} className="ProfileImage"></img>
        </div>
        <p>
          I'm a third-year Computer Science student at Stevens Institute of
          Technology with an Associate of Science in Computer Science from
          Brookdale Community College. Passionate about Artificial Intelligence,
          Software Development, and Robotics, I'm eager to apply my skills to
          innovative and develop impactful projects in the workforce
        </p>
      </div>
    </>
  );
}

export default AboutMe;
