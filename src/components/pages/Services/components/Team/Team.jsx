import { motion } from 'framer-motion';
import css from './Team.module.scss';
import decorImage from '../../images/team/decor.png';
import boyImage from '../../images/team/boy.png';
import girlImage from '../../images/team/girl.png';
import bigCircleImage from '../../images/team/big-circle.png';
import smallCircleImage from '../../images/team/small-circle.png';
import lineImage from '../../images/team/line.png';
import sprite from '../../images/sprite.svg';
import Media from 'react-media';

const borderAnimation = {
  hidden: {
    x: '-30%',
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

const memberAnimation = {
  hidden: {
    width: '75%',
    left: '25%',
  },
  visible: {
    width: '50%',
    left: '50%',
    transition: { duration: 0.5 },
  },
};

const imageAnimation = {
  hidden: {
    scale: 1.3,
  },
  visible: {
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const lineAnimation = {
  hidden: {
    left: '700px',
    top: '330px',
  },
  visible: {
    left: '491px',
    top: '196px',
    transition: { duration: 0.5 },
  },
};

const mobileLineAnimation = {
  hidden: {
    left: '300px',
    top: '190px',
  },
  visible: {
    left: '143px',
    top: '90px',
    transition: { duration: 0.5 },
  },
};

const hoverEffectAnimation = {
  initial: {
    scaleX: 1,
  },
  hover: {
    scaleX: [1.1, 1.05],
    transition: { duration: 0.5 },
  },
};

const Team = () => {
  return (
    <section className={css.team}>
      <div className="container">
        <h2 className={css.team__title}>
          OUR <span>Team</span>
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.team__border}
        ></motion.div>
        <p className={css.team__text}>
        You don't need to know or understand any technical things
We have experienced automation programmers, we have automated tens of thousands of processes,
we will figure out quickly where others may not be able to.
        </p>
        <div className={css.team__block}>
          <div className={css.team__member}>
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              src={boyImage}
              alt="boy"
              className={css.member__photo}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={memberAnimation}
            >
              <p className={css.member__team}>Team</p>
              <h3 className={css.member__name}>Member name</h3>
              <img src={decorImage} alt="decor" className={css.member__decor} />
              <p className={css.member__position}>Position name</p>
            </motion.div>
          </div>
          <div className={css.team__member}>
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              src={girlImage}
              alt="girl"
              className={css.member__photo}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={memberAnimation}
            >
              <p className={css.member__team}>Team</p>
              <h3 className={css.member__name}>Member name</h3>
              <img src={decorImage} alt="decor" className={css.member__decor} />
              <p className={css.member__position}>Position name</p>
            </motion.div>
          </div>
        </div>
        <div className={css.team__buttons}>
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={hoverEffectAnimation}
            className={css.team__button__black}
            type="button"
          >
            <span className={css.black__span}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </span>
            <span className={css.white__span}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </span>
          </motion.button>
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={hoverEffectAnimation}
            className={css.team__button__white}
            type="button"
          >
            <span className={css.white__span}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </span>
            <span className={css.black__span}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </span>
          </motion.button>
        </div>
        <img
          src={bigCircleImage}
          alt="decor"
          className={css.team__circle__big}
        />
        <img
          src={smallCircleImage}
          alt="decor"
          className={css.team__circle__small}
        />
        <Media
          query="(min-width:768px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={lineAnimation}
              src={lineImage}
              alt="decor"
              className={css.team__line}
            />
          )}
        />
        <Media
          query="(max-width:767px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={mobileLineAnimation}
              src={lineImage}
              alt="decor"
              className={css.team__line}
            />
          )}
        />
      </div>
    </section>
  );
};

export default Team;
