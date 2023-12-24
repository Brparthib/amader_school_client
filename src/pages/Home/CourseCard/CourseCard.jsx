import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CourseCard = ({ course }) => {
  const { id, course_name, details, picture, instructor_name, price } = course;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {/* <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-48 h-48 mx-auto">
          <img
            className=""
            src={picture}
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {course_name}
          </h4>
          <div className="flex justify-between">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-pink-500">
            Instructor: {instructor_name}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-pink-500">
            Price: ${price}
          </p>

          </div>
        </div>
      </div> */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-96 w-72 rounded-xl  mx-auto"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl"
        >
          <div
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center"
          > 
          <img src={picture} alt="" />
            <h3 className="text-2xl font-bold text-black mb-8">{course_name}</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseCard;
