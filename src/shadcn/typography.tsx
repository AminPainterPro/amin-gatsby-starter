import React, { FC } from 'react';
import { cn } from 'utils/shadcn-utils';

interface TypographyProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'subtitle';
}

export const Typography: FC<TypographyProps> = ({
  variant = 'secondary',
  className,
  children,
  ...rest
}) => {
  switch (variant) {
    case 'primary':
      return (
        <h1
          className={cn('text-5xl text-gray-800 capitalize leading-tight lg:text-3xl', className)}
          {...rest}>
          {children}
        </h1>
      );

    case 'secondary':
      return (
        <h2
          className={cn('text-3xl font-semibold capitalize text-gray-800 first:mt-0', className)}
          {...rest}>
          {children}
        </h2>
      );

    case 'tertiary':
      return (
        <h3 className={cn('text-xl font-semibold text-gray-800', className)} {...rest}>
          {children}
        </h3>
      );

    case 'subtitle':
      return (
        <h6 className={cn('font-medium text-gray-800', className)} {...rest}>
          {children}
        </h6>
      );

    default:
      return null;
  }
};
