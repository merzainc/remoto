import mergeClasses from '@/lib';
import {
  Description as HeadlessDescription,
  Field as HeadlessField,
  Fieldset as HeadlessFieldset,
  Label as HeadlessLabel,
  Legend as HeadlessLegend,
} from '@headlessui/react';

export function FieldSet({ className, ...props }) {
  return (
    <HeadlessFieldset
      {...props}
      className={mergeClasses(
        className,
        '[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1'
      )}
    />
  );
}

export function Legend({ ...props }) {
  return (
    <HeadlessLegend
      {...props}
      data-slot='legend'
      className={mergeClasses(
        props.className,
        'text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6'
      )}
    />
  );
}

export function FieldGroup({ className, ...props }) {
  return (
    <div
      {...props}
      data-slot='control'
      className={mergeClasses(className, 'space-y-8')}
    />
  );
}

export function Field({ className, ...props }) {
  return (
    <HeadlessField
      className={mergeClasses(
        className,
        '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '[&>[data-slot=label]]:font-medium'
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }) {
  return (
    <HeadlessLabel
      {...props}
      data-slot='label'
      className={mergeClasses(
        className,
        'select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6'
      )}
    />
  );
}

export function Description({ className, disabled, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      data-slot='description'
      className={mergeClasses(
        className,
        'text-base/6 text-zinc-500 data-[disabled]:opacity-50 sm:text-sm/6'
      )}
    />
  );
}

export function ErrorMessage({ className, disabled, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      data-slot='error'
      className={mergeClasses(
        className,
        'text-base/6 text-red-600 data-[disabled]:opacity-50 sm:text-sm/6'
      )}
    />
  );
}
