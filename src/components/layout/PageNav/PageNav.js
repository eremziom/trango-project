import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import clsx from 'clsx';

import { MenuButton } from '../../common/MenuButton/MenuButton';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TerrainIcon from '@material-ui/icons/Terrain';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class Component extends React.Component {

  showMenu = () => {
    return(
      <div className={styles.mainMenu}>
        <MenuButton link={'/products'}><TerrainIcon className={styles.icon}/>PRODUCTS</MenuButton>
        <MenuButton link={'/promotions'}><TrendingDownIcon className={styles.icon}/>PROMOTIONS</MenuButton>
        <MenuButton link={'/contact'}><ContactPhoneIcon className={styles.icon}/>CONTACT</MenuButton>
      </div>
    );
  }

  showSmallMenu = () => {
    return(
      <div className={clsx(styles.mainMenuSmall, styles.hide)} id='smMenu'>
        <MenuButton link={'/products'}><TerrainIcon className={styles.icon}/>PRODUCTS</MenuButton>
        <MenuButton link={'/promotions'}><TrendingDownIcon className={styles.icon}/>PROMOTIONS</MenuButton>
        <MenuButton link={'/contact'}><ContactPhoneIcon className={styles.icon}/>CONTACT</MenuButton>
      </div>
    );
  }

  toggleMenu = () => {
    const menu = document.getElementById('smMenu');
    menu.classList.toggle(styles.hide);
  }

  render(){
    return (
      <Container maxWidth="lg">
        <nav className={styles.navi}>
          <MenuButton link={'/'}><HomeIcon /></MenuButton>
          {this.showMenu()}
          <Button className={styles.menuIcon} onClick={this.toggleMenu}><MenuIcon /></Button>
          <MenuButton link={'/cart'}><ShoppingCartIcon /></MenuButton>
        </nav>
        {this.showSmallMenu()}
      </Container>
    );
  }
}

export {
  Component as PageNav,
  //Container as PageNavContainer,
};
