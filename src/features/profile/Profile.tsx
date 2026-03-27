"use client";

import { User, Mail, Building2, Shield, Key, Save, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/auth-provider';
import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
   const { user } = useAuth();
   const [isSaving, setIsSaving] = useState(false);

   const handleSave = () => {
      setIsSaving(true);
      setTimeout(() => setIsSaving(false), 1000);
   };

   return (
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-6 space-y-8 animate-in fade-in duration-500">

         {/* HEADER */}
         <div className="border-b border-border pb-6">
            <h1 className="text-2xl font-bold text-foreground">Account Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Manage your personal information, organization details, and security preferences.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* NAVIGATION TABS (SIDEBAR LOOK) */}
            <div className="lg:col-span-2 space-y-1">
               <button className="w-full text-left px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-bold flex items-center gap-2 transition-all cursor-default">
                  <User size={16} /> Profile Info
               </button>
               <Link href="/profile/security" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Key size={16} /> Security
               </Link>
               <Link href="/profile/organization" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Building2 size={16} /> Organization
               </Link>
               <Link href="/subscription" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Zap size={16} /> Billing & Plans
               </Link>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-7 space-y-6">

               {/* PERSONAL INFORMATION */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 text-slate-400">
                     <User size={18} />
                     <h3 className="text-sm font-bold text-foreground">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">First Name</Label>
                        <Input id="firstName" defaultValue={user?.firstName ?? ""} placeholder="First Name" className="h-10 text-sm" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Name</Label>
                        <Input id="lastName" defaultValue={user?.lastName ?? ""} placeholder="Last Name" className="h-10 text-sm" />
                     </div>
                     <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                        <div className="relative">
                           <Mail className="absolute left-3 top-2.5 size-4 text-slate-400" />
                           <Input id="email" defaultValue={user?.emailId ?? ""} disabled className="pl-10 h-10 text-sm bg-slate-50 dark:bg-slate-950/50" />
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                           <Shield size={10} /> Email address is verified and managed by the central identity hub.
                        </p>
                     </div>
                  </div>
               </div>

               {/* ACTION BUTTONS */}
               <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" className="text-xs h-10 px-6">Discard Changes</Button>
                  <Button
                     className="text-xs h-10 px-8 font-bold gap-2 shadow-lg shadow-primary/20"
                     onClick={handleSave}
                     disabled={isSaving}
                  >
                     {isSaving ? "Saving..." : <><Save size={14} /> Update Profile</>}
                  </Button>
               </div>

            </div>

            {/* SIDEBAR WIDGETS (QUICK LINKS) */}
            <div className="lg:col-span-3 space-y-6">
               <div className="bg-slate-900 dark:bg-black p-6 rounded-lg text-white space-y-4 border border-slate-800 shadow-xl">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                     <Zap size={20} />
                  </div>
                  <h3 className="text-base font-bold">Manage Subscription</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                     View your current plan, billing history and usage quotas across all Sigma modules.
                  </p>
                  <Button asChild variant="secondary" className="w-full text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 border-none h-9 mt-2 shadow-lg">
                     <Link href="/subscription">
                        Go to Billing <ArrowRight size={14} className="ml-2" />
                     </Link>
                  </Button>
               </div>

               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                           Back to Dashboard
                           <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </Link>
                     </li>
                     <li>
                        <Link href="/subscription" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                           Billing & Plans
                           <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
