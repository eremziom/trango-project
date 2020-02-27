import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/orderRedux.js';

import { MenuButton } from '../../common/MenuButton/MenuButton';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TerrainIcon from '@material-ui/icons/Terrain';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

class Component extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

  showCart = () => {
    const {stateCart} = this.props;
    return stateCart.length;
  }

  render(){
    return (
      <Container maxWidth="lg">
        <nav className={styles.navi}>
          <MenuButton link={'/'}><HomeIcon /></MenuButton>
          {this.showMenu()}
          <Button className={styles.menuIcon} onClick={this.toggleMenu}><MenuIcon /></Button>
          <MenuButton link={'/cart'}>
            <Badge color="secondary" badgeContent={this.showCart()}>
              <ShoppingCartIcon />
            </Badge>
          </MenuButton>
        </nav>
        {this.showSmallMenu()}
      </Container>
    );
  }
}

Component.propTypes = {
  stateCart: PropTypes.array,
};

const mapStateToProps = state => ({
  stateCart: getAll(state),
});

const Container1 = connect(mapStateToProps)(Component);

export {
  Component as PageNav,
  Container1 as PageNavContainer,
};
