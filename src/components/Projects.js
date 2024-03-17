const Projects = () => {
  let projects = [
    {
      projectId: 1,
      projectName: "Math Magicians",
      projectImg: "./MathMagicians.jpg",
      projectSummary:
        "Home page offers a gateway to a world of knowledge and creativity. On our Calculator page, you'll find user-friendly tools to simplify computations. The Famous Quotes page is a source of daily inspiration, featuring timeless wisdom from renowned thinkers.",
      projectLiveDemo: "https://nrsmathsandquotes.onrender.com/",
      projectLiveGigHub: "https://github.com/Nahid1911/math-magicians",
      techStack: ["JavaScript", "HTML", "CSS", "API"],
    },
    {
      projectId: 2,
      projectName: "Space Travellers' Hub",
      projectImg: "./SpaceTravelers.jpg",
      projectSummary:
        "In this Project, the real live data from the SpaceX API. task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      projectLiveDemo: "https://space-travelers-groupproject.onrender.com/",
      projectLiveGigHub:
        "https://github.com/Nahid1911/space-travelers-proj-react",
      techStack: ["JavaScript", "React", "Redux", "API"],
    },
    {
      projectId: 3,
      projectName: "Book Store",
      projectImg: "./BookStore.jpg",
      projectSummary:
        "In this Project, where the user have the power to manage thire personal library effortlessly. With our intuitive tools, User can easily add and remove books, track reading progress, and even edit book details, including names and authors.",
      projectLiveDemo: "https://nrsbookstore.onrender.com/",
      projectLiveGigHub: "https://github.com/Nahid1911/bookstore_using_react",
      techStack: ["JavaScript", "React", "Redux", "API"],
    },
  ];
  return (
    <section id="projects" className="py-20 lg:py-30 flex flex-col gap-24">
      <div className="flex flex-col gap-3 text-center">
        <h6 className="text-lg sm:text-xl md:text-2xl">
          A few of my creative endeavors.
        </h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Curious to <span className="poppins text-violet-400">see</span> my
          work?
        </h3>
        <div className="flex flex-col flex-1 px-8 py-16 mx-8">
          {projects.map((project) => (
            <div
              className="flex flex-row grid grid-cols-1 lg:grid-cols-3 py-4 sm:py-8"
              key={project.projectId}
            >
              <div
                className="relative shadow-2xl grid place-items-center sm:px-4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={project.projectImg}
                  alt="Project Cover"
                  className="object-cover z-[2] max-h-[35vh] my-5"
                />
              </div>
              <div
                className="flex flex-col w-full col-span-2 px-4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flex size-small text-transform: uppercase text-2xl text-violet-400">
                  <h3>{project.projectName}</h3>
                </div>
                <div className="flex py-2 text-justify">
                  <p>{project.projectSummary}</p>
                </div>
                <div className="flex py-1 gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="flex text-sm sm:text-base md:text-lg"
                      key={tech}
                    >
                      <i className="fa-solid fa-check text-green-500" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="flex py-5 text-left justify-around gap-2">
                  <a
                    href={project.projectLiveGigHub}
                    target="_blank"
                    rel="noreferrer"
                    className="blueShadow mx-auto w-[10rem] lg:mr-auto text-base text-center sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-violet-900"
                  >
                    <i className="fa-brands fa-github" /> Code
                  </a>
                  <a
                    href={project.projectLiveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="blueShadow bold mx-auto w-[10rem] lg:mr-auto text-base text-center sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-violet-900"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
