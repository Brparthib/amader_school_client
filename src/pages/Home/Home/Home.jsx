import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header/Header";
import CourseCard from "../CourseCard/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      <Header></Header>
      <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
