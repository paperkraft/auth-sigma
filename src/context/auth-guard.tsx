'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loading from '@/app/loading';
import { useAuth } from '@/context/auth-provider';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
    const isPublicRoute = currentPath.startsWith('/auth');

    useEffect(() => {
        if (loading || !currentPath) return;

        if (!user) {
            // Unauthenticated: Redirect to login if on protected page
            if (!isPublicRoute && !currentPath.startsWith('/auth/')) {
                const searchParams = new URLSearchParams();
                searchParams.set('redirect', currentPath);
                router.replace(`/auth/sign-in?${searchParams.toString()}`);
            }
        } else {
            // Authenticated: Redirect home if on auth page
            if (isPublicRoute) {
                router.replace('/');
            }
        }
    }, [user, loading, isPublicRoute, router, currentPath]);

    if (loading) return <Loading />;

    // Only block rendering if we are SURE we are about to redirect
    if (!user && !isPublicRoute && !currentPath.startsWith('/auth/')) return null;
    if (user && isPublicRoute) return null;

    return <>{children}</>;
}