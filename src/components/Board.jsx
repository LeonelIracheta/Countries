import BoardTitle from "./BoardTitle";
import CardContainer from "./CardContainer";
import { useCustomData } from "../context/CustomContext";

function Board() {
  const { showAbout, darkMode } = useCustomData();
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";
  const txtColor = darkMode ? "text-white" : "text-black";
  return (
    
    <div className={`${bgColor} min-h-screen flex-1 flex-col items-center overflow-y-auto`}>
    {!showAbout ? (
      <>
        <BoardTitle title="List of countries"/>
        <CardContainer />
      </>
    ) : (
      <>
        <BoardTitle title="About"/>
        <div className="m-10">
          <p className={`${txtColor} text-xl m-5 text-center`}>This project is solely intended to serve as a practice and learning platform, where I put my development skills to the test and continually improve them. Throughout the development process, I have employed modern technologies like React.js and Tailwind CSS to create an engaging and efficient user experience.</p>
          <p className={`${txtColor} text-xl m-5 text-center`}>A crucial aspect of this project is the real-time data integration, for which I have utilized APIs provided by restcountries.com. These APIs have allowed me to access a wide range of information about countries, including names, capitals, regions, and more.</p>
          <p className={`${txtColor} text-xl m-5 text-center`}>The primary goal in creating this project is to enhance my skills as a developer, learn new technologies, and provide users with an informative and enjoyable experience while exploring data about different countries. I hope this project proves to be both useful and engaging for those who visit.</p>
        </div>
        <BoardTitle title="Contact"/>
        <div className="flex-grow flex items-center justify-center m-5">
          <p className={`${txtColor} text-xl text-center`}>Leonel Iracheta<br/>...</p>
        </div>
      </>
    )}
    </div>

  )
}

export default Board;