import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import { connect } from 'react-redux';
import { getCustomerData, getAll } from '../../../redux/orderRedux';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class Component extends React.Component {

  state = {
    cart: '',
  }

  componentDidMount = () => {
    const {cartData} = this.props;
    this.setState({cart: cartData});
  }

  giveDate = () => {
    const newDate = new Date();
    const date = newDate.toLocaleDateString('PL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const time = newDate.toLocaleTimeString('PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
    return `${date} ${time}`;
  };

  countProducts = (cartData) => {
    let productCount = 0;
    for(let product of cartData){
      productCount = productCount + product.count;
    }
    return productCount;
  }

  countPrice = (cartData) => {
    let productsPrice = 0;
    for(let product of cartData){
      productsPrice = productsPrice + product.count * product.fullPrice;
    }
    return productsPrice;
  }

  render() {
    const {cartData} = this.props;
    return (
      <div className={styles.background}>
        <h2 className={styles.title}>Order Summary</h2>
        <div className={styles.container}>
          <form className={styles.form} noValidate autoComplete="off">
            <p>Customer Data</p>
            <div className={styles.formBlock}>
              <TextField id="filled-basic" label="Name" variant="filled" />
              <TextField id="filled-basic" label="Surname" variant="filled" />
              <TextField id="filled-basic" label="phone number" variant="filled" />
              <TextField id="filled-basic" label="email" variant="filled" />
              <TextField id="filled-basic" label="repeat email" variant="filled" />
            </div>
            <p>Payment Addres</p>
            <div className={styles.formBlock}>
              <TextField id="filled-basic" label="Street" variant="filled" />
              <TextField id="filled-basic" label="Postal Code" variant="filled" />
              <TextField id="filled-basic" label="Town" variant="filled" />
              <TextField id="filled-basic" label="Country" variant="filled" />
            </div>
            <ExpansionPanel className={styles.panel}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.panelBar}
              >
                <p>Delivery Addres (if different)</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.delivery}>
                <div className={styles.formBlock}>
                  <TextField id="filled-basic" label="Street" variant="filled" />
                  <TextField id="filled-basic" label="Postal Code" variant="filled" />
                  <TextField id="filled-basic" label="Town" variant="filled" />
                  <TextField id="filled-basic" label="Country" variant="filled" />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <div className={styles.formBlock}>
              <TextField disabled
                id="pubDate-input"
                label="Order Date"
                type="text"
                variant="filled"
                value={this.giveDate()}
                name='pubDate'
              />
              <Button size="small" color="primary" className={styles.order}>
                <SendIcon className={styles.sendIcon} /> Confirm and Send
              </Button>
            </div>
          </form>
          <div className={styles.summary}>
            <p>Your order:</p>
            <div className={styles.box}>
              {cartData ? cartData.map(product => {
                return (
                  <div key={product.name} className={styles.product}>
                    <h2>{product.name}</h2>
                    <div className={styles.customization}>
                      <p>{product.color ? 'Color: ' + product.color : ''}</p>
                      <p>{product.paint ? 'Paint: ' + product.paint : ''}</p>
                      <p>{product.graver ? 'Graver: ' + product.graver : ''}</p>
                      <p>{product.length ? 'Length: ' + product.length : ''}</p>
                      <p className={styles.wish}>{product.wish ? 'Wish: ' + product.wish : ''}</p>
                    </div>
                    <p>Quantity: {product.count}</p>
                    <p>Price for one: {product.fullPrice}$</p>
                    <h3>Price for all: {product.count * product.fullPrice}$</h3>
                  </div>
                );
              }) : <p>Cart Empty</p>}
            </div>
            <div className={styles.sumUp}>
              <p className={styles.sumNumbers}>Products total: {<span>{this.countProducts(cartData)}</span>}pcs</p>
              <p className={styles.sumNumbers}>Total Price: {<span>{this.countPrice(cartData)}</span>}$</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  cartData: PropTypes.array,
};

const mapStateToProps = state => ({
  userData: getCustomerData(state),
  cartData: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   goToOrder: (payload) => dispatch(goToOrder(payload)),
// });

const Container = connect(mapStateToProps, /*mapDispatchToProps*/)(Component);


export {
  Component as Order,
  Container as OrderContainer,
};
