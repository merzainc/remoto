'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Monday',
    total: Math.floor(Math.random() * 50) + 100,
  },
  {
    name: 'Tues',
    total: Math.floor(Math.random() * 50) + 100,
  },
  {
    name: 'Wedn',
    total: Math.floor(Math.random() * 50) + 100,
  },
  {
    name: 'Thursday',
    total: Math.floor(Math.random() * 50) + 100,
  },
  {
    name: 'Friday',
    total: Math.floor(Math.random() * 50) + 100,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis dataKey='name' stroke='#888888' fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} KM`}
        />
        <Bar dataKey='total' fill='currentColor' radius={[4, 4, 0, 0]} className='fill-primary' />
      </BarChart>
    </ResponsiveContainer>
  );
}
