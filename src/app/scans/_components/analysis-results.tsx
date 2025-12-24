import { UploadCloud, X, Scan, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export const AnalysisResults = ({
    data,
    onReset,
}: {
    data: any;
    onReset: (e: React.MouseEvent) => void;
}) => (
    <div className="p-8 md:p-12 bg-white border-l border-gray-100 flex flex-col justify-center animate-in slide-in-from-right-12 duration-500">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            ANALYSIS COMPLETE
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Scan Results</h2>
        <p className="text-gray-600 leading-relaxed mb-8">{data.message}</p>
        <div className="space-y-3 pt-6 border-t border-gray-100">
            <ResultRow label="Filename" value={data.imageName} />
            <ResultRow
                label="Size"
                value={`${Math.round(data.size / 1024)} KB`}
            />
        </div>
        <Button
            variant="outline"
            onClick={onReset}
            className="mt-10 rounded-xl"
        >
            Reset & Scan Another
        </Button>
    </div>
);

const ResultRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="font-medium text-gray-900">{value}</span>
    </div>
);