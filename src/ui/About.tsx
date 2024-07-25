import { useLoaderData } from "react-router-dom";

export function About() {
  const about = useLoaderData();
  return <h1>About</h1>;
}

export default About;
