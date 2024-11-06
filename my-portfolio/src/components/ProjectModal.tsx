import "../styles/projectModalScript.css";

interface ProjectModalProps {
  setOpenModal: (isOpen: boolean) => void; // Define the type for closeModal
}

function ProjectModal({ setOpenModal }: ProjectModalProps) {
  return (
    <>
      <div className="projectModal">
        <h1>123</h1>
        <div className="projectParts">
        <div className="littleCard card" id="technologies"></div>

          <div className="bigCard card" id="images"></div>

          <div className="littleCard card" id="languages"></div>
          <div className="bigCard card" id="projDesc"></div>

        </div>
        <button
          className="closeBtn"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}

export default ProjectModal;
