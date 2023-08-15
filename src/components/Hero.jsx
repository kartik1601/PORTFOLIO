import {easeInOut, motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/*Entry about section*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500'/> */}
          {/* <div className='w-1 sm:h-80 h-40 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500'/> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}><span className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-400 to-slate-800 text-transparent bg-clip-text'>KARTIK</span></h1>
            <p className={`${styles.heroSubText} inline-block`}>  
            Hi <span className='animate-pulse'>👋</span>,
            <br/>
            I am a <span className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-800 via-yellow-400 to-red-800 text-transparent bg-clip-text'>WEB DEVELOPER.</span>
            </p>
        </div>
      </div>
      {/*3D canvas*/ }
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-slate-800 border-4 flex justify-center items-start p-2 backdrop-filter backdrop-blur-2xl'>
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-gradient-to-b from-slate-500 to-white mb-1'
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero