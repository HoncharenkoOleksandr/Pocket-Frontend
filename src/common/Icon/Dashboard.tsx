import * as React from 'react';
import { FC } from 'react';

interface IconProps {
  color?: string;
}

export const IconDashboard: FC<IconProps> = ({ color = '#000' }) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.333 10.833h5A.834.834 0 0 0 9.167 10V3.333a.833.833 0 0 0-.834-.833h-5a.833.833 0 0 0-.833.833V10a.833.833 0 0 0 .833.833ZM2.5 16.667a.833.833 0 0 0 .833.833h5a.833.833 0 0 0 .834-.833v-3.334a.833.833 0 0 0-.834-.833h-5a.833.833 0 0 0-.833.833v3.334Zm8.333 0a.833.833 0 0 0 .834.833h5a.833.833 0 0 0 .833-.833v-5.834a.833.833 0 0 0-.833-.833h-5a.833.833 0 0 0-.834.833v5.834Zm.834-8.334h5A.833.833 0 0 0 17.5 7.5V3.333a.833.833 0 0 0-.833-.833h-5a.833.833 0 0 0-.834.833V7.5a.833.833 0 0 0 .834.833Z'
      fill={color}
    />
  </svg>
);
