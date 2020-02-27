import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getAll, fetchSingleProduct } from '../../../redux/productsRedux';

import { SingleProductContainer } from '../../common/SingleProduct/SingleProduct';

class Component extends React.Component {

  async componentDidMount() {
    const {fetchSingleProduct} = this.props;
    if(this.props.match){
      const name = this.props.match.params.name;
      await fetchSingleProduct( name );
    } else {
      this.props.history.push('/NotFound');
    }
  }

  render(){
    const {products} = this.props;
    return (
      <div>
        <p className={styles.title}>Product {this.props.match.params.name}</p>
        <div className={styles.productCard}>
          <div className={styles.product}>
            {products ?
              <SingleProductContainer key={products.id} product={products}/>
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  match: PropTypes.object,
  products: PropTypes.array,
  fetchSingleProduct: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSingleProduct: (name) => dispatch(fetchSingleProduct(name)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Product,
  Container as ProductContainer,
};
