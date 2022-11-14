import { SVGProps } from 'react';

type IconProps = JSX.IntrinsicAttributes &
  SVGProps<SVGSVGElement> & {
    size?: number;
  };

export const Back = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    </svg>
  );
};

export const Close = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      color="#787878"
      size="30"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'rgb(120, 120, 120)' }}
      {...props}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

export const Right = ({ size = 16, color = '#787878' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.997 7.942a.443.443 0 00-.108-.235L6.703 4.15a.386.386 0 00-.39-.141.41.41 0 00-.299.304.447.447 0 00.112.424L9.051 8l-2.925 3.262a.45.45 0 00-.112.424c.04.153.154.27.299.304a.384.384 0 00.39-.141l3.186-3.556a.446.446 0 00.108-.35z"
      ></path>
    </svg>
  );
};

export const LeftOutline = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      // size="30"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    </svg>
  );
};
