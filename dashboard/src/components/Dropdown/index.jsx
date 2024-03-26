import mergeClasses from '@/lib';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { Item } from './Item';

//Radix Jest ESM issue workaround: https://github.com/radix-ui/primitives/issues/1848
let sanitizedRadixDropdownMenu = { default: undefined, ...DropdownMenu };
sanitizedRadixDropdownMenu =
  sanitizedRadixDropdownMenu.default ?? sanitizedRadixDropdownMenu;
const { Trigger, Root, Portal, Content, Arrow } = sanitizedRadixDropdownMenu;

function Dropdown({
  children,
  trigger,
  className,
  sideOffset = 0,
  collisionPadding = { left: 16, right: 16 },
  side = 'bottom',
  ...rest
}) {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal className='bg-danger'>
        <Content
          className={mergeClasses(
            'flex min-w-[130px] flex-col gap-0.5 rounded-md border border-default bg-white p-1 shadow-md',
            'will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFadeIn',
            className
          )}
          side={side}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          {...rest}
        >
          <Arrow asChild>
            <div className='relative -top-1 size-2.5 rotate-45 border-b border-r border-default bg-white' />
          </Arrow>
          {children}
        </Content>
      </Portal>
    </Root>
  );
}

export { Dropdown, Item };
