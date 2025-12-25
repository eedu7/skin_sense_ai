"use client";
import { useGetScanById } from "@/hooks/use-scans";
import { Loader2Icon } from "lucide-react";
import { use } from "react";

interface Props {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: Props) {
    const { id: scanId } = use(params);
    const { data, isLoading } = useGetScanById(scanId);
    return (
        <div>
            {isLoading ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                JSON.stringify(data, null, 2)
            )}
        </div>
    );
}
