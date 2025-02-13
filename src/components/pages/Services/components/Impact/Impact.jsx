import Media from 'react-media';
import css from './Impact.module.scss';
import tennisVideo from '../../video/tennis.mp4';
import tennisMobileVideo from '../../video/tennis-mob.mp4';
import clsx from 'clsx';

const Impact = () => {
  return (
    <section data-color="black" data-kf="0.65" className={css.impact}>
      <div className="container">
        <p className={css.impact__uptitle}>AI Technology</p>
        <h2 className={css.impact__title}>
          The impact of AI Agents on the world is far-reaching and profound,
          changing the way we live, work, and interact.
        </h2>
        <div
          className={css.impact__video}
          dangerouslySetInnerHTML={{
            __html: `<video muted loop autoPlay playsInline controls=${false}>
              <source src=${
                window.innerWidth > 767 ? tennisVideo : tennisMobileVideo
              } />
            </video>`,
          }}
        ></div>

        {/* <>
          <div className={css.impact__border}></div>
        </> */}

        <p className={css.impact__text}>
          It is no longer feasible to resist the integration of AI in various
          industries, but rather to embrace and lead it in order to stay
          competitive in the modern marketplace. Those who do not adapt to this
          technology risk being left behind.
        </p>
      </div>
    </section>
  );
};

export default Impact;
