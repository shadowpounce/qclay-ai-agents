import { motion } from 'framer-motion';
import Header from '../Header/Header';
import css from './Hero.module.scss';
import backVideo from '../../video/hero-back-video.mp4';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.3 },
  }),
};

const Hero = () => {
  return (
    <motion.section
      data-kf="1"
      initial="hidden"
      whileInView="visible"
      className={css.hero}
    >
      <div
        style={{
          position: `relative`,
          zIndex: 10,
          translate: `0 -100%`,
        }}
      >
        <Header staticHeader={true} onlyMenu={true} />
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `<video playsinline webkit-playsinline autoplay muted loop class="hero__video">
        <source src=${backVideo} type="video/mp4" />
        </video>`,
        }}
      />
      <div className="container">
        <motion.p className={css.hero__text}>
          <motion.span variants={textAnimation} custom={1}>
            We create personal AI agents,
          </motion.span>
          <motion.span variants={textAnimation} custom={2}>
            help you automate your routine, optimize a lot of your time,
          </motion.span>
          <motion.span variants={textAnimation} custom={3}>
            teach you how to use, modernize and support your agent.
          </motion.span>
          {/* <motion.span variants={textAnimation} custom={4}>
            Based on: Operator OpenAI, Claude AI, UI Tars, Deepseek and others.
          </motion.span> */}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
