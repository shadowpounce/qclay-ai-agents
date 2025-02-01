import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './Price.module.scss';

const borderAnimation = {
  hidden: {
    x: '-30%',
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Price = () => {
  return (
    <section data-kf="0.7" id="prices" className={css.price}>
      <div className="container">
        <h2 className={css.price__title}>
          Our <span>prices</span> for development, modernization and support of
          AI Agent
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.price__border}
        ></motion.div>
        <ul className={css.price__list}>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#1</p>
            <h3 className={css.card__title}>
              Automation of 1 line of business
            </h3>
            <p className={css.card__price}>
              Dedicated manager and developer for 10-12 hours per month
            </p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p
              onClick={() =>
                document
                  .querySelector('#contact-us')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className={css.card__estimated}
            >
              $49/month/<span>(one year contract)</span>
            </p>
          </li>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#2</p>
            <h3 className={css.card__title}>PRO Automation</h3>
            <p className={css.card__price}>
              up to 5 areas* example: content creation, analytics, promotion,
              negotiations, base maintenance
              <br />
              <br />
              Support - dedicated manager and developer up to 15 hours per month
            </p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p
              onClick={() =>
                document
                  .querySelector('#contact-us')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className={css.card__estimated}
            >
              $129/month/ <span>(one year subscription)</span> .
            </p>
          </li>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#3</p>
            <h3 className={css.card__title}>For Business</h3>
            <p className={css.card__price}>
              from 5 tasks in automation, more comprehensive approach
              <br />
              <br />
              Support and modernization up to 40 developer and manager hours per
              month
            </p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p
              onClick={() =>
                document
                  .querySelector('#contact-us')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className={css.card__estimated}
            >
              Let's talk
            </p>
          </li>
        </ul>
        <Media
          query="(max-width:767px)"
          render={() => <span className={css.price__pagination}></span>}
        />
      </div>
    </section>
  );
};

export default Price;
