import { useNav } from "../hooks/useNav";

const Skills = () => {
  const skillsRef = useNav('Skills');
  return (
    <>
      <div
        id="skills"
        className="w-screen h-screen text-center flex justify-center items-center bg-purple-700"
      >
        <p ref={skillsRef} className="text-white text-2xl">
          Skills Section
        </p>
      </div>
    </>
  );
};

export default Skills;
