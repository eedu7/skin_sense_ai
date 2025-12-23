"use client";

import React, { useRef, useState, useEffect } from "react";
import {
    Image as ImageIcon,
    Scan,
    X,
    Loader2,
    UploadCloud,
} from "lucide-react";
import useScan from "@/hooks/use-scans";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const DropImage = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const scanMutation = useScan();
    const isLocked = scanMutation.isSuccess;
    const isScanning = scanMutation.isPending;

    // Cleanup the object URL to prevent memory leaks
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleFile = (file: File) => {
        if (!file.type.startsWith("image/") || isLocked) return;

        // Create new preview
        const objectUrl = URL.createObjectURL(file);
        setImage(file);
        setPreview(objectUrl);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (isLocked) return;

        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    };

    const reset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImage(null);
        setPreview(null);
        if (inputRef.current) inputRef.current.value = "";
        scanMutation.reset?.();
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                onClick={() =>
                    !preview && !isLocked && inputRef.current?.click()
                }
                className={cn(
                    "relative min-h-[400px] rounded-3xl transition-all duration-500 overflow-hidden border-2",
                    isLocked
                        ? "bg-white border-gray-100 shadow-xl"
                        : "border-dashed",
                    isDragging
                        ? "border-blue-500 bg-blue-50/50 scale-[1.01]"
                        : "border-gray-200 bg-gray-50/30",
                    !preview &&
                        !isLocked &&
                        "cursor-pointer hover:border-blue-400 hover:bg-blue-50/20",
                )}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFile(file);
                    }}
                />

                {/* --- UI CONTENT --- */}
                <div
                    className={cn(
                        "h-full w-full transition-all duration-500",
                        isLocked
                            ? "grid md:grid-cols-2"
                            : "flex items-center justify-center",
                    )}
                >
                    {/* IMAGE SECTION */}
                    <div className="relative flex items-center justify-center p-6 min-h-[400px]">
                        {preview ? (
                            <>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className={cn(
                                        "rounded-2xl shadow-2xl transition-all duration-500 object-contain",
                                        isLocked
                                            ? "max-h-[300px] w-full"
                                            : "max-h-[350px] w-auto",
                                    )}
                                />

                                {/* Close Button (Only if not scanning/locked) */}
                                {!isLocked && !isScanning && (
                                    <button
                                        onClick={reset}
                                        className="absolute top-8 right-8 p-2 bg-white/80 backdrop-blur shadow-md rounded-full hover:bg-white transition-colors"
                                    >
                                        <X
                                            size={18}
                                            className="text-gray-600"
                                        />
                                    </button>
                                )}

                                {/* Scan Overlay (Appears when file is ready but not yet scanned) */}
                                {!isLocked && !isScanning && (
                                    <div className="absolute bottom-10 inset-x-0 flex justify-center">
                                        <Button
                                            size="lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                scanMutation.mutate(image!);
                                            }}
                                            className="rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 px-8"
                                        >
                                            <Scan size={18} className="mr-2" />
                                            Begin Analysis
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                    <UploadCloud size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Upload Image
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Drag and drop or click to browse
                                </p>
                            </div>
                        )}

                        {/* Scanning Loader Overlay */}
                        {isScanning && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                                <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                                <p className="text-sm font-medium text-blue-900">
                                    Analyzing Image...
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RESULTS SECTION */}
                    {isLocked && (
                        <div className="p-8 md:p-12 bg-white border-l border-gray-50 flex flex-col justify-center animate-in slide-in-from-right-12 duration-500">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold mb-6 w-fit">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                ANALYSIS COMPLETE
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Scan Results
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {scanMutation.data.message}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">
                                        Filename
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        {scanMutation.data.imageName}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Size</span>
                                    <span className="font-medium text-gray-900">
                                        {Math.round(
                                            scanMutation.data.size / 1024,
                                        )}{" "}
                                        KB
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                onClick={reset}
                                className="mt-10 rounded-xl"
                            >
                                Reset & Scan Another
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
