import * as React from 'react';
import { FC } from 'react';

interface IconProps {
  color?: string;
  opacity?: number;
}
export const IconAccount: FC<IconProps> = ({ color = '#fff', opacity = 0.4 }) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.086 10.453a5.001 5.001 0 0 0 5.45-8.155 5 5 0 1 0-5.45 8.155Z'
      fill={color}
    />
    <path
      opacity={opacity}
      d='M16.666 18.333H3.333v-1.666A4.167 4.167 0 0 1 7.5 12.5h5a4.167 4.167 0 0 1 4.166 4.167v1.666Z'
      fill={color}
    />
  </svg>
);
