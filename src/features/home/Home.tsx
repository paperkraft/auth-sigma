"use client";

import { ArrowRight, Clock, FileText, GitFork, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { LayoutGrid } from 'lucide-react';

import { SERVICES } from '@/config/services';
import { ACTIVITY_FEED } from '@/config/dashboard_dummy';
import { useAuth } from '@/context/auth-provider';
import { cn } from '@/lib/utils';

import QuotaItem from './components/QuotaItem';
import { PageHeader } from '@/components/shared/page-header';

export default function Home() {

   const { user } = useAuth();

   return (
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-6 space-y-6 animate-in fade-in duration-500">

         {/* 1. HEADER */}
         <div className="border-b border-border pb-4">
            <h1 className="text-2xl font-bold text-foreground">Welcome back, {user?.firstName ?? user?.organisationName ?? "Partner"}</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Access your ecosystem modules and account overview below.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">

            {/* 2. LEFT COLUMN: MODULES */}
            <div className="lg:col-span-8 space-y-6">
               <div>
                  <div className="flex items-center gap-2 mb-6 h-7">
                     <LayoutGrid size={18} className="text-primary" />
                     <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available Modules</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {SERVICES.filter(s => s.id !== 'auth').map((service) => (
                        <div
                           key={service.id}
                           className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer h-full"
                           onClick={() => window.location.href = service.url}
                        >
                           <div className="flex items-center gap-4 mb-4">
                              <div className={cn(
                                 "flex items-center justify-center size-12 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:border-primary/20",
                              )}>
                                 <service.icon size={24} />
                              </div>
                              <div>
                                 <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                                    {service.name}
                                 </h3>
                                 <p className="text-[10px] font-medium text-emerald-600 dark:text-emerald-500 flex items-center gap-1 mt-0.5">
                                    <span className="size-1.5 rounded-full bg-emerald-500" /> Operational
                                 </p>
                              </div>
                           </div>

                           <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 grow line-clamp-2">
                              {service.description}
                           </p>

                           <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800 mt-auto">
                              <div className="flex -space-x-2">
                                 {[1, 2, 3].map((i) => (
                                    <div key={i} className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800" />
                                 ))}
                              </div>
                              <span className="text-[11px] font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                 Launch Module <ArrowRight size={14} />
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 3. RIGHT COLUMN: WIDGETS */}
            <div className="lg:col-span-4 space-y-6">
               <div className="flex items-center gap-2 mb-6 h-7">
                  <Clock size={18} className="text-primary/60" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Workspace Stats</h2>
               </div>

               {/* Usage Widget */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                     <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Usage Overview</h3>
                     <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">PRO PLAN</span>
                  </div>

                  <div className="space-y-5">
                     <QuotaItem
                        icon={<GitFork size={14} />}
                        label="Auth Events"
                        used={450}
                        total={1000}
                        color="bg-primary"
                     />
                     <QuotaItem
                        icon={<FileText size={14} />}
                        label="Security Logs"
                        used={82}
                        total={100}
                        color="bg-amber-500"
                        warning
                     />
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800">
                     <Link href="/subscription" className="text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-primary flex items-center justify-center gap-1 transition-colors">
                        Subscription Details <ArrowRight size={12} />
                     </Link>
                  </div>
               </div>

               {/* Activity Feed */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-5">System Log</h3>
                  <div className="space-y-4">
                     {ACTIVITY_FEED.map((item: any) => (
                        <div key={item.id} className="flex gap-3 items-start">
                           <div className={cn(
                              "size-1.5 rounded-full mt-1.5 shrink-0",
                              item.type === 'success' ? "bg-emerald-500" :
                                 item.type === 'warning' ? "bg-amber-500" : "bg-primary"
                           )} />
                           <div className="space-y-0.5">
                              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">{item.text}</p>
                              <p className="text-[10px] text-slate-400 font-medium">
                                 {item.time}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}