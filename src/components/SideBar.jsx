import { useState } from "react";
import { useApiData } from "../context/ApiContext";
import { useCustomData } from "../context/CustomContext";

function SideBar() {
  // States
  const { changeCountry, changeSort } = useApiData();
  const { showSideBar, changeSideBar, changeAbout, darkMode, changeDarkMode } = useCustomData();
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  // Manage the events
  const toggleSideBar = () => {
    changeSideBar();
  };
  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      changeCountry(inputValue);
      changeAbout(false);
    }
  };
  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };
  const toggleSortAlphaAsc = () => {
    changeSort("AlphaAsc");
    changeAbout(false);
  };
  const toggleSortAlphaDesc = () => {
    changeSort("AlphaDesc");
    changeAbout(false);
  };
  const toggleSortPopMax = () => {
    changeSort("PopMax");
    changeAbout(false);
  };
  const toggleSortPopMin = () => {
    changeSort("PopMin");
    changeAbout(false);
  };
  const toggleDarkMode = () => {
    changeDarkMode();
  };
  const toggleAbout = () => {
    changeAbout(true)
  };
  
  return (
    <>
      {!showSideBar ? (
        <aside>
          <button className="bg-gray-800 text-white w-8 p-1 min-h-screen" onClick={toggleSideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          </button>
        </aside>
      ) : (
        <aside className="bg-gray-800 text-white sm:w-48 md:w-64 lg:w-64 min-h-screen p-4">
        <div className="mb-5">
          <a className="text-white text-2xl font-semibold" href="">Countries</a>
        </div>
        <hr/>
        <nav>
          <ul className="space-y-2 pt-5 font-bold">
            <li className="relative bg-gray-800 hover:bg-gray-600 rounded-md p-2">
              <button className="flex inset-0 w-full h-full text-left" onClick={toggleSearchMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
                Search
              </button>
              {isSearchMenuOpen && (
                <ul>
                  <li className="mt-3 ml-5">
                    <input
                      className="text-black rounded-lg w-48 text-center"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Country"
                    />
                  </li>
                </ul>
              )}
            </li>
        
            <li className="relative bg-gray-800 hover:bg-gray-600 rounded-md p-2">
              <button className="flex inset-0 w-full h-full text-left" onClick={toggleSortMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                Sort
              </button>
              {isSortMenuOpen && (
                <ul>
                  <li className="mt-3 ml-5 hover:bg-gray-500 rounded-md">
                    <button className="flex inset-0 w-full h-full text-left" onClick={toggleSortAlphaAsc}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                      </svg>
                      Alphabetical Asc
                    </button>
                  </li>
                  <li className="mt-3 ml-5 hover:bg-gray-500 rounded-md">
                    <button className="flex inset-0 w-full h-full text-left" onClick={toggleSortAlphaDesc}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                      </svg>
                      Alphabetical Desc
                    </button>
                  </li>
                  <li className="mt-3 ml-5 hover:bg-gray-500 rounded-md">
                    <button className="flex inset-0 w-full h-full text-left" onClick={toggleSortPopMax}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                      </svg>
                      Population max
                    </button>
                  </li>
                  <li className="mt-3 ml-5 hover:bg-gray-500 rounded-md">
                    <button className="flex inset-0 w-full h-full text-left" onClick={toggleSortPopMin}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                      </svg>
                      Population min
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative bg-gray-800 hover:bg-gray-600 rounded-md p-2">
              {!darkMode ? (
                <button className="flex inset-0 w-full h-full text-left" onClick={toggleDarkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                  Dark mode
                </button>
              ) : (
                <button className="flex inset-0 w-full h-full text-left" onClick={toggleDarkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  Light mode
                </button>
              )}
            </li>

            <li className="relative bg-gray-800 hover:bg-gray-600 rounded-md p-2">
              <button className="flex inset-0 w-full h-full text-left" onClick={toggleAbout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                About
              </button>
            </li>

          </ul>
        </nav>

        <div className="flex flex-col justify-end mt-5">
          <hr/>
          <button className="bg-gray-800 hover:bg-gray-600 flex inset-0 w-full rounded-md text-left font-bold p-2 mt-2" onClick={toggleSideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Close Menu
          </button>
        </div>


      </aside>
      )}
      
    </>
  )
}

export default SideBar;