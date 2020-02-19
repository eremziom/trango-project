import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Component = ({photo, header, text, promo, short}) => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          image={photo}
          title={header}
          className={styles.image}
        >
          <div className={styles.showPromo}>{promo}</div>
          <div className={styles.promoBackground}></div>
          <div className={styles.promoDescription}>{short}</div>
        </CardMedia>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={styles.text}>
            {header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={styles.text}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Check rules
        </Button>
      </CardActions>
    </Card>
  );
};

Component.propTypes = {
  text: PropTypes.string,
  photo: PropTypes.string,
  header: PropTypes.string,
  promo: PropTypes.string,
  short: PropTypes.string,
};

export {
  Component as Promo,
  //Container as PromoContainer,
};
