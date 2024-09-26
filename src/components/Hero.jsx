import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/avatar";
import images from "../../src/assets/tech/face-swap.jpg";
import { FaReact, FaJs, FaNode, FaPython, FaHtml5, FaCss3, FaGit, FaDocker, FaJava, FaAngular, FaVuejs } from "react-icons/fa";

const icons = [
    { src: FaReact, alt: "React", color: "cyan", size: 64 },
    { src: FaJs, alt: "JavaScript", color: "yellow", size: 64 },
    { src: FaNode, alt: "Node.js", color: "green", size: 64 },
    { src: FaPython, alt: "Python", color: "blue", size: 64 },
    { src: FaHtml5, alt: "HTML5", color: "orange", size: 64 },
    { src: FaCss3, alt: "CSS3", color: "blue", size: 64 },
    { src: FaGit, alt: "Git", color: "red", size: 64 },
    { src: FaDocker, alt: "Docker", color: "blue", size: 64 },
    { src: FaJava, alt: "Java", color: "orange", size: 64 },
    { src: FaAngular, alt: "Angular", color: "red", size: 64 },
    { src: FaVuejs, alt: "Vue.js", color: "green", size: 64 }
];

const iconCoordinates = [
    { top: "90%", left: "30%" },
    { top: "90%", left: "70%" },
    { top: "80%", left: "10%" },
    { top: "40%", left: "80%" },
    { top: "50%", left: "20%" },
    { top: "60%", left: "60%" },
    { top: "70%", left: "40%" },
    { top: "80%", left: "50%" },
    { top: "59%", left: "30%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "10%" }
];

const bubbles = Array.from({ length: 10 }, (_, index) => index);

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className=" w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className="text-white text-5xl font-bold">Hi, I'm <span className="text-[#915EFF]">Shakhzod</span></h1>
                    <p className="mt-2 text-[#D1D5DB] text-2xl">I'm a full-stack web-developer</p>
                </div>
            </div>
            {icons.map((icon, index) => (
                <motion.div
                    key={index}
                    className="absolute neon-border flex justify-center items-center"
                    style={{ top: iconCoordinates[index].top, left: iconCoordinates[index].left, color: icon.color, fontSize: icon.size }}
                    animate={{ y: [0, -10, 0] }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", delay: index * 0.5 }}
                >
                    <icon.src />
                </motion.div>
                
           
                
        ))}
        {bubbles.map((_, index) => (
    <motion.div
      key={index}
      className="bubble"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
      animate={{
        y: [0, -800],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        delay: index * 1,
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}
        
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center lg:ml-[500px] lg:mb-[400px]">
            <a href="#about">
                <motion.div
                    animate={{ y: [0, 24, 0], scale: [1, 1, 1], borderRadius: ["20%", "20%", "50%", "50%", "20%"], boxShadow: ["0 0 20px rgba(139, 92, 246, 0.5)", "0 0 20px rgba(139, 92, 246, 1)", "0 0 20px rgba(139, 92, 246, 0.5)"] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                    className="relative p-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                >
                    <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-full" />
                    <Avatar isBordered src={images} size="lg" className="rounded-full w-52 h-52 sm:w-52 sm:h-52 lg:w-96 lg:h-96" />
                </motion.div>
            </a>
        </div>
    </section>
);};

export default Hero;
