import React from "react";
import {
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

function App() {
  return (
    <div className="bg-bg3 bg-cover min-h-screen">
      <div className="container mx-auto p-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Hanzala Shaikh ❤️</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Full Stack Web Developer 👨‍💻
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:ml-24 md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-3xl font-semibold mb-4">Projects ⚙️</h1>
            <ul className="ml-4">
              {[
                {
                  href: "https://100daysofcoding.com/",
                  text: "100days of coding",
                  github:
                    "https://github.com/Hanzalashaik/100DaysofCodingChallenge",
                },
                {
                  href: "https://chatapp.hanzala.site/",
                  text: "Chat App MERN",
                  github: "https://github.com/Hanzalashaik/Real-Time-Chat-App",
                },
                {
                  href: "https://project.hanzala.site/",
                  text: "Project Mngmt MERN App",
                  github:
                    "https://github.com/Hanzalashaik/project-management-mern",
                },
                {
                  href: "https://todo.hanzala.site/",
                  text: "To-do MERN App",
                  github: "https://github.com/Hanzalashaik/to-do-mern",
                },
                {
                  href: "https://tictactoe.hanzala.site/",
                  text: "Tic Tac Toe Game",
                  github: "https://github.com/Hanzalashaik/Tic-Tac-Toe",
                },
                {
                  href: "https://quizapp.hanzala.site/",
                  text: "Quiz App",
                  github: "https://github.com/Hanzalashaik/quiz-app",
                },
                {
                  href: "https://videohub-hanzalashaikh.vercel.app/",
                  text: "Video Hub",
                  github: "https://github.com/Hanzalashaik/videohub",
                },
                {
                  href: "https://reactoneproject-umber.vercel.app/",
                  text: "Zone Demo App",
                  github: "https://github.com/Hanzalashaik/react-project-1",
                },
              ].map((project, index) => (
                <li
                  key={index}
                  className="project-item flex items-center gap-3 p-2 text-xl font-semibold"
                >
                  <FaCheck className="text-green-600 mr-2" />
                  <a
                    className="hover:scale-110 hover:duration-300 hover:text-blue-800 hover:underline"
                    href={project.href}
                  >
                    {project.text}
                  </a>
                  <a
                    className="hover:scale-110 hover:duration-300 hover:text-gray-800"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 md:mt-16">
            <h1 className="text-3xl font-semibold mb-4">Connect with me 🌐</h1>
            <div className="flex flex-wrap justify-center md:justify-start my-10 items-center gap-6">
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800"
                href="https://www.linkedin.com/in/-hanzala-shaikh-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                className="hover:scale-110 hover:duration-300 hover:text-blue-800"
                href="https://twitter.com/ShaikHanzala2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={32} />
              </a>
              <a
                className="hover:scale-110 hover:duration-300 hover:text-pink-600"
                href="https://www.instagram.com/hanzala.jsx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} />
              </a>
              <a
                className="hover:scale-110 hover:duration-300 hover:text-gray-800"
                href="https://github.com/Hanzalashaik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} />
              </a>
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 hover:scale-110 hover:duration-300 flex items-center gap-2"
                href="https://raw.githubusercontent.com/Hanzalashaik/Projects/main/client/public/Hanzala_resume.pdf"
                download="Hanzala_resume.pdf"
              >
                <FaDownload size={24} />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
