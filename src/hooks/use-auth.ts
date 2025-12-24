import { supabaseBrowser } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
            toast.success("Signed up successfully");
            router.replace("/scans");
        },
        onError: () => {
            toast.error("Error in signing up");
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
            toast.success("Logged in successfully");
            router.replace("/scans");
        },
        onError: () => {
            toast.error("Error in signing in");
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
            toast.success("Logged out successfully");

            router.replace("/login");
        },
        onError: () => {
            toast.error("Error in signing out");
        },
    });
}
