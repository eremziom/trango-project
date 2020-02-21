import React from 'react';
import styles from './SingleProduct.module.scss';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {

  showOptions = (product) => {
    const optionsArray = [];
    for(let opt in product.option){
      console.log(opt, product.option[opt]);
      let element = `${opt}: ${product.option[opt]}`;
      optionsArray.push(element);
    }
    return (
      <p>
        {!optionsArray ? '' : optionsArray.map(opti => {
          return (
            <Typography key={opti} variant="body2" color="textSecondary" component="p" className={styles.text}>
              {opti}
            </Typography>
          );
        })}
      </p>
    );
  };


  render(){
    const {product} = this.props;
    return (
      <Card className={styles.card}>
        <div className={styles.container}>
          <CardMedia
            image={product.photo}
            title={product.name}
            className={styles.image}
          >
          </CardMedia>
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" className={styles.text}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={styles.text}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </Typography>
            <div>
              <Typography variant="h5" color="textSecondary" component="h6" className={styles.text}>
                Features:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.text}>
                Weight: {product.weight}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.text}>
                {this.showOptions(product)}
              </Typography>
              <Typography variant="h4" color="textSecondary" component="h4" className={styles.text}>
                Price: {product.price}
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardActions className={styles.wishlist}>
          <Button size="small" color="primary">
            Wishlist
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Component.propTypes = {
  product: PropTypes.object,
};

export {
  Component as SingleProduct,
  //Container as SingleProductContainer,
};
