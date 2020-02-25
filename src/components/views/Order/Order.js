import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class Component extends React.Component {

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

  render() {
    return (
      <div className={styles.background}>
        <p className={styles.title}>Order</p>
        <div className={styles.container}>
          <form className={styles.form} noValidate autoComplete="off">
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
              <Button size="small" color="primary" className={styles.order} onClick={this.toOrder}>
                <SendIcon className={styles.sendIcon} /> Confirm and Send
              </Button>
            </div>
          </form>
          <div className={styles.summary}>
            Order Summary
          </div>
        </div>
      </div>
    );
  }
}

export {
  Component as Order,
  //Container as OrderContainer,
};
