const Skills = () => (
  <section id="Skills" className="pt-10 pb-4 lg:pt-22 flex flex-col gap-24">
    <div className="flex flex-col flex-1 px-8">
      <h6 className="text-center font-semibold text-xl sm:text-4xl md:text-5xl">
        My <span className="poppins text-violet-400">Skills </span>
      </h6>
    </div>
    <ol className="text-left pl-4 font-semibold">
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Auditing
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Internal Controls
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Corporate Tax
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Individual Tax
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Financial Reporting
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Management Reporting
      </li>
      <li class="py-2 flex flex-row">
        <i className="fa-solid fa-book text-green-500 mr-2 ml-8" />
        Corporate Finance
      </li>
    </ol>
  </section>
);

export default Skills;
