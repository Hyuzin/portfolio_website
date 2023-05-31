import { useNav } from "../hooks/useNav";

const Projects = () => {
  const projectsRef = useNav('Projects');
  return (
    <>
      <div
        id="projects"
        className="w-screen h-screen text-center flex justify-center items-center"
      >
        <p ref={projectsRef} className="text-white text-2xl">
          Project Section
        </p>
      </div>
    </>
  );
};

export default Projects;
