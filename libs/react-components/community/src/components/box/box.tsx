import cn from 'classnames';

import { Gutter, Spacer } from '../grid';
import styles from './box.module.scss';

type AlignContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch';

type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

type Element = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section';

type FlexDisplays = 'flex' | 'inline-flex';

type FlexDirections = 'column-reverse' | 'column' | 'row-reverse' | 'row';

type FlexWraps = 'nowrap' | 'wrap-reverse' | 'wrap';

type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

export interface BoxSpec extends React.HTMLAttributes<HTMLElement> {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignItems;
  children?: React.ReactNode;
  display?: FlexDisplays;
  element?: Element;
  flex?: string;
  flexBasis?: string;
  direction?: FlexDirections;
  flexGrow?: number;
  flexShrink?: number;
  wrap?: FlexWraps;
  justifyContent?: JustifyContent;
  order?: number;
  gutter?: Gutter;
  gap?: Spacer;
  width?: string;
}

const Box = (props: BoxSpec): JSX.Element => {
  const {
    alignContent,
    alignItems,
    alignSelf,
    children,
    display,
    element,
    flex,
    flexBasis,
    direction,
    flexGrow,
    flexShrink,
    wrap,
    justifyContent,
    order,
    width,
    gutter,
    gap,
    ...rest
  } = props;

  const BEM = cn(
    styles['box'],
    { [styles[`justify-content-${justifyContent}`]]: justifyContent },
    { [styles[`align-items-${alignItems}`]]: alignItems },
    { [styles[`gap-${gap}`]]: gap },
    { [styles[`gutter-${gutter}`]]: gutter },
    { [`flex-direction-${direction}`]: direction },
    { [styles[`flex-wrap-${wrap}`]]: wrap }
  );

  console.log(BEM);

  return (
    <div {...rest} className={BEM}>
      {children}
    </div>
  );
};

export default Box;
