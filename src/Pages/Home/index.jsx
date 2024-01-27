// import { useContext } from "react";
import Layout from "../../Components/Layout";
import certificate1 from "../../assets/images/legacyFrontEnd.png";
import certificate2 from "../../assets/images/responsiveWebDesign.png";

const Home = () => {
  const skills =
    "rounded-lg bg-black p-2 font-bold text-dark-orange shadow-lg shadow-light-shade-gray hover:shadow-none hover:bg-dark-orange hover:text-black transition duration-300 ease-in-out";

  return (
    <Layout>
      <section className="w-11/12">
        <div className="relative mb-4 flex items-center justify-center">
          <h1 className="text-md font-medium sm:text-xl">About Me</h1>
        </div>
        <h2 className="text-md font-semibold text-gray-500">
          My name is
          <a
            className="pl-2 text-2xl text-black transition duration-500 ease-in-out hover:text-dark-orange hover:underline"
            href="https://www.linkedin.com/in/1diazdev/"
          >
            Juan Diaz
          </a>
          ,
        </h2>
        <p>
          I am a passionate junior front-end developer seeking professional
          growth opportunities.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-md text-center font-medium sm:text-xl">
            A Collection Project
          </h2>
          <p>
            This website is a collection of all the projects I&apos;ve built to
            get this
            <a
              className="px-1 text-blue-500  transition duration-500 ease-in-out hover:text-blue-200 hover:underline"
              href="/Certificate"
            >
              two certifications
            </a>
            from FreeCodeCamp:
          </p>
          <div className="flex flex-col justify-center gap-4 py-4 text-center lg:flex-row">
            <a
              className="rounded-lg border-2 p-2 font-bold text-black transition duration-300 ease-in-out hover:bg-dark-orange hover:text-black"
              href="https://www.freecodecamp.org/certification/1diazdev/legacy-front-end"
            >
              Legacy Front End
            </a>
            <a
              className="rounded-lg border-2 p-2 font-bold text-black transition duration-300 ease-in-out hover:bg-dark-orange hover:text-black"
              href="https://www.freecodecamp.org/certification/1diazdev/responsive-web-design"
            >
              Responsive Web Design
            </a>
          </div>
          <p className="w-fit rounded-lg border px-2 py-1">
            This website is
            <span className="px-1 text-dark-orange underline underline-offset-4">
              not
            </span>
            part of the official FreeCodeCamp site.
          </p>
          <h2 className="text-md font-medium sm:text-xl">Description</h2>
          <p>
            While working on the requirement to get the certifications, I
            created multiple projects with it&apos;s own GitHub repositories.
            Then, I realiced that it will be a great idea to merge them into one
            project to improve the user experience and consolidate a more robust
            portfolio.
          </p>
          <p>
            This is how this site was born. As an effort to showcase my skills
            and knowledge in web development after completing the FreeCodeCamp
            &quot;Legacy Front End&quot; and &quot;Responsive Web Design&quot;
            certifications.
          </p>
          <p>
            The goal of this certifications was to build a series of projects to
            improve my skills in...
          </p>
          <ul className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <li className={` ${skills}`}>JavaScript</li>
            <li className={` ${skills}`}>React</li>
            <li className={` ${skills}`}>Tailwind CSS</li>
            <li className={` ${skills}`}>Git</li>
            <li className={` ${skills}`}>HTML</li>
            <li className={` ${skills}`}>CSS</li>
            <li className={` ${skills}`}>Markdown</li>
            <li className={` ${skills}`}>GitHub</li>
            <li className={` ${skills}`}>jQuery</li>
            <li className={` ${skills}`}>Sass</li>
            <li className={` ${skills}`}>Node.js</li>
            <li className={` ${skills}`}>Bootstrap</li>
          </ul>
          <p>
            Feel free to explore the site and check out the projects. I hope you
            enjoy it!
          </p>
          <p>
            You can also check out the original projects in the footer of this
            site or in my GitHub profile.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
