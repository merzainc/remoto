import mergeClasses from '@/lib';
import { Link } from '../Base/Link';

export default function Text({ className, ...props }) {
  return (
    <p
      {...props}
      data-slot='text'
      className={mergeClasses(
        className,
        'prose prose-slate text-xs text-slate-500'
      )}
    />
  );
}

export function TextLink({ className, ...props }) {
  return (
    <Link
      {...props}
      className={mergeClasses(
        className,
        'text-slate-950 underline decoration-slate-950/50 data-[hover]:decoration-slate-950'
      )}
    />
  );
}

export function Strong({ className, ...props }) {
  return (
    <strong
      {...props}
      className={mergeClasses(className, 'font-medium text-slate-950')}
    />
  );
}
