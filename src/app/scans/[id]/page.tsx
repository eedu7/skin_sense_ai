"use client";
import { useSubscription } from "@/hooks/use-subscriptions";
import { Loader2Icon } from "lucide-react";
import { use } from "react";

interface Props {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: Props) {
    const { id: scanId } = use(params);
    const { data, isLoading } = useSubscription();
    return (
        <div>
            <p>{scanId}</p>
            {isLoading ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                JSON.stringify(data, null, 2)
            )}
        </div>
    );
}
