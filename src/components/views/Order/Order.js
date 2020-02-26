import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import { connect } from 'react-redux';
import { getAll, addCustomer } from '../../../redux/orderRedux';

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
    customerData: '',
    details: '',
  }

  componentDidMount = () => {
    const {cartData} = this.props;
    this.setState({cart: cartData});
  }

  updateTextField = ({target}) => {
    const { customerData } = this.state;
    const { value, name } = target;
    this.setState({customerData: {...customerData, [name]: value}});
  }

  updateData = async () => {
    const {cartData} = this.props;
    const { details } = this.state;
    const totalPrice = await this.countPrice(cartData);
    const date = document.getElementById('date-input');

    this.setState({details: {...details, orderDate: date.value, totalPrice: totalPrice}});
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

  sendOrder = async () => {
    const {addCustomer} = this.props;
    await this.updateData();

    addCustomer(this.state);
  }

  render() {
    const {cartData} = this.props;
    const {updateTextField, sendOrder} = this;
    return (
      <div className={styles.background}>
        <h2 className={styles.title}>Order Summary</h2>
        <div className={styles.container}>
          <form className={styles.form} noValidate autoComplete="off">
            <p>Customer Data</p>
            <div className={styles.formBlock}>
              <TextField id="first-name-input" label="First Name" variant="filled" name="firstName" onChange={updateTextField}/>
              <TextField id="last-name-input" label="Last Name" variant="filled" name="lastName" onChange={updateTextField}/>
              <TextField id="phone-input" label="phone number" variant="filled" name="phone" onChange={updateTextField}/>
              <TextField id="emial-input" label="email" variant="filled" name="email" onChange={updateTextField}/>
              <TextField id="email-confirm-input" label="confirm email" variant="filled"/>
            </div>
            <p>Payment Address</p>
            <div className={styles.formBlock}>
              <TextField id="address-street-input" label="Street" variant="filled" name="addressStreet" onChange={updateTextField}/>
              <TextField id="address-postalcode-input" label="Postal Code" variant="filled" name="addressCode" onChange={updateTextField}/>
              <TextField id="address-town-input" label="Town" variant="filled" name="addressTown" onChange={updateTextField}/>
              <TextField id="address-country-input" label="Country" variant="filled" name="addressCountry" onChange={updateTextField}/>
            </div>
            <ExpansionPanel className={styles.panel}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-content"
                id="panel-header"
                className={styles.panelBar}
              >
                <p>Delivery Addres (if different)</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.delivery}>
                <div className={styles.formBlock}>
                  <TextField id="delivery-street-input" label="Street" variant="filled" name="deliveryStreet" onChange={updateTextField}/>
                  <TextField id="delivery-postalcode-input" label="Postal Code" variant="filled" name="deliveryCode" onChange={updateTextField}/>
                  <TextField id="delivery-town-input" label="Town" variant="filled" name="deliveryTown" onChange={updateTextField}/>
                  <TextField id="delivery-country-input" label="Country" variant="filled" name="deliveryCountry" onChange={updateTextField}/>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <div className={styles.formBlock}>
              <TextField disabled
                id="date-input"
                label="Order Date"
                type="text"
                variant="filled"
                value={this.giveDate()}
                name='date'
              />
              <Button size="small" color="primary" className={styles.order} onClick={sendOrder}>
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
  addCustomer: PropTypes.func,
};

const mapStateToProps = state => ({
  cartData: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addCustomer: (payload) => dispatch(addCustomer(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as Order,
  Container as OrderContainer,
};
