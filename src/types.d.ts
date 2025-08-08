declare module '@splinetool/react-spline';
declare module '@splinetool/react-spline/next' {
  import { ComponentType } from 'react';

  export interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
  }

  const Spline: ComponentType<SplineProps>;

  export default Spline;
}