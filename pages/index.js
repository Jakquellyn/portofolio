// next image
import Image from "next/image";

//componest
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//fromer-motion
import { motion } from "framer-motion";

//varianst
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Shine your life with <br /> Magic{" "}
            <span className="text-accent">Calestial</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Calestial is word that describes the beauty and majesty of the
            universe. this word reminds us of the greatness end power that
            exists in outer space. Calestial Performing Magic Al
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0">
        </div>
        {/* particles */}
       <ParticlesContainer /> 
      </div>
    </div>
  );
};

export default Home;
