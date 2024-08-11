import React, { FC, ReactNode, useState } from 'react';
import { toast } from 'sonner';

import { Spinner } from 'shadcn/spinner';
import { Button } from 'shadcn/button';
import {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'shadcn/dialog';

interface ConfirmDialogProps {
  children: ReactNode;
  onConfirm: (() => void) | (() => Promise<any>);
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({ children, onConfirm }) => {
  const [isPerformingAction, setIsPerformingAction] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsPerformingAction(true);
      if (onConfirm.constructor.name === 'AsyncFunction') await onConfirm();
      else onConfirm();
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    } finally {
      setIsPerformingAction(false);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-md'>
        <DialogHeader className='text-left'>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>You will not be able to undo this action.</DialogDescription>
        </DialogHeader>

        <DialogFooter className='flex-row-reverse gap-3'>
          <Button className='min-w-24' onClick={handleConfirm}>
            {isPerformingAction ? <Spinner /> : 'Confirm'}
          </Button>

          <DialogClose asChild>
            <Button variant='outline' className='min-w-24'>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
