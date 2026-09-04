import HoverMessage from "./HoverMessage";
import { Link } from "react-router-dom";

export default function TopCornerMenu({
    items,
    side
}:{
    items: { message: string, link: string }[],
    side: "top-left" | "top-right"
}) {
    return(
        <div className={`
            flex flex-col items-center justify-center 
            absolute ${side === "top-left" ? "left-6" : "right-6"} top-6
            text-sm uppercase tracking-[0.2em]
            opacity-60
            w-24
            transition-opacity duration-300`}
        >
            {items.map((item, index) => {
                return (
                    <Link
                        key={index}
                        to={item.link}
                        className="w-full"
                    >
                        <HoverMessage message={item.message} direction={side === "top-left" ? "left" : "right"}></HoverMessage>
                        <div className="border-b-2 w-full"/>
                    </Link>
                )}
            )}
            
        </div>
    )

}