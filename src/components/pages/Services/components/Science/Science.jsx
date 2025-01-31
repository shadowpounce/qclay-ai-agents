import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './Science.module.scss';
import sprite from '../../images/sprite.svg';
import titleIcon from '../../images/science/title-icon.png';
import circlesImage from '../../images/science/circle-image.png';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 },
  }),
};

const imageAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 1 },
  },
};

const borderAnimation = {
  hidden: {
    x: '-60%',
  },
  visible: {
    x: 0,
    transition: { duration: 1.5 },
  },
};

const linksAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.1 },
  }),
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

const Science = () => {
  return (
    <section className={css.science}>
      <div className="container">
        <div className={css.science__top}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className={css.science__title}
          >
            AI agent development company, for people and businesses. Only from
            $49/month
            <img
              src={titleIcon}
              alt="icon"
              width="78.5"
              className={css.science__title__icon}
            />
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textAnimation}
            className={css.science__contact}
          >
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              className={css.science__contact__link}
            >
              <span className={css.black__span}>Contact Us</span>
              <span className={css.white__span}>Contact Us</span>
            </motion.a>
            <Link className={css.science__contact__arrow}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.science__border}
        ></motion.div>
        <p className={css.science__year}>2025</p>

        <div className={css.science__bottom}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={imageAnimation}
            src={circlesImage}
            alt="circles"
            className={css.science__circles}
          />
          <div>
            <ul className={css.science__list}>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg
                    className={css.science__icon}
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke="#fff"
                    fill='#fff'
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                  >
                    <path
                      d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={1}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg className={css.science__icon} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill="#FCF2EE" fill-rule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"/></svg>
                </Link>
              </motion.li>
              {/* <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={2}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-twitter'}></use>
                  </svg>
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={3}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-youtube'}></use>
                  </svg>
                </Link>
              </motion.li> */}
            </ul>
            <p className={css.science__text}>
              AI Powerhouse
              <br />
              You spend up to 80% less time but get dozens of times more results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
