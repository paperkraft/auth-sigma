"use client";

import { Building2, Users, MapPin, Globe, ArrowRight, Zap, User, Key, Save, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/auth-provider';
import { useState } from 'react';
import Link from 'next/link';

export default function Organization() {
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
            <h1 className="text-2xl font-bold text-foreground">Organization Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Manage your company details, team members, and regional preferences.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* NAVIGATION TABS (SIDEBAR LOOK) */}
            <div className="lg:col-span-2 space-y-1">
               <Link href="/profile" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <User size={16} /> Profile Info
               </Link>
               <Link href="/profile/security" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Key size={16} /> Security
               </Link>
               <button className="w-full text-left px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-bold flex items-center gap-2 transition-all cursor-default">
                  <Building2 size={16} /> Organization
               </button>
               <Link href="/subscription" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Zap size={16} /> Billing & Plans
               </Link>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-7 space-y-6">

               {/* ORGANIZATION PROFILE */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 text-slate-400">
                     <Building2 size={18} />
                     <h3 className="text-sm font-bold text-foreground">Organization Profile</h3>
                  </div>

                  <div className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="orgName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Organization Name</Label>
                        <Input id="orgName" defaultValue={user?.organisationName ?? ""} placeholder="Acme Corp" className="h-10 text-sm" />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <Label htmlFor="website" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Website</Label>
                           <div className="relative">
                              <Globe className="absolute left-3 top-2.5 size-4 text-slate-400" />
                              <Input id="website" placeholder="https://example.com" className="pl-10 h-10 text-sm" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</Label>
                           <div className="relative">
                              <MapPin className="absolute left-3 top-2.5 size-4 text-slate-400" />
                              <Input id="location" placeholder="Mumbai, India" className="pl-10 h-10 text-sm" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* TEAM MANAGEMENT SUMMARY */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-2 text-slate-400">
                        <Users size={18} />
                        <h3 className="text-sm font-bold text-foreground">Team Management</h3>
                     </div>
                     <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-wider">Manage Team</Button>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                     <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                           <div key={i} className="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                              JD
                           </div>
                        ))}
                        <div className="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                           +2
                        </div>
                     </div>
                     <p className="text-xs text-muted-foreground font-medium">6 Team Members Active</p>
                  </div>
               </div>

               {/* WARNING / INFO */}
               <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded flex gap-3">
                  <AlertTriangle size={18} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                  <div>
                     <p className="text-xs font-bold text-amber-800 dark:text-amber-400">Data Sharing Notice</p>
                     <p className="text-[11px] text-amber-700/80 dark:text-amber-500/80 leading-relaxed mt-0.5">
                        Organization settings are shared across all team members. Changes made here will reflect for everyone in the {user?.organisationName ?? "Organization"}.
                     </p>
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
                     {isSaving ? "Saving..." : <><Save size={14} /> Save Organization</>}
                  </Button>
               </div>

            </div>

            {/* SIDEBAR WIDGETS (QUICK LINKS) */}
            <div className="lg:col-span-3 space-y-6">
               <div className="bg-slate-900 dark:bg-black p-6 rounded-lg text-white space-y-4 border border-slate-800 shadow-xl">
                  <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                     <Users size={20} />
                  </div>
                  <h3 className="text-base font-bold">Workspace Access</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                     Invite members to your workspace and manage their individual permissions.
                  </p>
                  <Button variant="secondary" className="w-full text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 border-none h-9 mt-2 shadow-lg">
                     Invite Member <ArrowRight size={14} className="ml-2" />
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
