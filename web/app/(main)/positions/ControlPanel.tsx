import Link from 'next/link';
import * as React from 'react';

function ControlPanel() {
  return (
    <div className='control-panel'>
      <h3>Location Updates</h3>
      <p>
        View current locations of your organization&apos;s security teams on shift in real-time.
      </p>
      <div className='links'>
        <Link href='/settings'>Update Settings ↗</Link>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
