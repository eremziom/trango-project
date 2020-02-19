import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

import { FooterIcon } from '../../common/FooterIcon/FooterIcon';

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import BusinessIcon from '@material-ui/icons/Business';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Component = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <p className={styles.title}>TRANGO TOWERS</p>
        <a className={styles.links} href='#'><FacebookIcon className={styles.icon}/> Facebook</a>
        <a className={styles.links} href='#'><TwitterIcon className={styles.icon}/> Twitter</a>
      </div>
      <div className={styles.contact}>
        <div><PhoneIcon className={styles.icon}/>+48 604456789</div>
        <div><MailIcon className={styles.icon}/>office@trango-tower.com</div>
        <div><BusinessIcon className={styles.icon}/>Apline Avenue 8848, 98-345 Łódź</div>
        <div></div>
      </div>
      <div className={styles.developer}>
        <div><DeveloperModeIcon className={styles.icon}/>WebApp developed by:</div>
        <div><p className={styles.sign}>eremziom</p></div>
      </div>
    </div>
  );
};

export {
  Component as Footer,
  //Container as FooterContainer,
};
