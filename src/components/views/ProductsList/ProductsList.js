import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsList.module.scss';


import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import { ProductCard } from '../../common/ProductCard/ProductCard';

class Component extends React.Component {

  render(){
    const {category, products} = this.props;
    return (
      <div className={styles.background}>
        <div className={styles.productsContainer}>
          {category ? products.map(product => {
            if( product.category === category.toLowerCase()){
              return (
                <ProductCard key={product.id} name={product.name} photo={product.photo} short='lorem ipsum'></ProductCard>
              );
            }
          }) : products.map(product => {
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
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(fetchAllPosts()),
// });

const Container = connect(mapStateToProps /*mapDispatchToProps*/)(Component);

export {
  Component as ProductsList,
  Container as ProductsListContainer,
};
