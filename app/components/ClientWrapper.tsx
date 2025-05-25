'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Lefty from './Lefty';
import Righty from './Righty';


interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <div className='flex flex-col bg-black'>
        
        <div className='hidden md:block'> <Lefty/></div>
        {children}
        <div className='hidden md:block'> <Righty/></div>
      
      </div>
     
    </>
  );
} 