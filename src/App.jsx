import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="bg-slate-800">
          <div className="flex md:justify-between justify-center md:px-4 px-2 py-2 gap-3">
            <h1 className="md:text-5xl text-3xl text-blue-600">Mshindi</h1>
            <nav>
                <ul className="flex justify-evenly gap-4 text-white md:text-xl text-lg">
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Contacts</li>
                </ul>
            </nav>
          </div>

          <div className="md:flex md:justify-between md:flex-row flex-col items-center md:px-0 px-5 py-4">
            <div className="flex flex-col gap-4 md:h-max h-full py-2 md:w-1/2 w-full">
              <h1 className="text-3xl text-blue-600">Hi I'm Mshindi, Web developer</h1>
              <h2 className="text-lg text-white">I’m a web developer skilled in creating responsive and modern applications using React and Tailwind CSS. With a solid grasp of web development fundamentals, I specialize in crafting seamless user interfaces. I’m also experienced in database management, particularly with MongoDB, for efficient full-stack solutions.Get me from my Contact, +254746147811 Email, emmanuelmshindi68@gmail.com</h2>
              
            </div>

            <div className="md:w-1/2 w-full">
              <img src="header.png" alt="" />
            </div>
          </div>

          <div className="md:flex md:justify-between md:flex-row flex-col justify-center items-center px-5 py-2 gap-2">
            <div className="h-80 md:w-96 w-full mx-2 mb-2 flex flex-col justify-center items-center gap-4 text-white bg-slate-600 shadow-xl px-4 rounded-xl ">
              <h1 className="text-3xl text-blue-600">UI/UX Design</h1>
              <h2 className="text-white">I create awesome and more modern UI/UX designs, Which appeal to the Buisness in a fast and more skiled way.</h2>
            </div>
            <div className="h-80 md:w-96 w-full mx-2 mb-2 flex flex-col justify-center items-center gap-4 text-white bg-slate-600 shadow-xl px-4 rounded-xl">
              <h1 className="text-3xl text-blue-600">Front end Development</h1>
              <h2 className="text-white">My frontend skills speak for themselves, I buiid frontend webpages quickly, and simply to ensure the Purpose of the Website is Clear</h2>
            </div>
            <div className="h-80 md:w-96 w-full mx-2 flex flex-col justify-center items-center gap-4 text-white bg-slate-600 shadow-xl px-4 rounded-xl">
              <h1 className="text-3xl text-blue-600">Databases</h1>
              <h2 className="text-white">I also am very Vast in the Usage of databases to store data mostly MongoDB and Mongoose to Create schemas</h2>
            </div>
          </div>

          <div>
            <div className="md:flex md:justify-evenly md:flex-row flex-col justify-center items-center gap-4 my-4 py-2">
              <div className="flex flex-col items-center gap-3">
                <h1 className="md:text-7xl text-3xl text-blue-600">Mshindi</h1>
                <h2 className="text-xl text-white">Web Developer</h2>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="md:text-3xl text-xl text-blue-600">Skills</h1>
                <ul className="flex flex-col items-center gap-2 text-white text-xl">
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>UI/UX Design</li>
                  <li>Database Management</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="md:text-3xl text-xl text-blue-600">Contacts</h1>
                <ul className="flex flex-col items-center gap-2 text-white text-xl">
                  <li className="flex gap-2"><FaPhoneAlt /><h2>+254746157811</h2></li>
                  <li className="flex gap-2"><IoIosMail /><h2>emmanuelmshindi68@gmail.com</h2></li>
                </ul>
                <div>
                  <ul className="flex gap-4 text-white">
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaFacebook /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
