const Projects = () => {
  let projects = [
    {
      projectId: 1,
      projectName: "Accounting Services",
      techStack: [
        "Bookkeeping",
        "Internal Audit",
        "Bank Reconciliation",
        "Financial Reporting",
        "Management Reporting",
        "Payroll Management",
        "Product Costing",
      ],
    },
    {
      projectId: 2,
      projectName: "Taxation",
      techStack: [
        "Corporate Tax Filing",
        "Individual Tax Filing",
        "Tax Assessment",
        "Tax Planning",
        "Reduced Tax Certificate",
      ],
    },
    {
      projectId: 3,
      projectName: "Value Added Tax (VAT)",
      techStack: [
        "Monthly Return Filing",
        "Maintain VAT Books",
        "Handle VAT Cases",
        "BIN Registration",
      ],
    },
    {
      projectId: 4,
      projectName: "BPO",
      techStack: [
        "Invoicing",
        "Payment Processing",
        "Recording Transactions",
        "Regulatory Complience",
        "Commercial Works",
      ],
    },
    {
      projectId: 5,
      projectName: "RJSC Work",
      techStack: [
        "Company Registration",
        "Annual Return Filing",
        "Share Transfer",
        "Secreterial Works",
        "Liquidation of Company",
      ],
    },
    {
      projectId: 6,
      projectName: "Financing",
      techStack: [
        "Project Profile Preparation",
        "Opening Bank Account",
        "Financial Modeling",
        "Company Valuation",
        "Personal Valuation",
      ],
    },
  ];
  return (
    <section id="projects" className="py-20 lg:py-30 flex flex-col gap-24">
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My <span className="poppins text-violet-400">Services</span> includes
          but not limited to
        </h3>
        <div className="grid grid-cols-1 pt-4 px-8 mx-4 sm:grid-cols-6">
          {projects.map((project) => (
            <div
              className="flex-row grid grid-cols-1 lg:grid-cols-3 py-4 sm:py-8"
              key={project.projectId}
            >
              <div className="flex flex-col w-full col-span-3">
                <div className="flex size-small text-transform: uppercase text-l text-violet-400">
                  <h3>{project.projectName}</h3>
                </div>

                <div className="flex flex-col w-full pt-4 gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="flex gap-2 text-sm sm:text-base md:text-sm"
                      key={tech}
                    >
                      <i className="fa-solid fa-check text-green-500" />
                      <span>{tech}</span>
                    </span>
                  ))}
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
