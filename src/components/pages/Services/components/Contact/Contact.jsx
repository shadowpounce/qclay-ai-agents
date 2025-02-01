import { motion } from 'framer-motion';
import css from './Contact.module.scss';
import sprite from '../../images/sprite.svg';
import cardImage from '../../images/contact/card.png';
import Media from 'react-media';
import { useState } from 'react';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '8090435868:AAEr7FxQm0g5jxYR0KNXtEGSup4hrDKYz5o';
const TELEGRAM_CHAT_ID = '-4661685507';

function sendMessage(text) {
  return axios.post(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?parse_mode=HTML&chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(
      text
    )}`
  );
}

const borderAnimation = {
  hidden: {
    x: '-50%',
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    top: '400px',
    rotate: '45deg',
    translate: '-50%',
  },
  visible: {
    opacity: 1,
    top: '192px',
    rotate: '0',
    translate: '-50%',
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const mobileCardAnimation = {
  hidden: {
    opacity: 0,
    top: '400px',
    rotate: '45deg',
    translate: '-50%',
  },
  visible: {
    opacity: 1,
    top: '85px',
    rotate: '0',
    translate: '-50%',
    transition: { duration: 0.5, delay: 0.3 },
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

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    desc: '',
  });

  return (
    <section data-kf="0.6" id="contact-us" className={css.contact}>
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          className={css.contact__title}
        >
          Cont<span>act</span> <span>Us</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.contact__border}
        ></motion.div>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            sendMessage(
              '<b>QClay Ai Agents</b>\n\n' +
                `<b>Name</b>: ${data.name}\n` +
                `<b>Email</b>: ${data.email}\n` +
                `<b>Project description</b>: ${data.desc}\n`
            );
          }}
          className={css.contact__form}
        >
          <div className={css.form__top}>
            <div>
              <label className={css.form__label}>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                  placeholder="Alexandro Ramirez"
                  className={css.form__name}
                />
              </label>
            </div>
            <div>
              <label className={css.form__label}>
                <span>Your email</span>
                <input
                  value={data.email}
                  onChange={e => setData({ ...data, email: e.target.value })}
                  type="email"
                  name="email"
                  placeholder="alexandro@gmail.com"
                  className={css.form__email}
                />
              </label>
            </div>
          </div>

          <label className={css.form__label}>
            <span>Project Description</span>
            <input
              value={data.description}
              onChange={e => setData({ ...data, desc: e.target.value })}
              type="text"
              name="project"
              placeholder="Describe what you would like to automate."
              className={css.form__project}
            />
          </label>
          <div className={css.form__buttons}>
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              className={css.form__send}
            >
              <span className={css.black__span}>Send Message</span>
              <span className={css.white__span}>Send Message</span>
            </motion.button>
            <button className={css.form__icon}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
        </form>
        <Media
          query="(min-width:768px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={cardAnimation}
              src={cardImage}
              alt="card"
              className={css.contact__card}
            />
          )}
        />
        <Media
          query="(max-width:767px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={mobileCardAnimation}
              src={cardImage}
              alt="card"
              className={css.contact__card}
            />
          )}
        />
      </div>
    </section>
  );
};

export default Contact;
