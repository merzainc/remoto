import { Input } from '@/components/ui/Form';
import { Button } from '@/components/';

export default function LoginPage() {
  return (
    <div className='min-h-dvh bg-screen'>
      <div className='mx-auto w-full max-w-[688px] px-6 max-sm-gutters:p-0 pt-28 max-md-gutters:pt-16 max-sm-gutters:pt-12'>
        <h1 className='text-default text-center text-[25px] leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] mb-6 flex items-center justify-between gap-3 font-bold max-sm-gutters:mx-6'>
          Log in to Remoto
        </h1>
        <div className='border border-secondary bg-default rounded-lg shadow-sm max-sm-gutters:rounded-none max-sm-gutters:border-x-0 max-sm-gutters:shadow-none'>
          <div className='p-6'>
            <form
              action='/form-error'
              method='post'
              className='flex flex-col rounded-lg shadow-none gap-4'
            >
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <label className='mb-2 block' htmlFor='username'>
                    <div className='flex items-center'>
                      <span className='text-default font-medium text-[15px] leading-[1.6] tracking-[-0.009rem]'>
                        Email or username
                      </span>
                    </div>
                  </label>
                </div>
                <div className='flex [&>*:not(:last-child)]:mr-4 [&>*]:mb-0'>
                  <div className='relative flex flex-1 flex-col-reverse'>
                    <Input />
                  </div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <label className='mb-2 block' htmlFor='password'>
                    <div className='flex items-center'>
                      <span className='text-default font-medium text-[15px] leading-[1.6] tracking-[-0.009rem]'>
                        Password
                      </span>
                    </div>
                  </label>
                  <span className='text-default font-medium text-[15px] leading-[1.6] tracking-[-0.009rem] mb-2'>
                    <a
                      className='text-link transition-opacity hocus:opacity-80'
                      tabIndex={2}
                      href='/reset-password'
                    >
                      Forgot password?
                    </a>
                  </span>
                </div>
                <div className='flex [&>*:not(:last-child)]:mr-4 [&>*]:mb-0'>
                  <div className='relative w-full'>
                    <div className='relative flex flex-1 flex-col-reverse'>
                      <Input type='password' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative mt-2 flex'>
                <button
                  className='cursor-pointer inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-11 px-6 text-base border-button-primary bg-button-primary text-button-primary shadow-xs hocus:bg-button-primary-hover active:scale-98 w-full justify-center'
                  type='submit'
                >
                  <span className='flex self-center text-inherit leading-none'>
                    Log In
                  </span>
                </button>
              </div>
              <p className='text-default font-normal text-[13px] leading-[1.6154] tracking-[-0.003rem] relative -mx-6 text-center'>
                <span className='absolute left-0 top-[50%] h-[1px] w-full bg-palette-gray6' />
                <span className='relative z-10 bg-default px-2'>or</span>
              </p>
              <a
                className='inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-11 px-6 text-base border-button-secondary bg-button-secondary text-button-secondary shadow-xs hocus:bg-button-secondary-hover active:scale-98 justify-center'
                type='button'
                href='/sso-login'
              >
                <span className='flex self-center text-inherit leading-none select-none'>
                  Continue with SSO
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='icon-md text-button-secondary-icon'
                  role='img'
                >
                  <g id='arrow-right-outline-icon'>
                    <path
                      id='Icon'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12H19M19 12L12 5M19 12L12 19'
                    />
                  </g>
                </svg>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
