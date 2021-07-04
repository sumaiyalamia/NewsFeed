import React from 'react';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Craft Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <div style={{
              width: 'fit-content',
              align: 'left'
            }}>
              <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH" />}
              />
            </div>
            <div>
            </div>

          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;