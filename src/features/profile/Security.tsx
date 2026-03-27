"use client";

import { Key, Shield, Smartphone, Lock, ArrowRight, Zap, User, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/auth-provider';
import { useState } from 'react';
import Link from 'next/link';

export default function Security() {
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
            <h1 className="text-2xl font-bold text-foreground">Security Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Manage your password, two-factor authentication, and active sessions.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* NAVIGATION TABS (SIDEBAR LOOK) */}
            <div className="lg:col-span-2 space-y-1">
               <Link href="/profile" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <User size={16} /> Profile Info
               </Link>
               <button className="w-full text-left px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-bold flex items-center gap-2 transition-all cursor-default">
                  <Key size={16} /> Security
               </button>
               <Link href="/profile/organization" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Building2 size={16} /> Organization
               </Link>
               <Link href="/subscription" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Zap size={16} /> Billing & Plans
               </Link>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-7 space-y-6">

               {/* PASSWORD UPDATE */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 text-slate-400">
                     <Lock size={18} />
                     <h3 className="text-sm font-bold text-foreground">Change Password</h3>
                  </div>

                  <div className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="currentPassword" title="Current Password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Current Password</Label>
                        <Input id="currentPassword" type="password" placeholder="••••••••" className="h-10 text-sm" />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <Label htmlFor="newPassword" title="New Password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">New Password</Label>
                           <Input id="newPassword" type="password" placeholder="••••••••" className="h-10 text-sm" />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="confirmPassword" title="Confirm Password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Confirm Password</Label>
                           <Input id="confirmPassword" type="password" placeholder="••••••••" className="h-10 text-sm" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* TWO-FACTOR AUTHENTICATION */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-2 text-slate-400">
                        <Smartphone size={18} />
                        <h3 className="text-sm font-bold text-foreground">Two-Factor Authentication</h3>
                     </div>
                     <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider">
                        Disabled
                     </span>
                  </div>

                  <div className="space-y-4">
                     <p className="text-xs text-muted-foreground leading-relaxed">
                        Add an extra layer of security to your account. We recommend using an authenticator app for the best protection.
                     </p>
                     <Button variant="outline" className="text-xs font-bold h-9">
                        Setup Authenticator App
                     </Button>
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
                     {isSaving ? "Saving..." : <><Shield size={14} /> Update Security</>}
                  </Button>
               </div>

            </div>

            {/* SIDEBAR WIDGETS (QUICK LINKS) */}
            <div className="lg:col-span-3 space-y-6">
               <div className="bg-slate-900 dark:bg-black p-6 rounded-lg text-white space-y-4 border border-slate-800 shadow-xl">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                     <Lock size={20} />
                  </div>
                  <h3 className="text-base font-bold">Privacy Controls</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                     Control how your data is shared and manage third-party app permissions.
                  </p>
                  <Button variant="secondary" className="w-full text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 border-none h-9 mt-2 shadow-lg">
                     Review Privacy <ArrowRight size={14} className="ml-2" />
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
