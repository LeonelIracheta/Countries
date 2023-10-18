import { useApiData } from "../context/ApiContext";
import { useCustomData } from "../context/CustomContext";

function BoardTitle({ title }) {
  const { darkMode } = useCustomData();
  const txtColor = darkMode ? "text-white" : "text-black";

  return (
    <div className="w-full pt-4 text-center top-0">
      <h1 className={`${txtColor} text-3xl font-bold`}>{title}</h1>
    </div>
  )
}

export default BoardTitle;