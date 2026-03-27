import { CreditCard, Check, Shield, Zap, ArrowRight, Download, History, User, Key, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Subscription() {
   const PLAN_FEATURES = [
      "Unlimited Hydraulic Projects",
      "Priority API Access",
      "Advanced Billing Analytics",
      "Team Collaboration (Up to 10 members)",
      "Dedicated Support",
   ];

   const BILLING_HISTORY = [
      { id: 1, date: "Mar 01, 2026", amount: "₹4,999", status: "Paid", method: "Visa **** 4242" },
      { id: 2, date: "Feb 01, 2026", amount: "₹4,999", status: "Paid", method: "Visa **** 4242" },
      { id: 3, date: "Jan 01, 2026", amount: "₹4,999", status: "Paid", method: "Visa **** 4242" },
   ];

   return (
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-6 space-y-8 animate-in fade-in duration-500">

         {/* HEADER */}
         <div className="border-b border-border pb-6">
            <h1 className="text-2xl font-bold text-foreground">Subscription Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Manage your billing, plans, and account usage overview.
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
               <Link href="/profile/organization" className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:bg-muted text-sm font-medium flex items-center gap-2 transition-all">
                  <Building2 size={16} /> Organization
               </Link>
               <button className="w-full text-left px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-bold flex items-center gap-2 transition-all cursor-default">
                  <Zap size={16} /> Billing & Plans
               </button>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-7 space-y-6">
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-8">
                     <div className="flex gap-4">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                           <Zap size={24} />
                        </div>
                        <div>
                           <h2 className="text-lg font-bold text-foreground">Pro Professional Plan</h2>
                           <p className="text-sm text-muted-foreground mt-0.5">Renews on April 01, 2026</p>
                        </div>
                     </div>
                     <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider">
                        Active
                     </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                     <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Plan Includes</h3>
                        <ul className="space-y-3">
                           {PLAN_FEATURES.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                 <Check size={14} className="text-emerald-500 shrink-0" />
                                 {feature}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="bg-slate-50 dark:bg-slate-950/50 rounded-lg p-5 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Payment Method</h3>
                        <div className="flex items-center gap-4">
                           <div className="size-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                              <CreditCard size={20} className="text-slate-600 dark:text-slate-400" />
                           </div>
                           <div>
                              <p className="text-sm font-bold text-foreground">Visa ending in 4242</p>
                              <p className="text-xs text-muted-foreground mt-0.5">Expires 12/28</p>
                           </div>
                        </div>
                        <Button variant="outline" className="w-full mt-6 text-xs h-9" size="sm">
                           Update Payment Method
                        </Button>
                     </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                        <p className="text-2xl font-bold text-foreground">₹4,999<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                        <p className="text-xs text-muted-foreground mt-1 text-emerald-600 dark:text-emerald-500 font-medium italic">You are currently saving 15% with annual billing.</p>
                     </div>
                     <div className="flex gap-3">
                        <Button variant="ghost" className="text-xs h-9 px-4">Cancel Plan</Button>
                        <Button asChild className="text-xs h-9 px-6 font-bold shadow-lg shadow-primary/20">
                           <Link href="/subscription/upgrade">
                              Upgrade Plan
                           </Link>
                        </Button>
                     </div>
                  </div>
               </div>

               {/* BILLING HISTORY */}
               <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <History size={16} className="text-slate-400" />
                        <h3 className="text-sm font-bold text-foreground">Billing History</h3>
                     </div>
                     <Button variant="ghost" size="sm" className="text-[10px] uppercase font-bold tracking-wider">
                        View All
                     </Button>
                  </div>
                  <div className="divide-y divide-slate-50 dark:divide-slate-800">
                     {BILLING_HISTORY.map((invoice) => (
                        <div key={invoice.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                           <div className="flex items-center gap-6">
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 w-24">{invoice.date}</p>
                              <p className="text-xs font-medium text-slate-500 dark:text-slate-500 hidden md:block">{invoice.method}</p>
                           </div>
                           <div className="flex items-center gap-8">
                              <p className="text-xs font-bold text-foreground">{invoice.amount}</p>
                              <div className="flex items-center gap-2">
                                 <Button variant="ghost" size="icon" className="size-8 text-slate-400 hover:text-primary transition-colors">
                                    <Download size={14} />
                                 </Button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* SIDEBAR WIDGETS */}
            <div className="lg:col-span-3 space-y-6">
               <div className="bg-slate-900 dark:bg-black p-6 rounded-lg text-white space-y-4 border border-slate-800 shadow-xl">
                  <Shield size={24} className="text-primary" />
                  <h3 className="text-base font-bold">Enterprise Support</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                     Need a custom agreement or high-volume usage? Our enterprise team is here to help you scale.
                  </p>
                  <Button variant="secondary" className="w-full text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 border-none h-9 mt-2 shadow-lg">
                     Contact Sales <ArrowRight size={14} className="ml-2" />
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
                        <Link href="/profile" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                           Account Settings
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
