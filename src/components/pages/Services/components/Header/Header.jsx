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
    <>
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
                    <div className={css.header__buttons}>
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
      <a
        href="https://Wa.me/19082204724"
        target="_blank"
        className={css.whatsapp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 1000 1000"
          class="hovered-paths"
        >
          <g>
            <path
              fill="#25d366"
              d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
              opacity="1"
              data-original="#25d366"
              class="hovered-path"
            ></path>
            <path
              fill="#ffffff"
              style={{
                translate: '2% -2.5%',
              }}
              fill-rule="evenodd"
              d="M733.9 267.2c-62-62.1-144.6-96.3-232.5-96.4-181.1 0-328.6 147.4-328.6 328.6 0 57.9 15.1 114.5 43.9 164.3L170.1 834l174.2-45.7c48 26.2 102 40 157 40h.1c181.1 0 328.5-147.4 328.6-328.6.1-87.8-34-170.4-96.1-232.5zM501.5 772.8h-.1c-49 0-97.1-13.2-139-38.1l-10-5.9L249 755.9l27.6-100.8-6.5-10.3c-27.3-43.5-41.8-93.7-41.8-145.4.1-150.6 122.6-273.1 273.3-273.1 73 0 141.5 28.5 193.1 80.1s80 120.3 79.9 193.2c0 150.7-122.6 273.2-273.1 273.2zm149.8-204.6c-8.2-4.1-48.6-24-56.1-26.7s-13-4.1-18.5 4.1-21.2 26.7-26 32.2-9.6 6.2-17.8 2.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9s-.5-12.7 3.6-16.8c3.7-3.7 8.2-9.6 12.3-14.4s5.5-8.2 8.2-13.7 1.4-10.3-.7-14.4-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1-4.8-.2-10.3-.3-15.7-.3-5.5 0-14.4 2.1-21.9 10.3s-28.7 28.1-28.7 68.5 29.4 79.5 33.5 84.9c4.1 5.5 57.9 88.4 140.3 124 19.6 8.5 34.9 13.5 46.8 17.3 19.7 6.3 37.6 5.4 51.7 3.3 15.8-2.4 48.6-19.9 55.4-39 6.8-19.2 6.8-35.6 4.8-39s-7.5-5.4-15.7-9.6z"
              clip-rule="evenodd"
              opacity="1"
              data-original="#ffffff"
            ></path>
          </g>
        </svg>
      </a>
    </>
  );
};

export default Header;
