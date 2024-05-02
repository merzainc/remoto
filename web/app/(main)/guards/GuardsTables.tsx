//@ts-nocheck
'use client';

import { useToast } from '@/components/toast/use-toast';
import { formatDate } from '@/lib';
import { Guard } from '@prisma/client';
import axios from 'axios';

export function GuardsTables({ guards }: { guards: Guard[] }) {
  const { toast } = useToast();
  return (
    <div className='mt-8 flow-root'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-zinc-300'>
              <thead className='bg-zinc-50'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-900 sm:pl-6'
                  >
                    Force ID
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                  >
                    Phone
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                  >
                    Created At
                  </th>

                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-zinc-200 bg-white'>
                {guards === [] && (
                  <tr>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500 text-center'>
                      No guards were found
                    </td>
                  </tr>
                )}
                {guards.map((guard) => (
                  <tr key={guard.force}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-900 sm:pl-6'>
                      {guard.force}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                      {guard.name}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                      {guard.phone}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                      {formatDate(guard.createdAt)}
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                      <button
                        onClick={() => {
                          axios
                            .delete(`http://localhost:3000/api/guards/${guard.force}`)
                            .then((res) => {
                              if (res.status === 200)
                                toast({
                                  title: 'Manage Guards',
                                  description: res.data.message,
                                });
                              window.location.href = '/guards';
                            })
                            .catch((err) =>
                              toast({
                                variant: 'destructive',
                                title: 'Guard Registration',
                                //@ts-ignore
                                description: err.response?.data.message,
                              })
                            );
                        }}
                        className='text-red-500 hover:text-red-400'
                      >
                        Remove<span className='sr-only'>, {guard.force}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
