import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScanIcon, X } from "lucide-react";

export const PreviewState = ({
    preview,
    onReset,
    onScan,
    isLocked,
}: {
    preview: string;
    onReset: (e: React.MouseEvent) => void;
    onScan: () => void;
    isLocked: boolean;
}) => (
    <>
        <img
            src={preview}
            alt="Preview"
            className={cn(
                "rounded-2xl shadow-2xl transition-all duration-500 object-contain",
                isLocked ? "max-h-[300px] w-full" : "max-h-[350px] w-auto",
            )}
        />
        {!isLocked && (
            <>
                <button
                    onClick={onReset}
                    className="absolute top-8 right-8 p-2 bg-white/80 backdrop-blur shadow-md rounded-full hover:bg-white transition-colors"
                >
                    <X size={18} className="text-gray-600" />
                </button>
                <div className="absolute bottom-10 inset-x-0 flex justify-center">
                    <Button
                        size="lg"
                        onClick={(e) => {
                            e.stopPropagation();
                            onScan();
                        }}
                        className="rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 px-8"
                    >
                        <ScanIcon size={18} className="mr-2" />
                        Begin Analysis
                    </Button>
                </div>
            </>
        )}
    </>
);
