import mergeClasses from '@/lib';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { Link } from '../Base/Link';

function Item({
  label,
  description,
  Icon,
  rightSlot,
  href,
  disabled,
  destructive,
  onSelect,
  preventAutoClose,
  ...rest
}) {
  const textItem = (
    <DropdownMenu.Item
      aria-disabled={disabled}
      className={mergeClasses(
        'relative z-50 flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1',
        'hocus:bg-hover hover:outline-0',
        disabled && 'cursor-default opacity-60 hocus:bg-white'
      )}
      onSelect={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        if (preventAutoClose) {
          event.preventDefault();
        } else {
          document.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape' })
          );
        }
        onSelect?.(event);
      }}
      {...rest}
    >
      <div className='flex flex-1 flex-col gap-0.5'>
        <div
          className={mergeClasses(
            'flex items-center justify-between',
            disabled && 'pointer-events-none'
          )}
        >
          <div className='flex items-center gap-2'>
            {Icon && (
              <Icon
                className={mergeClasses(
                  'icon-sm',
                  destructive && 'text-red-500'
                )}
              />
            )}
            <p className='bg-white text-xs'>{label}</p>
          </div>
          {typeof rightSlot === 'string' ? (
            <p theme='secondary'>{rightSlot}</p>
          ) : (
            rightSlot
          )}
        </div>
        {description && typeof description === 'string' ? (
          <p className='!leading-[18px] prose prose-slate text-sm'>
            {description}
          </p>
        ) : null}
        {description && typeof description !== 'string' ? description : null}
      </div>
    </DropdownMenu.Item>
  );

  if (href) {
    return <Link href={href}>{textItem}</Link>;
  } else {
    return textItem;
  }
}

export { Item };
