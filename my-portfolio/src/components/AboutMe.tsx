import "../styles/aboutMeStyles.css";
import image from "../resources/tempPhoto.jpg";

function AboutMe() {
  return (
    <>
      <div className="aboutMe">
        <div className="ProfileSection">
          <img src={image} className="ProfileImage"></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          adipisci atque assumenda voluptatibus quos minus possimus quidem
          soluta natus facere ex modi ea sequi, voluptatem impedit deserunt? Id,
          quisquam. Sed?
        </p>
      </div>
    </>
  );
}

export default AboutMe;
