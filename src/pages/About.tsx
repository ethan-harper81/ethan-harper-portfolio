import AboutHeader from "../components/AboutHeader";
import NavBar from "../components/NavBar";
import HorizontalBar from "../components/HorizontalBar";
import TopCornerMenu from "../components/TopLeftMenu";

export default function About() {
  return (
    <div className="relative
  min-h-screen
  bg-orange-900
  border-8 border-amber-50
  text-amber-50
  rounded-md
  px-6 py-16">
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