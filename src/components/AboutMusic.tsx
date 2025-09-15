import velcrow_1 from "../assets/music_images/velcrow_1.jpg"
import velcrow_2 from "../assets/music_images/velcrow_2.jpg"
import etc_1 from "../assets/music_images/etc_1.jpg"
import etc_2 from "../assets/music_images/etc_2.jpg"

function AboutMusic(){
  return(
    <>
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="w-1/2 p-8 grid grid-cols-2 gap-4">
        <img src={velcrow_1} alt="" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110" />
        <img src={etc_1} alt="" className="w-full h-auto  rounded-lg transition-transform duration-300 hover:scale-110" />
        <img src={etc_2} alt="" className="w-full h-auto  rounded-lg transition-transform duration-300 hover:scale-110" />
        <img src={velcrow_2} alt="" className="w-full h-auto  rounded-lg transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="w-1/2 flex my-auto">
        <p className="text-lg leading-relaxed">
          <b className="text-2xl font-semibold">Music.</b> Blah Blah Blah, I like to play music with my friends. 
          Come Play Music With me. Blah Blah Blah, I like to play music with my friends. 
          Come Play Music With me. Blah Blah Blah, I like to play music with my friends. 
          Come Play Music With me. Blah Blah Blah, I like to play music with my friends. 
          Come Play Music With me. Blah Blah Blah, I like to play music with my friends. 
          Come Play Music With me.
        </p>
      </div>
    </div>
    </>
  );
}

export default AboutMusic

