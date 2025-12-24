import { supabaseBrowser } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type AuthData = {
    email: string;
    password: string;
};

export function useSignUp() {
    const router = useRouter();
    return useMutation({
        mutationKey: ["use-sign-up"],
        mutationFn: (data: AuthData) => {
            return supabaseBrowser.auth.signUp({
                email: data.email,
                password: data.password,
            });
        },
        onSuccess: () => {
            router.replace("/scans");
        },
    });
}

export function useSignIn() {
    const router = useRouter();

    return useMutation({
        mutationKey: ["use-sign-in"],
        mutationFn: (data: AuthData) => {
            return supabaseBrowser.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });
        },
        onSuccess: () => {
            router.replace("/scans");
        },
    });
}

export function useSignOut() {
    const router = useRouter();

    return useMutation({
        mutationKey: ["use-sign-up"],
        mutationFn: () => {
            return supabaseBrowser.auth.signOut();
        },
        onSuccess: () => {
            router.replace("/login");
        },
    });
}
