import cn from 'classnames';
import React from 'react';

import { getBackgroundColorClass } from '../../../helpers/background-colors/background-colors';
import { TColorsBackground } from '../../commonTypes';
import styles from '../card.module.scss';
import { CardContext } from '../card-context';

export type CardContentPadding = 0 | 0.5 | 0.75 | 1 | 1.5;

export interface CardContentProps {
  /**
   * Card Content
   */
  children?: React.ReactNode;
  /**
   * Additional class.
   */
  className?: string;
  /**
   * Card content padding
   * String values of padding are deprecated, use numbers instead
   * @default Padding of Card
   */
  padding?: CardContentPadding;
  /**
   * Background color of card content
   * @default Background of Card
   */
  background?: TColorsBackground;
}

export const CardContent = (props: CardContentProps): JSX.Element => {
  const { padding: rootPadding, background: rootBackground } = React.useContext(CardContext);
  const { children, className, padding = rootPadding, background = rootBackground, ...rest } = props;
  const CardContentBEM = cn(styles['card__content'], { [getBackgroundColorClass(background)]: background }, className);

  const paddingValue = `${padding}rem`;

  return (
    <div
      data-name="card-content"
      data-padding={paddingValue}
      style={{
        '--card-content-padding': paddingValue,
      }}
      {...rest}
      className={CardContentBEM}
    >
      {children}
    </div>
  );
};

export default CardContent;
