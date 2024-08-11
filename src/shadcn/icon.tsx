import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number | string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = '1.5rem', ...rest }) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<Pick<IconProps, 'color' | 'size'>>;

  if (!IconComponent) throw new Error(`Lucide icon "${name}" not found`);

  return <IconComponent size={size} {...rest} />;
};

export { Icon };
