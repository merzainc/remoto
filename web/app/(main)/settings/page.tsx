import { Button } from '@/components';
import { Input } from '@/components/ui/Form';

function SettingsPage() {
  return (
    <div className='space-y-10 divide-y divide-default'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3'>
        <div className='px-4 sm:px-0'>
          <h2 className='text-base font-semibold leading-7 text-default'>
            Updates configuretions
          </h2>
          <p className='mt-1 text-sm leading-6 text-secondary'>
            Update below configurations according to your organization
            requirements
          </p>
        </div>

        <form className='bg-default shadow border border-default  sm:rounded-lg md:col-span-2'>
          <div className='px-4 py-6 sm:p-8'>
            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium leading-6 text-default'
                >
                  Distance filter
                </label>
                <div className='mt-2'>
                  <Input type='text' placeholder='In Meters' />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium leading-6 text-default'
                >
                  Time intervals
                </label>
                <div className='mt-2'>
                  <Input
                    type='text'
                    placeholder='Time between locations updates in minutes'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium leading-6 text-default'
                >
                  Geofence radius
                </label>
                <div className='mt-2'>
                  <Input type='text' placeholder='In Meters' />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium leading-6 text-default'
                >
                  Checkpoint verification distance
                </label>
                <div className='mt-2'>
                  <Input
                    type='text'
                    placeholder='Meters should a guard be able to verify checkpoint visit'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end gap-x-6 border-t border-secondary px-4 py-4 sm:px-8'>
            <Button theme='quaternary'>Cancel</Button>
            <Button>Save</Button>
          </div>
        </form>
      </div>

      <div className='grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3'>
        <div className='px-4 sm:px-0'>
          <h2 className='text-base font-semibold leading-7 text-default'>
            Notifications
          </h2>
          <p className='mt-1 text-sm leading-6 text-secondary'>
            We&apos;ll always let you know about important changes, but you pick
            what else you want to hear about.
          </p>
        </div>

        <form className='bg-default shadow border border-default sm:rounded-lg md:col-span-2'>
          <div className='px-4 py-6 sm:p-8'>
            <div className='max-w-2xl space-y-10'>
              <fieldset>
                <legend className='text-sm font-semibold leading-6 text-default'>
                  By Email
                </legend>
                <div className='mt-6 space-y-6'>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        className='h-4 w-4 rounded border-secondary text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='comments'
                        className='font-medium text-default'
                      >
                        Geofence
                      </label>
                      <p className='text-secondary'>
                        Get notified when a guard moves out of the defined
                        working zones.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='candidates'
                        name='candidates'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='candidates'
                        className='font-medium text-default'
                      >
                        Shift Reminders
                      </label>
                      <p className='text-secondary'>
                        Get notified when a security personal logs in for a
                        shift.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='offers'
                        name='offers'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='offers'
                        className='font-medium text-default'
                      >
                        Patrol Tasks
                      </label>
                      <p className='text-secondary'>
                        Get notified when a guard completes his/her assigned
                        patrol task.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className='text-sm font-semibold leading-6 text-default'>
                  Push Notifications
                </legend>
                <p className='mt-1 text-sm leading-6 text-secondary'>
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className='mt-6 space-y-6'>
                  <div className='flex items-center gap-x-3'>
                    <input
                      id='push-everything'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                    <label
                      htmlFor='push-everything'
                      className='block text-sm font-medium leading-6 text-default'
                    >
                      Everything
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <input
                      id='push-email'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                    <label
                      htmlFor='push-email'
                      className='block text-sm font-medium leading-6 text-default'
                    >
                      Same as email
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <input
                      id='push-nothing'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                    <label
                      htmlFor='push-nothing'
                      className='block text-sm font-medium leading-6 text-default'
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className='flex items-center justify-end gap-x-6 border-t border-secondary px-4 py-4 sm:px-8'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-default'
            >
              Cancel
            </button>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;
