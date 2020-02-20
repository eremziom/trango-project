import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsList.module.scss';
import db from '../../../db';

import { ProductCard } from '../../common/ProductCard/ProductCard';

class Component extends React.Component {

  render(){
    const {category} = this.props;
    return (
      <div className={styles.background}>
        <div className={styles.productsContainer}>
          {category ? db.products.map(product => {
            if( product.category === category.toLowerCase()){
              return (
                <ProductCard key={product.id} name={product.name} photo={product.photo} short='lorem ipsum'></ProductCard>
              );
            }
          }) : db.products.map(product => {
            return (
              <ProductCard key={product.id} name={product.name} photo={product.photo} short='lorem ipsum'></ProductCard>
            );
          })}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  category: PropTypes.string,
};

export {
  Component as ProductsList,
  //Container as ProductsListContainer,
};
