import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import db from '../../../db';

import { SingleProduct } from '../../common/SingleProduct/SingleProduct';

class Component extends React.Component {

  render(){
    return (
      <div>
        <p className={styles.title}>Product {this.props.match.params.name}</p>
        <div className={styles.productCard}>
          <div className={styles.product}>
            {db.products.map(product => {
              if(product.name === this.props.match.params.name){
                return <SingleProduct product={product}/>;
              }
            })}
          </div>
          <div className={styles.custom}>
            b
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  match: PropTypes.object,
};

export {
  Component as Product,
  //Container as ProductContainer,
};
