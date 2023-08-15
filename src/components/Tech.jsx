import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {motion} from "framer-motion";
import {textVariant} from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Current Skillset</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-400 via-green-600 to-sky-900 inline-block text-transparent bg-clip-text `}>Techstack.</h2>
      </motion.div>
      <div className="py-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology)=>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")