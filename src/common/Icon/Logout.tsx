import * as React from 'react';
import { FC } from 'react';

interface IconProps {
  color?: string;
  className?: string;
}
export const IconLogout: FC<IconProps> = ({ color = '#fff', ...props }) => (
  <svg width={20} height={20} xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
    {' '}
    <g clipPath='url(#a)'>
      {' '}
      <path
        d='M3.333 15H5v1.667h10V3.333H5V5H3.333V2.5a.833.833 0 0 1 .834-.833h11.666a.833.833 0 0 1 .834.833v15a.833.833 0 0 1-.834.833H4.167a.833.833 0 0 1-.834-.833V15ZM5 9.167h5.833v1.666H5v2.5L.833 10 5 6.667v2.5Z'
        fill={color}
      />{' '}
    </g>{' '}
    <defs>
      {' '}
      <clipPath id='a'>
        {' '}
        <path fill={color} d='M0 0h20v20H0z' />{' '}
      </clipPath>{' '}
    </defs>{' '}
  </svg>
);
