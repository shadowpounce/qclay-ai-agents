import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './Header.module.scss';
import logo from '../../images/header/logo.png';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const hoverEffectAnimation = {
  initial: {
    width: 203,
  },
  hover: {
    width: [220, 210],
    transition: { duration: 0.5 },
  },
};

const Header = ({
  hideMenu = false,
  onlyMenu = false,
  staticHeader = false,
}) => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      const sections = document.querySelectorAll('section');

      window.addEventListener('scroll', () => {
        let windowHeight = window.innerHeight;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const color = section.dataset.color;

          console.log(rect.top);

          // Проверяем, когда секция почти полностью заполняет экран
          if (
            rect.top < windowHeight * 0.25 &&
            rect.bottom > windowHeight * 0.25
          ) {
            switch (color) {
              case 'black':
                logoRef.current.className = `${css.header__logo}`;
                logoRef.current.classList.add(`${css.black}`);
                break;
              case 'white':
                logoRef.current.className = `${css.header__logo}`;
                logoRef.current.classList.add(`${css.white}`);
                break;
              default:
                logoRef.current.className = `${css.header__logo}`;
                break;
            }
          }
        });
      });
    }
  }, []);

  return (
    <header
      className={clsx(css.header, { [css.header__static]: staticHeader })}
    >
      <div className="container">
        <div className={css.header__container}>
          {!onlyMenu && (
            <Link ref={logoRef} to="/" className={css.header__logo}>
              <img src={logo} alt="logo" width="54" />
              QClay AI
            </Link>
          )}
          <Media
            query="(min-width:1124px)"
            render={() => (
              <>
                {!hideMenu && (
                  <ul className={css.navigation}>
                    <li className={css.navigation__item}>
                      <a
                        onClick={ev => {
                          ev.preventDefault();
                          document
                            .querySelector('#services')
                            .scrollIntoView({ behavior: 'smooth' });
                        }}
                        href="#services"
                        className={css.navigation__link}
                      >
                        Services
                      </a>
                    </li>

                    <li className={css.navigation__item}>
                      <a
                        onClick={ev => {
                          ev.preventDefault(0);
                          document
                            .querySelector('#prices')
                            .scrollIntoView({ behavior: 'smooth' });
                        }}
                        href="#prices"
                        className={css.navigation__link}
                      >
                        Price
                      </a>
                    </li>
                    <li className={css.navigation__item}>
                      <a
                        onClick={ev => {
                          ev.preventDefault(0);
                          document
                            .querySelector('#about-us')
                            .scrollIntoView({ behavior: 'smooth' });
                        }}
                        href="#about-us"
                        className={css.navigation__link}
                      >
                        About
                      </a>
                    </li>
                    <li
                      onClick={ev => {
                        ev.preventDefault();
                        document
                          .querySelector('#contact-us')
                          .scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={css.navigation__item}
                    >
                      <a href="#contact-us" className={css.navigation__link}>
                        Contacts
                      </a>
                    </li>
                  </ul>
                )}
                {!onlyMenu && (
                  <div className={css.header__button}>
                    <motion.button
                      onClick={() =>
                        document
                          .querySelector('#contact-us')
                          .scrollIntoView({ behavior: 'smooth' })
                      }
                      initial="initial"
                      whileHover="hover"
                      variants={hoverEffectAnimation}
                      type="button"
                      className={css.header__quote}
                    >
                      <span className={css.white__span}>Get Quote</span>
                      <span className={css.black__span}>Get Quote</span>
                    </motion.button>
                  </div>
                )}
              </>
            )}
          />
          <Media
            query="(max-width:1000px)"
            render={() => (
              <div className={css.header__button}>
                <motion.button
                  onClick={() =>
                    document
                      .querySelector('#contact-us')
                      .scrollIntoView({ behavior: 'smooth' })
                  }
                  initial="initial"
                  whileHover="hover"
                  variants={hoverEffectAnimation}
                  type="button"
                  className={css.header__quote}
                >
                  <span className={css.white__span}>Get Quote</span>
                  <span className={css.black__span}>Get Quote</span>
                </motion.button>
              </div>
            )}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
