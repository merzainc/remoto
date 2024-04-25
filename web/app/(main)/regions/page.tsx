import { Button } from '@/components';
import { MarkerPin04Icon, PlusIcon } from '@expo/styleguide-icons';

export default function RegionsPage() {
  return (
    <>
      <div className='flex items-center justify-between gap-3 max-md-gutters:flex-col max-md-gutters:items-start'>
        <div className='grid grid-cols-1 gap-2'>
          <div className='flex items-center gap-3'>
            <MarkerPin04Icon className='text-icon-default icon-xl shrink-0' />
            <h1 className='text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] truncate'>
              Geofences
            </h1>
          </div>
          <p className='font-normal text-[15px] leading-[1.5715] tracking-[-0.006rem] text-secondary'>
            View all of the geofences associated with your account.
          </p>
        </div>
        <div className='justify-self-end'>
          <Button
            leftSlot={<PlusIcon className='icon-sm text-button-primary-icon' />}
          >
            Add New Zone
          </Button>
        </div>
      </div>
    </>
  );
}
