import SideBar from "./components/SideBar"
import Board from "./components/Board"
import { ApiDataProvider } from "./context/ApiContext"
import { CustomDataProvider } from "./context/CustomContext"

function App() {

  return (
    <div className="flex">
      <ApiDataProvider>
        <CustomDataProvider>
          <SideBar />
          <Board />
        </CustomDataProvider>
      </ApiDataProvider>
    </div>
  )
}

export default App
