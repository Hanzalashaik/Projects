import React from "react"
import { FaCheck } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="bg-stone-300 w-screen sm:h-full h-screen ">
        <div className="p-5">
          <h1 className="text-4xl font-bold">Hanzala Shaikh❤️</h1>
          <h2 className="mb-4 text-2xl font-semibold mt-3">Full Stack Web Developer👨‍💻</h2>
          <div>
            <h1 className="text-3xl font-semibold ">Projects⚙️</h1>
            <ul className=" ml-4 mt-4 ">
              <div>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://project.hanzala.site/">Project Mngmt MERN App</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://todo.hanzala.site/">To-do MERN App</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://react.hanzala.site/">React Essential App</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://tictactoe.hanzala.site/">Tic Tac Toe Game</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://investment.hanzala.site/">Investment App</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://countdown.hanzala.site/">CoutDown Game</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://quizapp.hanzala.site/">Quiz App</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://videohub-hanzalashaikh.vercel.app/">Video Hub</a></li>
                <li className="hover:underline text-2xl m-2 text-blue-700 font-medium  hover:text-red-600 hover:scale-105 hover:duration-500 hover:ease-out hover:ml-3 flex items-center"><FaCheck className="text-green-600 mr-2" /><a href="https://reactoneproject-umber.vercel.app/">Zone Demo App</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
