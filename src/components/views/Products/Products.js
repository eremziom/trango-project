import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import { CategoryButton } from '../../common/CategoryButton/CategoryButton';
import { ProductsListContainer } from '../ProductsList/ProductsList';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

class Component extends React.Component {
  state = {
    category: '',
    categories: [],
  };

  componentDidMount = () => {
    const {products} = this.props;
    this.prepareCategories(products);
  }

  prepareCategories = (products) => {
    const categoryArray = [];
    for(let product of products){
      if(!categoryArray.includes(product.category)){
        categoryArray.push(product.category);
      }
    }
    this.createButtonNames(categoryArray);
  }

  createButtonNames = (buttons) => {
    const buttonArray = [];
    for(let button of buttons){
      let buttonName = button.toUpperCase();
      buttonArray.push(buttonName);
    }
    this.setState({categories: buttonArray});
  }

  showCategoryProducts = () => {
    const activeCategory = this.state.category;
    return (
      <ProductsListContainer category={activeCategory} />
    );
  }

  setCategoryProducts = (category) => {
    this.setState({category: category});
  }

  handleChildClick = (category) => {
    this.setCategoryProducts(category);
  }

  render() {
    const {categories} = this.state;
    return (
      <div className={styles.background}>
        <h2 className={styles.title}>What are You looking for ?</h2>
        <div className={styles.categoryMenu}>
          {categories.map(item => {
            return(
              <CategoryButton key={item} onChildClick={this.handleChildClick} category={item}>{item}</CategoryButton>
            );
          })}
        </div>
        {this.showCategoryProducts()}
        <div className={styles.allButton}>
          {this.state.category ? <CategoryButton onChildClick={this.handleChildClick} category=''>ALL</CategoryButton> : ''}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  categories: PropTypes.array,
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
  Component as Products,
  Container as ProductsContainer,
};
