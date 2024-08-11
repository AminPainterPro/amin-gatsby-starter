import React, { FC } from 'react';

import { Icon } from './icon';
import { cn } from 'utils/shadcn-utils';

interface StepperProps {
  className?: string;
  step: number;
  steps: Array<{
    title?: string;
    icon?: string;
  }>;
}

const Stepper: FC<StepperProps> = ({ steps, step: currentStep, className = '' }) => (
  <div className={cn('flex items-center', className)}>
    {steps.map((step, idx) => (
      <React.Fragment key={idx}>
        <div className='relative'>
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-primary-darker',
              { 'bg-primary text-white': idx <= currentStep },
            )}
          >
            {step.icon ? <Icon name={step.icon as any} /> : idx + 1}
          </div>
          <span className='absolute left-1/2 w-max -translate-x-1/2 text-center capitalize text-primary-darker dark:text-primary-lightest'>
            {step.title}
          </span>
        </div>

        {idx !== steps.length - 1 && (
          <div
            className={cn('h-1 flex-1 bg-slate-200', { 'bg-primary': idx <= currentStep })}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default Stepper;
