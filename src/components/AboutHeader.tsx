import ethan_lake_louise from "../assets/ethan_lake_louise.jpeg"
import ethan_banff_ski from "../assets/ethan_banff_ski.jpg"
import ethan_headshot_1 from "../assets/ethan_headshot_1.jpg"
import ethan_bartend from "../assets/ethan_bartend.jpg"
import etc_2 from "../assets/music_images/etc_2.jpg"
import Carousel from "./Carousel";

function AboutHeader() {
  return (
    <>
      <div className=" max-w-5xl mx-auto p-6 flex flex-col items-center md:items-start gap-6">
        {/* <div className="">*/}
          <div className="flex items-center justify-center w-full">
            {/* <Link to="/" className="flex justify-center min-w-[8rem]">
              <div
                className="
                w-full max-w-[8rem]
                hover:bg-amber-50 hover:text-orange-900 
                transition-colors duration-300 ease-in-out 
                rounded-md px-2 py-1
                cursor-pointer text-center text-amber-50 text-xl font-semibold">
                Home <br></br> &#8592;   
              </div>
            </Link> */}

            
            {/* <img className="w-40 h-40 object-cover rounded-xl shadow-sm " src={ethan_headshot_1} /> */}
            <Carousel images={[ethan_headshot_1, ethan_lake_louise, ethan_bartend, etc_2,  ethan_banff_ski]} interval={5000} />
            
            
            {/* <Link to="/projects" className="flex justify-center min-w-[8rem]">
              <div
                className="
                w-full max-w-[8rem]
                hover:bg-amber-50 hover:text-orange-900 
                transition-colors duration-300 ease-in-out 
                rounded-md px-2 py-1
                cursor-pointer text-center text-amber-50 text-xl font-semibold">
                Projects <br></br> &#8594;
              </div>
            </Link> */}

          </div>
          
        {/* </div> */}
        
        <div className="flex items-center justify-center w-full my-auto text-amber-50">
          <div className="text-base leading-relaxed">
            <b className="text-2xl font-semibold">
            Hi, I'm Ethan Harper.
            </b> 
            <p className="text-left">
              I'm a Full Stack Software Engineer who enjoys working on problems where software has to interact with complex data, physical systems, and the people ultimately using them.

              <br></br><br></br>
              My background spans full-stack development, computer vision, data infrastructure, and machine learning.
              In my current role at <a href="https://lumoscan.com/lumoscanner-for-clinicians/" target="_blank" rel="noopener noreferrer" className="text-[#dfc7b4] underline">Lumo Imaging</a> I
              work across the entire stack from software coordinating networked imaging hardware and Linux-based data ingestion written in C++, 
              to backend services and React front end applications used to work with medical imaging data. I have also developed and continue to refine a custom Lesion Detection Model, improving dermatology workflows by reducing the time to identify and track lesions across the body.
              <br></br><br></br>
              I earned my B.S. in Mathematics witha  concentration in Computing and my M.S. in Computer Science, focusing on Machine Learning from the University of Massachusetts, Amherst.
              My mathematics background allows me to approach problems with a strong analytical foundation and a deep understanding of the underlying principles, while my graduate study gave me the opportunity to dive deeper into the world of software engineering, machine learning and their applications.
              Since then, working on production systems has not only reinforced my interest in computer vision, but has also given me the opportunity to explore the broader field of software engineering, from building complex data processing and storage pipelines to frontend development and the creativity that comes with it.
              <br></br><br></br>
              Outside engineering, you may find me behind a bar mixing drinks, jamming with my friends, at the park skateboarding, or on the mountain skiing. 
              <br></br><br></br>
              This site gives a closer look at some of the things I've worked on, the technical decisions behind them, and some of the things I learned along the way. Some of my professional work cannot be shared directly, so I've focused on describing the problems, my contributions, and the engineering ideas involved. 
              If you'd like to see more, please reach out and I would be happy to share more about my work and experiences.

            </p>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default AboutHeader;
