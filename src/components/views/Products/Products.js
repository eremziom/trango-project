import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import { Category } from '../..//common/Category/Category';
import db from '../../../db';
import { ProductsList } from '../ProductsList/ProductsList';

class Component extends React.Component {
  state = {
    category: '',
    categories: [],
  };

  componentDidMount = () => {
    this.prepareCategories(db);
  }

  prepareCategories = (db) => {
    const categoryArray = [];
    for(let product of db.products){
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
      <ProductsList category={activeCategory} />
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
              <Category key={item} onChildClick={this.handleChildClick} category={item}>{item}</Category>
            );
          })}
        </div>
        {this.showCategoryProducts()}
      </div>
    );
  }
}

Component.propTypes = {
  categories: PropTypes.array,
};

export {
  Component as Products,
  //Container as ProductsContainer,
};
