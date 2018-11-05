import { Children } from 'react';

const findActiveIndex = (components: React.ReactNode): number => {
  const activeIndex = Children.map(
    components,
    (component: React.ReactNode) => component.props.active
  ).indexOf(true);

  if (activeIndex === -1) {
    return 0;
  }
  return activeIndex;
};

export default findActiveIndex;
