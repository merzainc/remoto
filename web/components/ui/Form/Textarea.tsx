'use client';

import { mergeClasses } from '@expo/styleguide';
import { type InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, onChange, ...rest }: Props) {
  return (
    <div className='relative'>
      <textarea
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
        className={mergeClasses(
          'block shadow-xs border border-default rounded-sm text-default bg-default h-12 w-full my-2.5 p-4 leading-5 placeholder:text-icon-tertiary',
          className
        )}
        {...rest}
      />
    </div>
  );
}
