"use client";

import { Check, ArrowRight, Zap, ShieldCheck, Box, Info, User, Key, Building2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PLANS = [
   {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal for independent developers and hobbyists.',
      priceMonthly: '₹999',
      priceAnnual: '₹849',
      icon: Box,
      color: 'text-slate-500',
      bgColor: 'bg-slate-100 dark:bg-slate-800/50',
      features: [
         'Up to 100 Hydraulic Pipes',
         '10 Billing Invoices / month',
         'Email Support',
         'Standard API Access',
         'Single User Access',
      ],
      buttonText: 'Downgrade to Starter',
      isCurrent: false,
   },
   {
      id: 'pro',
      name: 'Professional',
      description: 'Best for growing teams and active projects.',
      priceMonthly: '₹4,999',
      priceAnnual: '₹4,249',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: [
         'Up to 1,000 Hydraulic Pipes',
         '100 Billing Invoices / month',
         'Priority Support',
         'Advanced API Access',
         'Team Collab (Up to 10)',
         'Billing Analytics',
      ],
      buttonText: 'Current Plan',
      isCurrent: true,
      popular: true,
   },
   {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large-scale operations.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      icon: ShieldCheck,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      features: [
         'Unlimited Hydraulic Pipes',
         'Unlimited Billing Invoices',
         '24/7 Dedicated Support',
         'Custom API Integration',
         'Unlimited Team Members',
         'SLA & Legal Agreements',
         'On-premise Deployment',
      ],
      buttonText: 'Contact Sales',
      isCurrent: false,
   },
];

export default function SubscriptionUpgrade() {
   const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

   return (
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-6 space-y-8 animate-in fade-in duration-500">

         {/* HEADER */}
         <div className="border-b border-border pb-6">
            <h1 className="text-2xl font-bold text-foreground">Upgrade Your Experience</h1>
            <p className="text-sm text-muted-foreground mt-1">
               Choose the plan that fits your execution scale. Unlock advanced hydraulic modelling and higher throughput.
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
               <Link href="/subscription" className="w-full text-left px-3 py-2 rounded-md bg-primary/10 text-primary text-sm font-bold flex items-center gap-2 transition-all">
                  <Zap size={16} /> Billing & Plans
               </Link>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="lg:col-span-7 space-y-10">

               {/* BILLING TOGGLE */}
               <div className="flex items-center justify-center">
                  <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex gap-1 border border-slate-200 dark:border-slate-700">
                     <button
                        onClick={() => setBillingCycle('monthly')}
                        className={cn(
                           "px-6 py-2 rounded-full text-[10px] font-bold uppercase transition-all duration-300",
                           billingCycle === 'monthly' ? "bg-white dark:bg-slate-900 shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                     >
                        Monthly
                     </button>
                     <button
                        onClick={() => setBillingCycle('annual')}
                        className={cn(
                           "px-6 py-2 rounded-full text-[10px] font-bold uppercase transition-all duration-300 flex items-center gap-2",
                           billingCycle === 'annual' ? "bg-white dark:bg-slate-900 shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                     >
                        Annual <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded">-15%</span>
                     </button>
                  </div>
               </div>

               {/* PRICING CARDS */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
                  {PLANS.map((plan) => (
                     <div
                        key={plan.id}
                        className={cn(
                           "relative flex flex-col bg-white dark:bg-slate-900 border rounded-xl p-5 transition-all duration-300 group",
                           plan.popular
                              ? "border-primary shadow-xl shadow-primary/5 z-10"
                              : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        )}
                     >
                        {plan.popular && (
                           <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-[9px] font-bold rounded-full uppercase tracking-widest shadow-lg">
                              Popular
                           </span>
                        )}

                        <div className="flex items-center gap-3 mb-4">
                           <div className={cn("size-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800", plan.bgColor, plan.color)}>
                              <plan.icon size={18} />
                           </div>
                           <div>
                              <h3 className="text-sm font-bold text-foreground">{plan.name}</h3>
                           </div>
                        </div>

                        <div className="mb-4">
                           <div className="flex items-baseline gap-1">
                              <span className="text-xl font-black text-foreground">
                                 {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                              </span>
                              {plan.priceMonthly !== 'Custom' && (
                                 <span className="text-[10px] text-muted-foreground font-medium">/mo</span>
                              )}
                           </div>
                        </div>

                        <ul className="space-y-2 mb-6 flex-grow">
                           {plan.features.slice(0, 5).map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-[10px] text-slate-600 dark:text-slate-400 leading-tight">
                                 <Check size={11} className="text-emerald-500 shrink-0 mt-0.5" />
                                 {feature}
                              </li>
                           ))}
                        </ul>

                        <Button
                           asChild={plan.id === 'enterprise'}
                           variant={plan.isCurrent ? 'outline' : plan.popular ? 'default' : 'secondary'}
                           className={cn(
                              "w-full h-9 font-bold text-[10px] uppercase tracking-wider",
                              plan.isCurrent && "cursor-default opacity-80"
                           )}
                           disabled={plan.isCurrent}
                        >
                           {plan.id === 'enterprise' ? (
                              <Link href="mailto:sales@sigmatoolbox.com">
                                 {plan.buttonText}
                              </Link>
                           ) : (
                              <span>{plan.buttonText}</span>
                           )}
                        </Button>
                     </div>
                  ))}
               </div>

               {/* HELP SECTION */}
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-dotted border-slate-300 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                     <div className="size-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                        <Info size={20} />
                     </div>
                     <div>
                        <h3 className="text-sm font-bold text-foreground">Need a custom plan?</h3>
                        <p className="text-xs text-muted-foreground">We offer specialized pricing for high-volume partners.</p>
                     </div>
                  </div>
                  <Button variant="outline" className="text-[10px] font-bold h-9 px-6 uppercase tracking-wider">Enterprise FAQ</Button>
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
                        <Link href="/subscription" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                           Billing History
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
