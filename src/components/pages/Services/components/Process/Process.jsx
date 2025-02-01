import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import css from './Process.module.scss';
import sprite from '../../images/sprite.svg';
import circleLottie from '../../lotties/loop_elipsses_ai.json';
import Media from 'react-media';

const hoverEffectAnimation = {
  initial: {
    scaleX: 1,
  },
  hover: {
    scaleX: [1.1, 1.05],
    transition: { duration: 0.5 },
  },
};

const Process = () => {
  return (
    <section data-color='white' data-kf="0.7" className={css.process}>
      <div className="container">
        <p className={css.process__uptitle}>About us</p>
        <h2 className={css.process__title}>
          Agent AI development and customization takes only 1-3 days.
        </h2>
        <div className={css.process__border}></div>
        <p className={css.process__roadmap}>Steps</p>
        <ul className={css.process__list}>
          <li className={css.process__roadmap__item}>
            <Player
              src={circleLottie}
              autoplay
              loop
              className={css.process__lottie}
            ></Player>
            <span></span>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  01<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>Brainstorm with us</h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      We help you overcome the technical barrier with agent
                      customization, which will take a ton of time and immersion
                      in technical knowledge, we listen to your challenges,
                      brainstorm what we can optimize or build for you.
                    </p>
                  )}
                />
                <p className={css.process__time}>2 Hours</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    We help you overcome the technical barrier with agent
                    customization, which will take a ton of time and immersion
                    in technical knowledge, we listen to your challenges,
                    brainstorm what we can optimize or build for you.
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  02<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>Develop for you</h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      Our developer builds the agent AI to suit your needs
                    </p>
                  )}
                />
                <p className={css.process__time}>2 - 4 Days</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    Our developer builds the agent AI to suit your needs
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  03<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>
                  Support and modernization
                </h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      We support the agent, refine it if it stops working (for
                      example, the structure of the project on which it was
                      working has changed), develop it to be more functional and
                      versatile.
                    </p>
                  )}
                />
                <p className={css.process__time}>
                  Continuously (12 developer hours)
                </p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    We support the agent, refine it if it stops working (for
                    example, the structure of the project on which it was
                    working has changed), develop it to be more functional and
                    versatile.
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  04<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>
                  In touch with a dedicated manager
                </h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      With whom you can discuss new automation ideas and pass
                      feedback to the developers
                    </p>
                  )}
                />
                <p className={css.process__time}>Permanently</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    With whom you can discuss new automation ideas and pass
                    feedback to the developers
                  </p>
                )}
              />
            </button>
          </li>
        </ul>
        <div className={css.process__block}>
          <p className={css.process__agree}>
            Contact us and we'll think together about how an agent could be of
            service to you
          </p>
          <div className={css.process__contact}>
            <motion.a
              onClick={() =>
                document
                  .querySelector('#contact-us')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              className={css.process__contact__link}
            >
              <span className={css.white__span}>Contact Us</span>
              <span className={css.black__span}>Contact Us</span>
            </motion.a>
            <Link className={css.process__contact__icon}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
