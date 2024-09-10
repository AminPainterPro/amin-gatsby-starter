import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { cn } from 'utils/shadcn-utils';

interface TextRevealProps {
  children: ReactNode;
  initialDelay?: number;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className = '', initialDelay = 0 }) => {
  if (typeof children !== 'string') {
    console.log(`💣Invalid children passed to TextReveal`);
    return null;
  }

  return (
    <>
      <span className='hidden sm:block'>{children}</span>
      <span className={cn('flex overflow-hidden pb-1 sm:hidden', className)}>
        {children.split('').map((character, idx) => (
          <motion.span
            key={idx}
            transition={{ duration: 0.6, delay: initialDelay + idx / 20 }}
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={cn('lowercase', {
              uppercase: children[idx - 1] === ' ' || !children[idx - 1],
            })}
          >
            {character === ' ' ? <>&nbsp;</> : character}
          </motion.span>
        ))}
      </span>
    </>
  );
};

interface SlideProps {
  children: ReactNode;
  delay?: number;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export const Slide: FC<SlideProps> = ({
  children,
  direction = 'top',
  delay = 0,
  className = '',
}) => {
  let initial, whileInView;

  switch (direction) {
    case 'top':
      initial = { opacity: 0, y: 50 };
      whileInView = { opacity: 1, y: 0 };
      break;

    case 'right':
      initial = { opacity: 0, x: 100 };
      whileInView = { opacity: 1, x: 0 };
      break;

    case 'left':
      initial = { opacity: 0, x: -100 };
      whileInView = { opacity: 1, x: 0 };
      break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ duration: 1, delay, type: 'spring' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
