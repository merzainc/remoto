import mergeClasses from '@/lib';
import { Input as HeadlessInput } from '@headlessui/react';
import { forwardRef } from 'react';

const dateTypes = ['date', 'datetime-local', 'month', 'time', 'week'];

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <span
      data-slot='control'
      className={mergeClasses([
        className,

        // Basic layout
        'relative block w-full',

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow-xs',

        // Focus ring
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-md after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500',

        // Disabled state
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-slate-950/5 before:has-[[data-disabled]]:shadow-none',

        // Invalid state
        'before:has-[[data-invalid]]:shadow-red-500/10',
      ])}
    >
      <HeadlessInput
        ref={ref}
        className={mergeClasses([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],

          // Basic layout
          'relative block w-full appearance-none rounded-md px-[calc(theme(spacing[3.5])-1px)] py-1.5 sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',

          // Typography
          'text-base text-slate-950 placeholder:text-slate-500 sm:text-sm',

          // Border
          'border border-slate-950/10 data-[hover]:border-slate-950/20',

          // Background color
          'bg-transparent',

          // Hide default focus styles
          'focus:outline-none',

          // Invalid state
          'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500',

          // Disabled state
          'data-[disabled]:border-slate-950/20',
        ])}
        {...props}
      />
    </span>
  );
});
