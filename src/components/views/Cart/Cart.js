import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/orderRedux';

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

class Component extends React.Component {

  state = {
    cart: '',
  }

  componentDidMount = () => {
    const {stateCart} = this.props;
    this.setState({cart: stateCart});
  }

  increaseQuantity =  (name) => {
    const {cart} = this.state;
    let newCart = cart;
    for(let product of newCart){
      if(name === product.name){
        let newNumber = product.count + 1;
        product.count = newNumber;
      }
    }
    this.setState({cart: newCart});
  }

  decreaseQuantity =  (name) => {
    const {cart} = this.state;
    let newCart = cart;
    for(let product of newCart){
      if(name === product.name){
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
    let additionalPrice = '';
    if(product.color){
      additionalPrice = 2;
    }
    if(product.graver){
      additionalPrice = 5;
    }
    if(product.color && product.graver){
      additionalPrice = 7;
    }
    if(product.category === 'rope'){
      return (product.price * product.length + additionalPrice) * product.count + '$';
    } else {
      return (product.price + additionalPrice) * product.count + '$';
    }
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
                      <ButtonGroup className={styles.buttons}>
                        <Button
                          aria-label="reduce"
                          onClick={() => this.decreaseQuantity(product.name)}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          aria-label="increase"
                          onClick={() => this.increaseQuantity(product.name)}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                    <TableCell align="right">{this.setPrice(product)}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                );
              }) : ''}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

Component.propTypes = {
  stateCart: PropTypes.array,
};

const mapStateToProps = state => ({
  stateCart: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(fetchAllPosts()),
// });

const Container = connect(mapStateToProps /*mapDispatchToProps*/)(Component);

export {
  Component as Cart,
  Container as CartContainer,
};
