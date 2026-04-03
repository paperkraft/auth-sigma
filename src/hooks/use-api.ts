import { useState, useCallback } from 'react';
import { auth_api } from '@/config';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export function useApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback(async (
        url: string,
        method: HttpMethod,
        payload?: any,
        withCredentials = true,
        isRetry = false
    ): Promise<{ data: any; error: string | null }> => {
        setIsLoading(true);
        setError(null);

        try {
            const options: RequestInit = {
                method,
                credentials: withCredentials ? "include" : "omit",
                headers: {
                    "Content-Type": "application/json",
                },
            };

            if (payload !== undefined && payload !== null && method !== 'GET') {
                options.body = JSON.stringify(payload);
            }

            const res = await fetch(url, options);
            const result = await res.json();

            // Handle 401 Unauthorized
            if (result.resMsg === "Unauthorized" && !isRetry && !url.includes('/refreshToken') && !url.includes('/auth/sign-in') && withCredentials) {
                const refreshRes = await fetch(`${auth_api}/refreshToken`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (refreshRes.ok) {
                    // Retry original request
                    return await request(url, method, payload, withCredentials, true);
                } else {
                    // Refresh failed, redirect to sign-in
                    if (typeof window !== 'undefined' && !window.location.pathname.includes('/auth/sign-in')) {
                        window.location.replace(`/auth/sign-in?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`);
                    }
                    throw new Error("Session expired. Please sign in again.");
                }
            }

            if (!res.ok) {
                throw new Error(result.message || result.resMsg || "Request failed");
            }

            return { data: result, error: null };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
            setError(errorMessage);
            return { data: null, error: errorMessage };
        } finally {
            if (!isRetry) setIsLoading(false);
        }
    }, []);

    const get = useCallback((url: string, withCredentials = true) =>
        request(url, 'GET', undefined, withCredentials), [request]);

    const post = useCallback((url: string, payload?: any, withCredentials = true) =>
        request(url, 'POST', payload, withCredentials), [request]);

    const put = useCallback((url: string, payload?: any, withCredentials = true) =>
        request(url, 'PUT', payload, withCredentials), [request]);

    const del = useCallback((url: string, payload?: any, withCredentials = true) =>
        request(url, 'DELETE', payload, withCredentials), [request]);

    const patch = useCallback((url: string, payload?: any, withCredentials = true) =>
        request(url, 'PATCH', payload, withCredentials), [request]);

    return {
        isLoading,
        error,
        request,
        get,
        post,
        put,
        delete: del,
        patch
    };
}
