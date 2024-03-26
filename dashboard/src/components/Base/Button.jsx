import { Button as HeadlessButton } from '@headlessui/react';
import { clsx } from 'clsx';
import React from 'react';
import { Link } from './Link';

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center h-9 justify-center gap-x-2 rounded-md border font-semibold',

    // Sizing
    'px-3 text-sm',

    // Focus
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',

    // Disabled
    'data-[disabled]:opacity-50',

    // Icon
    '[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    'border-transparent bg-[--btn-border]',

    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]',

    // Drop shadow, applied to the inset `before` layer so it blends with the border
    'before:shadow',

    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]',

    // Inner highlight shadow
    'after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',

    // White overlay on hover
    'after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay]',

    // Disabled
    'before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none',
  ],
  outline: [
    // Base
    'border-slate-950/10 text-slate-950 data-[active]:bg-slate-950/[2.5%] data-[hover]:bg-slate-950/[2.5%]',

    // Icon
    '[--btn-icon:theme(colors.slate.500)] data-[active]:[--btn-icon:theme(colors.slate.700)] data-[hover]:[--btn-icon:theme(colors.slate.700)]',
  ],
  plain: [
    // Base
    'border-transparent text-slate-950 data-[active]:bg-slate-950/5 data-[hover]:bg-slate-950/5',

    // Icon
    '[--btn-icon:theme(colors.slate.500)] data-[active]:[--btn-icon:theme(colors.slate.700)] data-[hover]:[--btn-icon:theme(colors.slate.700)]',
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:theme(colors.slate.900)] [--btn-border:theme(colors.slate.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      '[--btn-icon:theme(colors.slate.400)] data-[active]:[--btn-icon:theme(colors.slate.300)] data-[hover]:[--btn-icon:theme(colors.slate.300)]',
    ],
    light: [
      'text-slate-950 [--btn-bg:white] [--btn-border:theme(colors.slate.950/10%)] [--btn-hover-overlay:theme(colors.slate.950/2.5%)] data-[active]:[--btn-border:theme(colors.slate.950/15%)] data-[hover]:[--btn-border:theme(colors.slate.950/15%)]',
      '[--btn-icon:theme(colors.slate.500)] data-[active]:[--btn-icon:theme(colors.slate.700)] data-[hover]:[--btn-icon:theme(colors.slate.700)] dark:[--btn-icon:theme(colors.slate.500)] dark:data-[active]:[--btn-icon:theme(colors.slate.400)] dark:data-[hover]:[--btn-icon:theme(colors.slate.400)]',
    ],
    'dark/white': [
      'text-white [--btn-bg:theme(colors.slate.900)] [--btn-border:theme(colors.slate.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      '[--btn-icon:theme(colors.slate.400)] data-[active]:[--btn-icon:theme(colors.slate.300)] data-[hover]:[--btn-icon:theme(colors.slate.300)] dark:[--btn-icon:theme(colors.slate.500)] dark:data-[active]:[--btn-icon:theme(colors.slate.400)] dark:data-[hover]:[--btn-icon:theme(colors.slate.400)]',
    ],
    dark: [
      'text-white [--btn-bg:theme(colors.slate.900)] [--btn-border:theme(colors.slate.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]',
      '[--btn-icon:theme(colors.slate.400)] data-[active]:[--btn-icon:theme(colors.slate.300)] data-[hover]:[--btn-icon:theme(colors.slate.300)]',
    ],
    white: [
      'text-slate-950 [--btn-bg:white] [--btn-border:theme(colors.slate.950/10%)] [--btn-hover-overlay:theme(colors.slate.950/2.5%)] data-[active]:[--btn-border:theme(colors.slate.950/15%)] data-[hover]:[--btn-border:theme(colors.slate.950/15%)]',
      '[--btn-icon:theme(colors.slate.400)] data-[active]:[--btn-icon:theme(colors.slate.500)] data-[hover]:[--btn-icon:theme(colors.slate.500)]',
    ],
    zinc: [
      'text-white [--btn-hover-overlay:theme(colors.white/10%)] [--btn-bg:theme(colors.slate.600)] [--btn-border:theme(colors.slate.700/90%)]',
      '[--btn-icon:theme(colors.slate.400)] data-[active]:[--btn-icon:theme(colors.slate.300)] data-[hover]:[--btn-icon:theme(colors.slate.300)]',
    ],
    red: [
      'text-white [--btn-hover-overlay:theme(colors.white/10%)] [--btn-bg:theme(colors.red.600)] [--btn-border:theme(colors.red.700/90%)]',
      '[--btn-icon:theme(colors.red.300)] data-[active]:[--btn-icon:theme(colors.red.200)] data-[hover]:[--btn-icon:theme(colors.red.200)]',
    ],
    yellow: [
      'text-yellow-950 [--btn-hover-overlay:theme(colors.white/25%)] [--btn-bg:theme(colors.yellow.300)] [--btn-border:theme(colors.yellow.400/80%)]',
      '[--btn-icon:theme(colors.yellow.600)] data-[active]:[--btn-icon:theme(colors.yellow.700)] data-[hover]:[--btn-icon:theme(colors.yellow.700)]',
    ],
    sky: [
      'text-white [--btn-hover-overlay:theme(colors.white/10%)] [--btn-bg:theme(colors.sky.500)] [--btn-border:theme(colors.sky.600/80%)]',
      '[--btn-icon:theme(colors.white/60%)] data-[active]:[--btn-icon:theme(colors.white/80%)] data-[hover]:[--btn-icon:theme(colors.white/80%)]',
    ],
    blue: [
      'text-white [--btn-hover-overlay:theme(colors.white/10%)] [--btn-bg:theme(colors.blue.600)] [--btn-border:theme(colors.blue.700/90%)]',
      '[--btn-icon:theme(colors.blue.400)] data-[active]:[--btn-icon:theme(colors.blue.300)] data-[hover]:[--btn-icon:theme(colors.blue.300)]',
    ],
  },
};

export const Button = React.forwardRef(function Button(
  { color, outline, plain, className, children, ...props },
  ref
) {
  let classes = clsx(
    className,
    styles.base,
    outline
      ? styles.outline
      : plain
      ? styles.plain
      : clsx(styles.solid, styles.colors[color ?? 'zinc'])
  );

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <HeadlessButton
      {...props}
      className={clsx(classes, 'cursor-default')}
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </HeadlessButton>
  );
});

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({ children }) {
  return (
    <>
      {children}
      <span
        className='absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden'
        aria-hidden='true'
      />
    </>
  );
}
