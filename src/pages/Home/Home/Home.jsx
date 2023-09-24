import React from "react";
import Header from "../../Shared/Header/Header/Header";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CourseCard from "../CourseCard/CourseCard";

const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <CourseCard></CourseCard>
    </div>
  );
};

export default Home;
