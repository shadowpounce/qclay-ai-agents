import { Link } from 'react-router-dom';
import css from './Footer.module.scss';
import logoImage from '../../images/footer/logo.png';
import clutchImage from '../../images/footer/clutch.png';
import g2Image from '../../images/footer/g2.png';
import trustpilotImage from '../../images/footer/trustpilot.png';
import goodfirmsImage from '../../images/footer/goodfirms.png';

const Footer = () => {
  return (
    <footer data-kf="0.6" className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <Link className={css.footer__logo}>
            <img src={logoImage} alt="logo" />
            QClay AI
          </Link>
          <p className={css.footer__copy}>
            All copyrights reserved ⓒ AI QClay 2025
          </p>
          <div class="badge-rating-card">
            <div class="badge-rating-item">
              <a href="https://clutch.co/profile/qclay-ai#highlights" target="_blank">
                <img
                  loading="lazy"
                  src={clutchImage}
                  alt="Clutch"
                  data-clarity-loaded="1mk0z2e"
                />
              </a>
            </div>
            <div class="badge-rating-item">
              <a
                href="https://www.g2.com/products/qclay-ai/reviews?qs=pros-and-cons"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={g2Image}
                  alt="G2"
                  data-clarity-loaded="c8cfdq /"
                />
              </a>
            </div>
            <div class="badge-rating-item">
              <a
                href="https://www.trustpilot.com/review/qclay.ai"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={trustpilotImage}
                  alt="trustpilot"
                  data-clarity-loaded="c8cfdq /"
                />
              </a>
            </div>
            <div class="badge-rating-item">
              <a
                href="https://www.goodfirms.co/company/qclay-ai"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={goodfirmsImage}
                  alt="goodfirms"
                  data-clarity-loaded="c8cfdq /"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
