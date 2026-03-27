"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Building2, User, ChevronLeft, ArrowRight, ShieldCheck, Users } from 'lucide-react';

import { CheckboxController } from '@/components/form-controls/floating/checkbox-controller';
import { FloatingInputController } from '@/components/form-controls/floating/input-controller';
import LoaderEffect from '@/components/shared/loader-effect';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { auth_api } from '@/config';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { useApi } from '@/hooks/use-api';
import { signupDefaultValues, signupSchema } from '@/schema/auth/sign-up';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebounce } from '@/hooks/use-debounce';
import { AuthHeader } from './AuthHeader';
import { cn } from '@/lib/utils';

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const { post } = useApi();

  const [step, setStep] = useState<1 | 2>(1);
  const [suggestion, setSuggestion] = useState<string[]>([]);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: signupDefaultValues
  });

  const isIndividual = form.watch("isIndividual");
  const debounce = useDebounce(form.watch('userName'), 300);

  useEffect(() => {
    if (!debounce || debounce.length < 3) {
      setSuggestion([]);
      form.clearErrors("userName");
      return
    }

    let isActive = true;

    const checkUserName = async () => {
      try {
        const { data, error } = await post(`${auth_api}/check-username?userName=${debounce}`);

        if (!isActive) return;

        if (error) {
          form.setError("userName", {
            message: "Unable to validate username. Try again.",
          });
          return;
        }

        if (!data?.isSuccess) {
          form.setError('userName', { message: "That username is already taken." });
          setSuggestion(data?.result?.availableNames || []);
        } else {
          form.clearErrors("userName");
          setSuggestion([]);
        }
      } catch (error) {
        if (!isActive) return;

        form.setError("userName", {
          message: "Something went wrong.",
        });
      }
    }

    checkUserName();

    return () => {
      isActive = false;
    };
  }, [debounce, form, post]);

  const onSubmit = useCallback(async (data: SignupFormValues) => {

    const { firstName, lastName, organisationName, isIndividual, terms, ...rest } = data;

    let payload: any = {
      ...rest,
      isIndividual,
      "countryName": "India",
      "countryCode": "+91",
      "invitedProjectId": null,
    };

    if (isIndividual) {
      payload.firstName = firstName;
      payload.lastName = lastName;
    } else {
      payload.organisationName = organisationName;
    }

    localStorage.setItem('emailId', rest.emailId);

    const { data: result, error } = await post(`${auth_api}/signup`, payload);

    if (error) {
      toast.error(error);
      return;
    }

    if (result && !result.isSuccess) {
      toast.error(result.resMsg);
      return;
    }

    if (result && result.isSuccess) {
      router.replace("/auth/email-sent");
    }
  }, [post, router]);

  const handleSelectPath = (path: 'individual' | 'organization') => {
    form.setValue('isIndividual', path === 'individual');
    setStep(2);
  };

  return (
    <AuthLayout
      heroTitle="Join the world's largest simulation community."
      heroSubtitle="Start simulating in minutes. No installation required. Access powerful cloud computing resources directly from your browser."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
      showBackToLogin
    >
      {step === 1 ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Choose your path</h1>
            <p className="text-sm text-slate-500">Are you setting this up for an Organization or for yourself?</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => handleSelectPath('organization')}
              className="flex items-center gap-5 p-5 border-2 border-slate-100 hover:border-primary/50 hover:bg-primary/5 rounded-xl transition-all group text-left shadow-sm hover:shadow-md"
            >
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Building2 size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900">Organization</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Companies, municipalities or research teams. Supports multi-user tenants and organization-wide usage.
                </p>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-primary uppercase tracking-wider">
                  Org-tier pricing <ArrowRight size={10} />
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSelectPath('individual')}
              className="flex items-center gap-5 p-5 border-2 border-slate-100 hover:border-primary/50 hover:bg-primary/5 rounded-xl transition-all group text-left shadow-sm hover:shadow-md"
            >
              <div className="size-14 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <User size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900">Personal Use</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Engineers, students or independent pros. Personal workspace with Solo-tier pricing and single-user access.
                </p>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  Solo-tier pricing <ArrowRight size={10} />
                </div>
              </div>
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-slate-400">
               By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <button 
             onClick={() => setStep(1)}
             className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-primary transition-colors mb-6 group"
          >
             <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to selection
          </button>

          <AuthHeader 
             title={isIndividual ? "Personal Setup" : "Organization Setup"} 
             description={isIndividual ? "Create your personal engineering workspace." : "Set up your organization's simulation tenant."} 
          />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">

              {isIndividual ? (
                /* First + Last Name */
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInputController
                    name='firstName'
                    label='First Name'
                    placeholder='Enter First Name'
                    forcelightmode
                    reset
                  />

                  <FloatingInputController
                    name='lastName'
                    label='Last Name'
                    placeholder='Enter Last Name'
                    forcelightmode
                    reset
                  />
                </div>
              ) : (
                /* Organization Name */
                <FloatingInputController
                  name='organisationName'
                  label='Company/Municipality Name'
                  placeholder='Enter Name'
                  forcelightmode
                  reset
                />
              )}

              {/* Email + Mobile */}
              <div className="grid grid-cols-2 gap-4">
                <FloatingInputController
                  type='email'
                  name='emailId'
                  label='Email'
                  placeholder='Enter email'
                  forcelightmode
                  reset
                />

                <FloatingInputController
                  type='number'
                  name='mobileNo'
                  label='Mobile No.'
                  placeholder='Enter Mobile No.'
                  minLength={10}
                  maxLength={10}
                  forcelightmode
                  reset
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FloatingInputController
                    type='text'
                    name='userName'
                    label='Username'
                    placeholder='Enter username'
                    maxLength={20}
                    forcelightmode
                    reset
                  />

                  {suggestion.length > 0 && (
                    <p className='text-sm text-slate-800'>
                      Available:&nbsp;
                      <span className='text-primary cursor-pointer hover:bg-primary/10 p-0.5 px-1 rounded'
                        onClick={() => {
                          form.setValue("userName", suggestion[0], { shouldValidate: true });
                          setSuggestion([]);
                        }}
                      >
                        {suggestion[0]}
                      </span>
                    </p>
                  )}
                </div>

                <FloatingInputController
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Create a password'
                  maxLength={20}
                  forcelightmode
                />
              </div>

              {/* Terms */}
              <div>
                <div className="flex items-start py-2">
                  <CheckboxController
                    disableRHF
                    {...form.register('terms')}
                    onCheckedChange={(c) => { form.setValue('terms', c); form.clearErrors('terms') }}
                    className='dark:[&_button]:bg-white dark:[&_button]:border-gray-400 dark:[&_button]:text-white dark:[&_button]:data-[state=checked]:border-primary'
                  />
                  <label htmlFor='terms' className="text-xs text-slate-500 leading-relaxed ml-2">
                    I agree to the&nbsp;<Link href="#" className="text-primary hover:underline">Terms of Service</Link>
                    &nbsp;and&nbsp;<Link href="#" className="text-primary hover:underline">&nbsp;Privacy Policy</Link>
                  </label>
                </div>
                {form.formState.errors.terms && (<p className="text-xs text-destructive">{form.formState.errors.terms.message}</p>)}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className='w-full h-11 dark:text-white shadow-xl shadow-primary/10 rounded-lg font-bold'
              >
                <LoaderEffect loading={form.formState.isSubmitting} loadingText="Initialising Workspace..." text="Create Account" />
              </Button>
            </form>
          </Form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Already have an account?
            <Link href="/auth/sign-in" className="ml-2 font-bold text-primary hover:underline transition-all">Sign in</Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}