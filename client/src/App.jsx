import React from "react";
import { FaCheck } from "react-icons/fa";

function App() {
  return (
    <div className="bg-bg3 bg-cover min-h-screen">
      <div className="container mx-auto p-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Hanzala Shaikh ❤️</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Full Stack Web Developer 👨‍💻
          </h2>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-4">Projects ⚙️</h1>
          <ul className=" ml-4">
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://100daysofcoding.com/"
              >
                100daysofcoding
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://project.hanzala.site/"
              >
                Project Mngmt MERN App
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://todo.hanzala.site/"
              >
                To-do MERN App
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://react.hanzala.site/"
              >
                React Essential App
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://tictactoe.hanzala.site/"
              >
                Tic Tac Toe Game
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://investment.hanzala.site/"
              >
                Investment App
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://countdown.hanzala.site/"
              >
                CoutDown Game
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://quizapp.hanzala.site/"
              >
                Quiz App
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://videohub-hanzalashaikh.vercel.app/"
              >
                Video Hub
              </a>
            </li>
            <li className="project-item flex  items-center gap-3 p-2 text-xl font-semibold">
              <FaCheck className="text-green-600 mr-2" />
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                href="https://reactoneproject-umber.vercel.app/"
              >
                Zone Demo App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
