function Card({ flag, name, population, capital, region, map }) {
  return (
    <div className="bg-gray-700 shadow-md rounded-xl hover:bg-gray-800 ring-4 flex-grow items-center p-4 m-4 sm:w-1/4 md:w-1/4 lg:w-1/5">
      <div className="flex flex-col items-center justify-center pb-2">
        <img src={flag} alt="Flag" />
      </div>
      <hr/>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white font-bold text-lg">{name}</p>
        <p className="text-white font-semibold text-md">Population: {population.toLocaleString()}</p>
        <p className="text-white font-semibold text-md">Capital: {capital}</p>
        <p className="text-white font-semibold text-md">Region: {region}</p>
        <a href={map} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-1 mt-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-gray-300 border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
          Map
        </a>
      </div>
    </div>
  )
}

export default Card;