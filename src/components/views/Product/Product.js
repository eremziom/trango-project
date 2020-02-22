import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import { SingleProductContainer } from '../../common/SingleProduct/SingleProduct';

class Component extends React.Component {

  render(){
    const {products} = this.props;
    return (
      <div>
        <p className={styles.title}>Product {this.props.match.params.name}</p>
        <div className={styles.productCard}>
          <div className={styles.product}>
            {products.map(product => {
              if(product.name === this.props.match.params.name){
                return <SingleProductContainer key={product.id} product={product}/>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  match: PropTypes.object,
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
  Component as Product,
  Container as ProductContainer,
};
