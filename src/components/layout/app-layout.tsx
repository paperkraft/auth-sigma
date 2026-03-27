"use client";

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { Header } from '@/components/layout/app-header';
import { cn } from '@/lib/utils';

export default function AppLayout({ children, className }: { children: ReactNode, className?: string }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="w-full flex flex-col font-sans">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="flex flex-1">
        <main className={cn(
          "flex-1 min-w-0 overflow-x-hidden bg-slate-50 dark:bg-background text-foreground transition-colors duration-300",
          isHomePage && "max-w-7xl mx-auto w-full",
          className
        )}>{children}</main>
      </div>
    </div>
  );
}
