import React from 'react';

import classnames from 'classnames';

import { RatingProps } from './Rating.props';
import StarSvg from './assets/star.svg';

import styles from './Rating.module.scss';

export const Rating: React.FC<RatingProps> = ({ isEditable = false, rating, setRating, className, ...props }) => {
  const [ratingArray, setRatingArray] = React.useState<React.ReactElement[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (hoverStar: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(hoverStar);
  };

  const handleClickStar = (selectedStar: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(selectedStar);
  };

  const handleSpacePress = (event: React.KeyboardEvent<SVGElement>, selectedStar: number) => {
    if (!isEditable || !setRating || event.code !== 'Space') {
      return;
    }

    setRating(selectedStar);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((_: React.ReactElement, index: number) => {
      const iterableStar = index + 1;

      return (
        <span
          className={classnames(styles.star, styles.emptyStar, {
            [styles.filledStar]: iterableStar <= currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(iterableStar)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClickStar(iterableStar)}
        >
          <StarSvg tabIndex={isEditable ? 0 : -1} onKeyDown={event => handleSpacePress(event, iterableStar)} />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div className={classnames(className)} {...props}>
      {ratingArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
