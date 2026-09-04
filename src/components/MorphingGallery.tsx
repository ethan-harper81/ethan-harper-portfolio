import { Link } from "react-router-dom"
import ethan_headshot_1 from "../assets/ethan_headshot_1.jpg"

export default function MorphingGallery() {
  return (
    <div className="h-full grid place-items-center bg-orange-900">
        
        <div className="group relative h-72 w-[min(900px,90vw)]">
            {/* Dimmed/base gallery */}
            <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-0">
                <div className="h-full w-full flex items-center justify-center text-white font-bold text-xl">
                    About
                </div>
                <img
                    src={ethan_headshot_1}
                    className="h-full w-full object-cover"
                />
                <div className="h-full w-full flex items-center justify-center text-white font-bold text-xl">
                    Projects
                </div>
            </div>

            {/* Reveal mask */}
            <div className="absolute inset-0 flex justify-center">
                
                <div
                    className="
                    relative
                    h-full w-72

                    overflow-hidden
                    rounded-full

                    border-[6px] border-amber-50
                    outline-[6px] outline-orange-900
                    shadow-[0_0_0_12px_#fffbeb]
                    
                    transition-[width]
                    duration-700
                    ease-[cubic-bezier(.16,1,.3,1)]
                    bg-amber-50

                    group-hover:w-full
                    
                    
                    "
                >
                    {/* Fixed-width gallery inside mask */}
                    <div
                        className="
                            absolute
                            left-1/2 top-0
                            h-full
                            w-[min(900px,90vw)]
                            -translate-x-1/2
                            grid grid-cols-3 gap-2
                        "
                    >
                        <Link 
                            to="/about" 
                            className="
                                h-full w-full 
                                flex items-center justify-center 
                                cursor-pointer
                                bg-amber-50 text-orange-900 
                                font-bold text-xl
                                hover:text-[#9f5f44]
                            "
                        >
                            About
                        </Link>
                        <img
                            src={ethan_headshot_1}
                            className="h-full w-full object-cover"
                        />
                        <Link 
                            to="/projects" 
                            className="
                                h-full w-full 
                                flex items-center justify-center 
                                cursor-pointer
                                bg-amber-50 text-orange-900 
                                font-bold text-xl
                                hover:text-[#9f5f44]
                            "
                        >
                            Projects
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}