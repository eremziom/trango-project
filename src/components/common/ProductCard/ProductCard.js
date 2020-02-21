import React from 'react';
import styles from './ProductCard.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const Component = ({photo, name, short}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <CardActionArea component={Link} exact to={`${process.env.PUBLIC_URL}/products/${name}`}>
          <CardMedia
            image={photo}
            title={name}
            className={styles.image}
          >
          </CardMedia>
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" className={styles.text}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={styles.text}>
              {short}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
      <CardActions className={styles.wishlist}>
        <Button size="small" color="primary">
          Wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

Component.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  short: PropTypes.string,
};

export {
  Component as ProductCard,
  //Container as ProductCardContainer,
};
