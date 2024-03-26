import mergeClasses from '@/lib';
import { Disclosure } from '@headlessui/react';
import { LuChevronRightSquare } from 'react-icons/lu';

import {
  DocumentChartBarIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Dashboard', href: '/', current: true, icon: HomeIcon },
  {
    name: 'Patrols',
    current: false,
    children: [
      { name: 'Engineering', href: '/progress' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Monitoring',
    current: false,
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { name: 'Guards', href: '#', current: false, icon: UserGroupIcon },
  { name: 'Reports', href: '#', current: false, icon: DocumentChartBarIcon },
];

export default function SideBar(props) {
  const router = useRouter();
  return (
    <div className='flex w-full grow flex-col gap-y-5 overflow-y-auto pt-10 bg-default px-6'>
      <nav className='flex flex-1 flex-col w-full'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={mergeClasses(
                        router.pathname.startsWith(item.href)
                          ? 'bg-slate-100  text-sky-600'
                          : 'hover:bg-slate-50 text-slate-700',
                        'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold '
                      )}
                    >
                      <item.icon
                        className={mergeClasses(
                          router.pathname.startsWith(item.href)
                            ? 'bg-slate-100  text-sky-600'
                            : 'hover:bg-slate-50 text-slate-700',
                          'icon-md'
                        )}
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={mergeClasses(
                              item.current
                                ? 'bg-slate-50'
                                : 'hover:bg-slate-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-slate-700'
                            )}
                          >
                            <LuChevronRightSquare
                              className={mergeClasses(
                                open
                                  ? 'rotate-90  text-slate-500'
                                  : 'text-slate-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden='true'
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as='ul' className='mt-1 px-2'>
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as='a'
                                  href={subItem.href}
                                  className={mergeClasses(
                                    router.pathname.startsWith(item.href)
                                      ? 'bg-slate-50'
                                      : 'hover:bg-slate-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-slate-700'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
