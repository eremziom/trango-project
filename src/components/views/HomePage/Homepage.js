import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import { Box } from '../../common/Box/Box.js';
import { homepagePhoto1, homepagePhoto2, homepagePhoto3,
  homepageText1, homepageText2, homepageText3,
  homepageHeader1, homepageHeader2, homepageHeader3} from '../../../content';

const Component = () => {
  return (
    <div className={styles.background}>
      <h2 className={styles.title}>Welcome to Trango Towers Crafting Centre</h2>
      <div className={styles.description}>
        <p>We design, craft and customize climbing equipment. Prepare for journey through world of epic ropes, carabiners and ice stuff</p>
      </div>
      <div>
        <Box photo={homepagePhoto1} header={homepageHeader1}> {homepageText1} </Box>
        <Box photo={homepagePhoto2} header={homepageHeader2} reverse='true'> {homepageText2} </Box>
        <Box photo={homepagePhoto3} header={homepageHeader3}> {homepageText3} </Box>
      </div>
    </div>
  );
};

export {
  Component as Homepage,
  //Container as HomepageContainer,
};
