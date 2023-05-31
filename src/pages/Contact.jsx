import { useNav } from "../hooks/useNav";

const Contact = () => {
  const contactRef = useNav('Contact');
  return (
    <>
      <div
        id="contact"
        className="w-screen h-screen text-center flex justify-center items-center bg-slate-600"
      >
        <p ref={contactRef} className="text-white text-2xl">
          Contact Section
        </p>
      </div>
    </>
  );
};

export default Contact;
