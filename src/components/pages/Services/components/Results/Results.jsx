import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { InView } from 'react-intersection-observer';
import Media from 'react-media';
import css from './Results.module.scss';
import cricleImage from '../../images/results/circle.png';
import laptopVideo from '../../video/laptop.mp4';

const Results = () => {
  const [isInView, setIsInView] = useState(false);

  const { number } = useSpring({
    from: { number: 578.876 },
    number: 608.603,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  const { secondNumber } = useSpring({
    from: { secondNumber: 580.055 },
    secondNumber: 1318.367,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  const { thirdNumber } = useSpring({
    from: { thirdNumber: 4.298 },
    thirdNumber: 4.403,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  return (
    <section data-kf="0.825" className={css.results}>
      <div className="container">
        <div className={css.results__block}>
          <div className={css.results__beneficial}>
            <h2 className={css.results__title}>
              <span>Beneficial</span> results of AI in Business
            </h2>
            <img
              src={cricleImage}
              alt="circle"
              width="471"
              className={css.results__circle}
            />
          </div>
          <div className={css.results__saved}>
            <div>
              <p className={css.results__sum}>
                270 <br /> employees
              </p>
              <Media
                query="(min-width:1123px)"
                render={() => (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls="false"
                    className={css.results__laptop}
                  >
                    <source src={laptopVideo} />
                  </video>
                )}
              />
              <p className={css.results__text}>
                Our team of 270 developers, data scientists, administrators
                managers
              </p>
            </div>
            <Media
              query="(max-width:1123px)"
              render={() => (
                <video
                  controls="false"
                  autoPlay
                  muted
                  loop
                  className={css.results__laptop}
                >
                  <source src={laptopVideo} />
                </video>
              )}
            />
          </div>
          <div className={css.results__last}>
            <div className={css.results__top}>
              <p className={css.results__sum}>+3100</p>
              <p className={css.results__text}>
                We provide support for over 3,000 ai agents.
              </p>
            </div>
            <div className={css.results__bottom}>
              <p className={css.results__sum}>X10</p>
              <p className={css.results__text}>
                You spend 80% less time, but get dozens of times more results”
                leads, target audience grow, more data is processed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
