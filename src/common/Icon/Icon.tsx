import React, { FC } from 'react';

import { IconAccount, IconDashboard, IconPocket, IconSettings } from '@common';

interface IconProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'Dashboard':
      return <IconDashboard />;
    case 'Accounts':
      return <IconAccount />;
    case 'Settings':
      return <IconSettings />;
    case 'Pocket':
      return <IconPocket />;
    default:
      return <span>No image found!</span>;
  }
};
