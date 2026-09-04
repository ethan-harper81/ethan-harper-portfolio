import { useState } from "react";

export default function HoverMessage({ message, direction }: { message: string, direction?: "left" | "right" }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (

        <div
            className={`text-` + (direction === "left" ? "left" : "right") + ` w-full cursor-pointer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovering ? (direction === "left" ? "←" + message : message + "→")  : message}
        </div>

    );
}