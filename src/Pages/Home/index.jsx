import Layout from "../../Components/Layout";

const Home = () => {
  const skills =
    "rounded-lg bg-black p-2 font-bold text-dark-orange shadow-lg shadow-light-shade-gray hover:shadow-none hover:bg-dark-orange hover:text-black transition duration-300 ease-in-out";

  return (
    <Layout>
      <section className="w-11/12">
        <div className="relative mb-12 flex items-center justify-center">
          <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
            About
          </h1>
        </div>
        <h2 className="pb-4">
          My name is
          <a
            className="juanchosFont pl-2 text-4xl font-semibold text-gray-600 transition duration-500 ease-in-out hover:text-dark-orange hover:underline"
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
          <h2 className="text-md pb-4 pt-2 text-left font-medium sm:text-xl">
            A Collection Project
          </h2>
          <div className="flex items-center justify-stretch gap-8">
            <p>
              This website is a collection of all the projects I&apos;ve built
              to get these
              <a
                className="px-1 font-medium  transition duration-500 ease-in-out hover:text-blue-200 hover:underline"
                href="/Certificate"
              >
                certifications
              </a>
              from FreeCodeCamp:
            </p>
            <div className="flex flex-col justify-center gap-8 text-center lg:flex-row">
              <a
                className="rounded-lg border-2 p-2 font-bold text-black transition duration-300 ease-in-out hover:bg-dark-orange hover:text-black"
                href="https://www.freecodecamp.org/certification/1diazdev/legacy-front-end"
              >
                Legacy Front End
              </a>
              <a
                className="rounded-lg border-2 p-2 font-bold text-black transition duration-300 ease-in-out hover:bg-dark-orange hover:text-black"
                href="https://www.freecodecamp.org/certification/1diazdev/front-end-development-libraries"
              >
                Front End Development Libraries
              </a>
              <a
                className="rounded-lg border-2 p-2 font-bold text-black transition duration-300 ease-in-out hover:bg-dark-orange hover:text-black"
                href="https://www.freecodecamp.org/certification/1diazdev/responsive-web-design"
              >
                Responsive Web Design
              </a>
            </div>
          </div>
          <h2 className="text-md pb-4 pt-2 text-left font-medium sm:text-xl">
            Description
          </h2>
          <p>
            While working on the requirement to get the certifications, I
            created multiple projects with it&apos;s own GitHub repositories.
            Then, I realized that it would be a great idea to merge them into
            one project to improve the user experience and consolidate a more
            robust portfolio.
          </p>
          <p>
            This is how this site was born. In an effort to showcase my skills
            and knowledge in web development after completing the FreeCodeCamp
            <span className="px-1 font-light italic">
              Legacy Front End
            </span> and{" "}
            <span className="px-1 font-light italic">
              Responsive Web Design
            </span>
            certifications.
          </p>
          <p>
            The goal of these certifications was to build a series of projects
            to improve my skills in...
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
