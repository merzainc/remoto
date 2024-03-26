import { Button } from '@/components/Base/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Base/Table';
import { Dropdown } from '@/components/Dropdown';
import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import { Title } from '@/components/Meta';
import Head from 'next/head';
import { Link } from '@/components/Base/Link';
const users = [
  {
    name: 'Tanatswa Chitongo',
    handle: 'abby',
    email: 'abby@hit.ac.zw',
    access: 'Member',
  },
  {
    name: 'Mataga Ralph',
    handle: 'ratcatcher',
    email: 'ralph@merza.com',
    access: 'Admin',
  },
];

export default function GuardsPage(props) {
  return (
    <>
      <Title>Manage Guards</Title>
      <Head></Head>
      <section>
        <div className='flex items-center'>
          <h1 className='inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200'>
            Manage Guards
          </h1>
        </div>
        <div className='pt-8 w-full'>
          <Table
            grid
            dense
            className='[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]'
          >
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Force Number</TableHeader>
                <TableHeader>Identification</TableHeader>
                <TableHeader className='relative w-0'>
                  <span className='sr-only'>Actions</span>
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.handle}>
                  <TableCell className='font-medium'>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className='text-slate-500'>
                    {user.access}
                  </TableCell>
                  <TableCell>
                    <div className='-mx-3 -my-1.5 sm:-mx-2.5'>
                      <Dropdown
                        trigger={
                          <Button plain>
                            <EllipsisHorizontalIcon />
                          </Button>
                        }
                      >
                        <div className='divide-y divide-gray-100'>
                          <Link
                            href='#'
                            className='group flex items-center px-1.5 py-1.5 text-xs text-slate-700 hover:text-slate-900 hover:bg-hover'
                          >
                            <PencilSquareIcon
                              className='mr-3 size-5 text-gray-400 group-hover:text-gray-500'
                              aria-hidden='true'
                            />
                            Edit
                          </Link>
                          <Link
                            href='#'
                            className='group flex items-center px-1.5 py-1.5 text-xs text-red-500 hover:text-red-500 hover:bg-hover'
                          >
                            <TrashIcon
                              className='mr-3 size-5 text-red-400 group-hover:text-red-500'
                              aria-hidden='true'
                            />
                            Delete
                          </Link>
                        </div>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
