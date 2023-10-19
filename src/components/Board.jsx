import BoardTitle from "./BoardTitle";
import CardContainer from "./CardContainer";
import About from "./About";
import Contact from "./Contact";
import { useCustomData } from "../context/CustomContext";

function Board() {
  const { showAbout, darkMode } = useCustomData();
  const bgColor = darkMode ? "bg-gray-900" : "bg-white";

  return (
    
    <div className={`${bgColor} min-h-screen flex-1 flex-col items-center overflow-y-auto`}>
      {!showAbout ? (
        <>
          <BoardTitle title="List of countries"/>
          <CardContainer />
        </>
      ) : (
        <>
          <About />
          <Contact />
        </>
      )}
    </div>

  )
}

export default Board;