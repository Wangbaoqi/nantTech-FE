import { NavBar } from '@/components/layout';
import React from 'react';

interface LayoutProp {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: LayoutProp) {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='container mx-auto max-w-6xl flex-grow'>{children}</div>
    </div>
  );
}
