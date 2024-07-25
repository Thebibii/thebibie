import { Fragment } from "react";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Experience from "../components/pages/Experience";
import Project from "../components/pages/Project";
import Skill from "../components/pages/Skill";
import Footer from "../components/pages/Footer";

const env = process.env.SERVER_URL;
async function getData() {
  const res = await fetch(env, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function App() {
  const data = await getData();
  return (
    <Fragment>
      <Home data={data.home} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Project data={data.project} />
      <div className="bg-[#233831] w-screen lg:px-28 md:px-16 p-6 xl:px-52">
        <Skill />
        <Footer />
      </div>
    </Fragment>
  );
}
