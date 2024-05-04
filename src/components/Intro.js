const Intro = () => {
  return (
    <div className="flex flex-col flex-1 p-4 pb-10 ml-4">
      <section
        id="intro"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 sm:py-8"
      >
        <div className="flex flex-col lg:justify-center text-left lg-text-left gap-6 md:gap-8 lg:gap-10">
          <h2 className="font-semibold text-4xl sm:text-4xl md:text-4xl">
            Hi! I'm <span className="poppins text-violet-400">Rasel</span>{" "}
            Rahman, ACA <br />
          </h2>
          <h2 className="text-justify italic sm:text-2xl md:text-2xl md:mt-0">
            A Qualified Chartered Accountant with the Institute of Chartered
            Accountants of Bangladesh (ICAB).{" "}
          </h2>

          <p className="text-justify font-newsreader font-semibold">

            I obtained my CA qualification in
            2023 from The Institute of Chartered Accountants of Bangladesh
            (ICAB) during my tenure at Masih Muhith Haque & Co. (RSM in
            Bangladesh). With over thirteen years of diverse professional
            experience across various sectors including RMG and service
            industries, I brings a wealth of expertise to my role. At Masih
            Muhith Haque & Co., I am specializes in taxation services for both
            corporate entities and individuals. I also oversees a range of
            outsourcing assignments, providing support services in Accounting,
            VAT, and Secretarial functions. My skills span across multiple
            areas including Accounts, Due diligence, Taxation, Financial
            management, Business Process Outsourcing (BPO), Financing, Banking, and Financial policy
            development.
          </p>
          {/* <a
            href="https://drive.google.com/file/d/12VQbmxNaYHsYArwW9PQR-lHMRzPZlXAm/view?usp=sharing"
            target="_blank"
            className="blueShadow mx-auto mt-6 lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-violet-900 font-semibold hover:bg-violet-300"
            data-aos="fade-right"
            rel="noreferrer"
          >
            <div
              className="absolute top-0 right-full width-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
              data-aos="fade-right"
            />
            <h4 className="relative z-9">Download My Resume</h4>
          </a> */}
          {/* social media div */}
        </div>
        <div className="relative shadow-2xl grid place-items-center">
          <img
            src={"./pic_rasel_rahman.jpg"}
            alt="Profile Pic"
            className="rounded-full object-cover z-[2] max-h-[60vh]"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />
          <div className="flex flex-row grid-cols-5 gap-4">
            {/* <a
              href="https://www.linkedin.com/in/nahidraihan/"
              target="_blank"
              className="blueShadow mx-auto w-full lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-slate-950 hover:bg-violet-300"
              data-aos="fade-right"
              rel="noreferrer"
            >
              <i
                class="fa-brands fa-linkedin-in fa-bounce"
                style={{ color: "#300782" }}
              ></i>
            </a> */}
            {/* <a
              href="https://www.facebook.com/nahid.sardar"
              target="_blank"
              className="blueShadow mx-auto w-full lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-slate-950"
              data-aos="fade-right"
              rel="noreferrer"
            >
              <i
                class="fa-brands fa-facebook-f fa-beat"
                style={{ color: "#300782" }}
              ></i>
            </a> */}
            {/* <a
              href="https://github.com/Nahid1911"
              target="_blank"
              className="blueShadow mx-auto w-full lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-slate-950"
              data-aos="fade-right"
              rel="noreferrer"
            >
              <i
                class="fa-brands fa-github fa-bounce"
                style={{ color: "#300782" }}
              ></i>
            </a> */}
            {/* <a
              href="https://medium.com/@nahid.raihan"
              target="_blank"
              className="blueShadow mx-auto w-full lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-slate-950"
              data-aos="fade-right"
              rel="noreferrer"
            >
              <i
                class="fa-brands fa-medium fa-flip"
                style={{ color: "#300782" }}
              ></i>
            </a> */}
            {/* <a
              href="https://www.youtube.com/@nahidraihan"
              target="_blank"
              className="blueShadow mx-auto w-full lg:mr-auto text-base sm:text-lg md:text-xl
      poppins relative overflow-hidden px-2 py-3 group rounded-full bg-white text-slate-950"
              data-aos="fade-right"
              rel="noreferrer"
            >
              <i
                class="fa-brands fa-youtube fa-beat"
                style={{ color: "#300782" }}
              ></i>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
