import ethan_headshot from "../assets/ethan_headshot.jpg"
import ethan_headshot_1 from "../assets/ethan_headshot_1.jpg"

function AboutHeader() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img className="w-40 h-40 object-cover rounded-xl shadow-sm transition-transform duration-300 hover:scale-110" src={ethan_headshot_1} />
        <div className="my-auto">
          <p className="text-base leading-relaxed"><b className="text-2xl font-semibold">
            Hi, Im Ethan.
            </b> After completing my Masters Degree at UMass Amherst, 
            Ive taken the leap to move out to Washington D.C. and chase my dream as a Machine Learning Engineer. 
            During my time at UMass I had the oppertunity to refine my Machine Learning skills through projects 
            in a variety of disciplines, including Computer Vision and Natural Language Processing. 
            As I continue the search for the next step in my career, 
            im continuing to build new skills within the feild. Feel free to follow along on this journey 
            and please reach out to collaborate!
          </p>
        </div>
        
      </div>
      
    </>
  );
}

export default AboutHeader;
