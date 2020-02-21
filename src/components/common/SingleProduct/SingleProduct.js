import React from 'react';
import styles from './SingleProduct.module.scss';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';

class Component extends React.Component {

  state = {
    product: {
      name: '',
      color: '',
      paint: '',
      graver: '',
      length: '',
      wish: '',
    },
  }

  componentDidMount = () => {
    const { product } = this.state;
    const productName = this.props.product.name;
    let ropeLength = '';
    if(this.props.product.category === 'rope'){
      ropeLength = 40;
    }
    if(this.props.product){
      this.setState({product: {...product, name: productName, length: ropeLength}});
    }

  }

  updateOrder = ({target}) => {
    const { product } = this.state;
    const { value, name } = target;
    this.setState({product: {...product, [name]: value}});
  }

  updateRopeLength = (event, value) => {
    const { product } = this.state;
    this.setState({product: {...product, length: value}});
  };

  showState = () => {
    console.log('hej', this.state);
  }

  showOptions = (product) => {
    const optionsArray = [];
    for(let opt in product.option){
      let element = `${opt}: ${product.option[opt]}`;
      optionsArray.push(element);
    }
    return (
      <div>
        {!optionsArray ? '' : optionsArray.map(opti => {
          return (
            <Typography key={opti} variant="body2" color="textSecondary" component="p" className={styles.text}>
              {opti}
            </Typography>
          );
        })}
      </div>
    );
  };


  render(){
    const {product} = this.props;
    const {updateOrder} = this;

    const marks = [
      {
        value: 20,
        label: '20m',
      },
      {
        value: 30,
        label: '30m',
      },
      {
        value: 40,
        label: '40m',
      },
      {
        value: 50,
        label: '50m',
      },
      {
        value: 60,
        label: '60m',
      },
      {
        value: 70,
        label: '70m',
      },
      {
        value: 80,
        label: '80m',
      },
    ];

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

              {this.showOptions(product)}

              <Typography variant="h4" color="textSecondary" component="h4" className={styles.text}>
                Price: {product.price}
              </Typography>
            </div>
          </CardContent>
          <CardContent className={styles.cardCustom}>
            <div>
              <Typography gutterBottom variant="h5" component="h2" className={styles.text}>
                Customization
              </Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Color</FormLabel>
                <RadioGroup aria-label="color" name="color" onChange={updateOrder}>
                  <FormControlLabel value="red" control={<Radio />} label="Red" />
                  <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
                  <FormControlLabel value="pink" control={<Radio />} label="Pink" />
                  <FormControlLabel value="cyan" control={<Radio />} label="Cyan" />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Paint</FormLabel>
                <RadioGroup aria-label="paint" name="paint" onChange={updateOrder}>
                  <FormControlLabel value="mat" control={<Radio />} label="Mat" />
                  <FormControlLabel value="metalic" control={<Radio />} label="Metalic" />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Graver</FormLabel>
                <RadioGroup aria-label="graver" name="graver" onChange={updateOrder}>
                  <FormControlLabel value="none" control={<Radio />} label="None" />
                  <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                  <FormControlLabel value="special" control={<Radio />} label="Special" />
                </RadioGroup>
              </FormControl>
            </div>
            {product.category === 'rope' ?
              <div>
                <Typography id="discrete-slider" gutterBottom>
                Rope Length
                </Typography>
                <Slider
                  id='slider'
                  onChange={this.updateRopeLength}
                  defaultValue={40}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  min={20}
                  max={80}
                  marks={marks}
                />
              </div> : ''}
            <TextField id="standard-basic" label="Special wish?" className={styles.wishField}
              variant="filled"
              multiline
              rows="4"
              type="text"
              onChange={updateOrder}
              name="wish"
            />
          </CardContent>
        </div>
        <CardActions className={styles.buttons}>
          <Button size="small" color="primary" className={styles.addToCart} onClick={this.showState}>
            <AddShoppingCartIcon className={styles.cartIcon} /> ADD TO CART
          </Button>
          <Button size="small" color="primary" className={styles.addToCart}>
            <AddShoppingCartIcon className={styles.cartIcon} /> GO BACK
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
