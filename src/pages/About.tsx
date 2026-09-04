import AboutHeader from "../components/AboutHeader";
import NavBar from "../components/NavBar";
import HorizontalBar from "../components/HorizontalBar";
import TopCornerMenu from "../components/TopLeftMenu";

export default function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-orange-900 border-8 border-amber-50 text-amber-50 rounded-md">
        <TopCornerMenu items={[
            { message: "Home", link: "/" },
            
        ]}
        side="top-left"
        ></TopCornerMenu>
        <TopCornerMenu items={[
            { message: "Projects", link: "/projects" },
        ]}
        side="top-right"
        ></TopCornerMenu>

      <AboutHeader></AboutHeader>
    </div>
  )
}