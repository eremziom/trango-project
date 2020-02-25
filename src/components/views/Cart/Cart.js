import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll, goToOrder } from '../../../redux/orderRedux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Component extends React.Component {

  state = {
    cart: '',
  }

  componentDidMount = () => {
    const {stateCart} = this.props;
    this.setState({cart: stateCart});
  }

  increaseQuantity =  (prod) => {
    const {cart} = this.state;
    let newCart = cart;
    for(let product of newCart){
      if(prod === product){
        let newNumber = product.count + 1;
        product.count = newNumber;
      }
    }
    this.setState({cart: newCart});
  }

  decreaseQuantity =  (prod) => {
    const {cart} = this.state;
    let newCart = cart;
    for(let product of newCart){
      if(prod === product){
        let newNumber = product.count - 1;
        if(newNumber < 1){
          newNumber = 1;
        }
        product.count = newNumber;
      }
    }
    this.setState({cart: newCart});
  }

  setPrice = (product) => {
    return product.fullPrice * product.count;
  }

  showTotalPrice = () => {
    let priceTotal = 0;
    const {cart} = this.state;
    for(let product of cart){
      priceTotal = priceTotal + (product.fullPrice * product.count);
    }
    return priceTotal;
  }

  deleteProduct = (product) => {
    const {cart} = this.state;
    let newCart = cart;
    newCart.splice(newCart.indexOf(product), 1);
    this.setState({cart: newCart});
  }

  toOrder = () => {
    const {goToOrder} = this.props;
    const {cart} = this.state;

    goToOrder(cart);
    this.props.history.push('/order');
  }

  render(){
    const {cart} = this.state;

    return (
      <div className={styles.background}>
        <p className={styles.title}>Cart</p>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right" className={styles.custom}>Customization</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Del</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart ? cart.map(product => {
                return (
                  <TableRow key={product.name}>
                    <TableCell component="th" scope="row">{product.name}
                    </TableCell>
                    <TableCell align="right">
                      {!product.color && !product.paint && !product.graver && !product.length && !product.wish ?
                        'No customization' :
                        <div className={styles.customization}>
                          <p>{product.color ? 'Color: ' + product.color : ''}</p>
                          <p>{product.paint ? 'Paint: ' + product.paint : ''}</p>
                          <p>{product.graver ? 'Graver: ' + product.graver : ''}</p>
                          <p>{product.length ? 'Length: ' + product.length : ''}</p>
                          <p className={styles.wish}>{product.wish ? 'Wish: ' + product.wish : ''}</p>
                        </div>
                      }
                    </TableCell>
                    <TableCell align="right">
                      {product.count}.pcs
                      <ButtonGroup className={styles.quantityButtons}>
                        <Button
                          aria-label="reduce"
                          onClick={() => this.decreaseQuantity(product)}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          aria-label="increase"
                          onClick={() => this.increaseQuantity(product)}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="right" className={styles.price}>{this.setPrice(product)}</TableCell>
                    <TableCell align="right"><Button onClick={() => this.deleteProduct(product)}><DeleteForeverIcon />Delete</Button></TableCell>
                  </TableRow>
                );
              }) : ''}
            </TableBody>
          </Table>
          <div>Total Price: {this.showTotalPrice()}</div>
          <div className={styles.buttons}>
            <Button size="small" color="primary" className={styles.addToCart} onClick={this.toOrder}>
              <LocalShippingIcon className={styles.cartIcon} /> Order
            </Button>
            <Button size="small" color="primary" className={styles.addToCart} component={Link} exact to={`${process.env.PUBLIC_URL}/products`}>
              <ArrowBackIcon className={styles.cartIcon} /> GO BACK
            </Button>
          </div>
        </TableContainer>

      </div>
    );
  }
}

Component.propTypes = {
  stateCart: PropTypes.array,
  goToOrder: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  stateCart: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  goToOrder: (payload) => dispatch(goToOrder(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  Container as CartContainer,
};
