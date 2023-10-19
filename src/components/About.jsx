import BoardTitle from "./BoardTitle";
import { useCustomData } from "../context/CustomContext";

function About(){
  const { darkMode } = useCustomData();
  const txtColor = darkMode ? "text-white" : "text-black";

  return(
    <>
      <BoardTitle title="About"/>
      <div className="m-10">
        <p className={`${txtColor} text-xl m-5 text-center`}>This project is solely intended to serve as a practice and learning platform, where I put my development skills to the test and continually improve them. Throughout the development process, I have employed modern technologies like React.js and Tailwind CSS to create an engaging and efficient user experience.</p>
        <p className={`${txtColor} text-xl m-5 text-center`}>A crucial aspect of this project is the real-time data integration, for which I have utilized APIs provided by restcountries.com. These APIs have allowed me to access a wide range of information about countries, including names, capitals, regions, and more.</p>
        <p className={`${txtColor} text-xl m-5 text-center`}>The primary goal in creating this project is to enhance my skills as a developer, learn new technologies, and provide users with an informative and enjoyable experience while exploring data about different countries. I hope this project proves to be both useful and engaging for those who visit.</p>
        
        <div className="flex flex-col justify-center items-center m-5">
          <a href="https://github.com/LeonelIracheta/Countries/tree/source" className={`${txtColor} text-xl text-center flex inset-0 hover:text-blue-600`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
            Github repository
          </a>
        </div>
      </div>
    </>
  )
}

export default About;