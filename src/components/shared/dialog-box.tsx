'use client';

import React, { memo } from 'react';

import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export interface DialogBoxProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: React.ReactNode | string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  hideCloseBtn?: boolean;
  preventClose?: boolean;
  className?: string;
}

const DialogBox = memo(function DialogBox({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  hideCloseBtn,
  preventClose,
  className,
}: DialogBoxProps) {

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange?.(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        aria-describedby={description ? undefined : "dialog-description"}
        className={cn(hideCloseBtn && "[&>button.absolute]:hidden", "p-4.5 rounded-md", className)}
        onInteractOutside={(e) => { if (preventClose) e.preventDefault(); }}
        onEscapeKeyDown={(e) => { if (preventClose) e.preventDefault(); }}
      >
        <DialogHeader className='gap-1'>
          <DialogTitle>{title}</DialogTitle>
          {description && (<DialogDescription className='text-xs'>{description}</DialogDescription>)}
        </DialogHeader>

        {children}

        {footer && <DialogFooter>{footer}</DialogFooter>}

        {/* Fallback description for screen readers if no visible description is passed */}
        {!description && (
          <span id="dialog-description" className="sr-only">{title} dialog</span>
        )}
      </DialogContent>
    </Dialog>
  );
});

export default DialogBox;