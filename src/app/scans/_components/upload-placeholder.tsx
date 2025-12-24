import { UploadCloudIcon } from "lucide-react";

export const UploaderPlaceholder = () => (
    <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 max-w-sm mx-auto">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <UploadCloudIcon size={32} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Upload Image</h3>
        <p className="text-sm text-gray-500 mt-1">
            Drag and drop or click to browse. Supports JPG, PNG or WebP.
        </p>
    </div>
);
