'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
import { FiCheck } from 'react-icons/fi';
import { GoCircle } from 'react-icons/go';

import { mergeClasses } from '@expo/styleguide';
import React from 'react';

// [NOTE @ralph]: Radix Jest ESM issue workaround: https://github.com/radix-ui/primitives/issues/1848
let sanitizedRadixDropdownMenu = { default: undefined, ...DropdownMenu };
sanitizedRadixDropdownMenu =
  sanitizedRadixDropdownMenu.default ?? sanitizedRadixDropdownMenu;
const { Trigger, Root, Portal, Content, Arrow } = sanitizedRadixDropdownMenu;

type Props = DropdownMenu.DropdownMenuContentProps & {
  trigger: ReactNode;
};

export function Dropdown({ children, trigger }: Props) {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>{children}</Portal>
    </Root>
  );
}

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(
  (
    {
      className,
      children,
      side = 'bottom',
      sideOffset = 0,
      collisionPadding = { left: 16, right: 16 },
      ...rest
    },
    ref
  ) => (
    <DropdownMenu.Content
      side={side}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      ref={ref}
      className={mergeClasses(
        'z-50 flex min-w-[180px] flex-col gap-0.5 rounded-md border border-default bg-default p-1 shadow-md',
        'data-[side=bottom]:animate-slideUpAndFadeIn will-change-[opacity,transform]',
        className
      )}
      {...rest}
    >
      <Arrow asChild>
        <div className='relative -top-1 size-2.5 rotate-45 border-b border-r border-default bg-default' />
      </Arrow>
      {children}
    </DropdownMenu.Content>
  )
);

DropdownMenuContent.displayName = DropdownMenu.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={mergeClasses(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-default outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hocus:bg-hover hocus:text-[#0F172A]',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenu.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenu.CheckboxItem
    ref={ref}
    className={mergeClasses(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-slate-700 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hocus:bg-hover hocus:text-[#0F172A]',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <DropdownMenu.ItemIndicator>
        <FiCheck className='size-4' />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenu.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenu.RadioItem
    ref={ref}
    className={mergeClasses(
      'prose relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-slate-700 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hocus:bg-hover hocus:text-[#0F172A]',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <DropdownMenu.ItemIndicator>
        <GoCircle className='size-2 fill-current' />
      </DropdownMenu.ItemIndicator>
    </span>
    {children}
  </DropdownMenu.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenu.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenu.Label
    ref={ref}
    className={mergeClasses(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

DropdownMenuLabel.displayName = DropdownMenu.Label.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={mergeClasses(
        'ml-auto text-2xs tracking-widest opacity-60',
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Separator
    ref={ref}
    className={mergeClasses('-mx-1 my-1 h-px bg-[#F1F5F9]', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenu.Separator.displayName;

export {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
};
