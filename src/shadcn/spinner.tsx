import React, { FC } from 'react';

import { Icon } from './icon';
import { cn } from 'utils/shadcn-utils';

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className }) => (
  <Icon name='Loader2' className={cn('animate-spin', className)} />
);

export { Spinner };
