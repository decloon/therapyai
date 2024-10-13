import { ReactTyped } from "react-typed"
import AboutImg from "../assets/About.png"

export const Aboutus = () => {
  return (
    <div className="w-full pt-50" id="aboutus">
        {/* top div */}
        <div className="flex justify-center items-center pb-28 w-full h-[320px] absolute z-20">
            <div className="">
            <h1 className="font-extrabold text-[36px] text-center text-black hover:text-gray-600"><ReactTyped strings={["About SerenityAI"]} typeSpeed={40} backSpeed={50} loop></ReactTyped></h1>
            <p className="font-medium text-[18px] text-wrap pt-10 px-40 text-white">Introducing SerenityAI—your real-time virtual assistant powered by advanced webcam technology. It understands your voice and facial expressions, providing tailored support for tasks and conversations. 
                Experience the future of AI where innovation meets tranquility!
            </p>
            </div>
        </div>
        {/* bottom div */}
        <div>
            <img src={AboutImg}/>
        </div>
    </div>
  )
}

export default Aboutus