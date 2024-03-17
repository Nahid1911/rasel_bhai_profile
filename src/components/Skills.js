const Skills = () => {
  const skills = [
    {
      skillGrouup: "Front-End",
      teckStack: [
        "JavaScript",
        "React",
        "Redux",
        "TailWindCSS",
        "BootStrap",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Single Page Website",
      ],
    },
    {
      skillGrouup: "Back-End",
      teckStack: [
        "Ruby",
        "Ruby on Rails",
        "PostgreSQL",
      ],
    },
    {
      skillGrouup: "Tools & Methods",
      teckStack: [
        "Git",
        "GitHub",
        "Render",
        "Rspec",
        "Jest",
        "TDD",
        "Chrome Dev Tools",
        "Webpack",
        "NPM",
        "CSS3",
      ],
    },
    {
      skillGrouup: "Professional",
      teckStack: [
        "Remote Work",
        "Pair-Programming",
        "Team Work",
        "Team Leading",
        "Problem Solving",
        "Conflict Management",
      ],
    },
  ]
  return (
    <section
      id="Skills"
      className="py-20 lg:py-32 flex flex-col gap-24"
    >
      <div className="flex flex-col flex-1 px-8 mx-8">
        <h6 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My Set of <span className="poppins text-violet-400"> Skils </span>
        </h6>
      </div>
      <div className="font-newsread flex flex-col gap-4  sm:grid grid-cols-4">
        {skills.map((skill) => (

        <div className="mx-0 px-0">
          <span className="poppins text-violet-400 text-2xl font-semibold">
            {skill.skillGrouup}
          </span>
          {skill.teckStack.map((skl) => ( 
            <div>{skl}</div>
          ))}
        </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
