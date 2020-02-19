import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';
import { promoPhoto1, promoPhoto2, promoPhoto3,
  promoHeader1, promoHeader2, promoHeader3,
  promoText1, promoText2, promoText3,
  promoValue1, promoValue2, promoValue3,
  promoDescription1, promoDescription2, promoDescription3 } from '../../../content';

import { Promo } from '../../common/Promo/Promo';

const Component = () => {
  return (
    <div className={styles.background}>
      <h2 className={styles.title}>Check out our latest promotions</h2>
      <div className={styles.promoContainer}>
        <Promo header={promoHeader1} photo={promoPhoto1}
          text={promoText1} promo={promoValue1} short={promoDescription1}></Promo>
        <Promo header={promoHeader2} photo={promoPhoto2}
          text={promoText2} promo={promoValue2} short={promoDescription2}></Promo>
        <Promo header={promoHeader3} photo={promoPhoto3}
          text={promoText3} promo={promoValue3} short={promoDescription3}></Promo>
      </div>
    </div>
  );
};

export {
  Component as Promotions,
  //Container as PromotionsContainer,
};
