import { ReactTyped } from "react-typed"
import BackgroundImg from "../assets/background.png"
import TemplateImg from "../assets/template.png"

export const Hero = () => {
  return (
    <div className="h-full w-full bg-teal-500">
        <div className="flex items-center">
    
        {/* left div */}
        <img src={BackgroundImg} className="top-0 left-0 w-[1490px] h-full object-cover transform scale-150"/>
        <div className="absolute">
        <h1 className="z-20 pl-20 text-6xl flex pb-50 text-start hover:text-gray-600 hover:cursor-pointer font-medium">
            <ReactTyped strings={["Introducing SerenityAI"]} typeSpeed={40} backspeed={50} loop/></h1>
        <p className="z-20 text-white text-2xl pl-20 pt-10">Your Very Own Personalized Virtual Therapy Assistant</p>
        <div className="absolute z-20 pl-20 pt-10 w-fit">
        <div className='text-white absolute z-20 bg-blue-400 p-1 border rounded-md hover:cursor-pointer hover:bg-blue-600 hover:text-gray-500 w-[175px] h-[50px] flex justify-center items-center'><p className='font-medium  text-xl flex'>Learn More</p></div>
        </div>
        </div>
        {/* right div */}
        <img src={TemplateImg} className=" absolute right-0 w-4/5 transform scale-100"/>
        </div>
    </div>
  )
}

export default Hero;