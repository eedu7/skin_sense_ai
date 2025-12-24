"use client";

import useScan from "@/hooks/use-scans";
import { cn } from "@/lib/utils";
import { Activity, Loader2, ShieldCheck } from "lucide-react"; // Added icons
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { AnalysisResults } from "./analysis-results";
import { PreviewState } from "./preview-state";
import { UploaderPlaceholder } from "./upload-placeholder";

export const DropImage = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const scanMutation = useScan();
    const isLocked = scanMutation.isSuccess;
    const isScanning = scanMutation.isPending;

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleFile = (file: File) => {
        if (!file?.type.startsWith("image/") || isLocked) return;
        setPreview(URL.createObjectURL(file));
        setImage(file);
    };

    const reset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImage(null);
        setPreview(null);
        if (inputRef.current) inputRef.current.value = "";
        scanMutation.reset?.();
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
            {/* NEW HEADER SECTION */}
            {!isLocked && (
                <div className="text-center space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Skin Condition Analyzer
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Upload a clear photo of the affected skin area. Our AI
                        will analyze the characteristics and provide an
                        easy-to-understand summary.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 pt-2">
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4 text-green-500" />{" "}
                            Private & Secure
                        </span>
                        <span className="flex items-center gap-1">
                            <Activity className="w-4 h-4 text-blue-500" />{" "}
                            Instant AI Analysis
                        </span>
                    </div>
                </div>
            )}

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (!isLocked) handleFile(e.dataTransfer.files?.[0]);
                }}
                onClick={() =>
                    !preview && !isLocked && inputRef.current?.click()
                }
                className={cn(
                    "relative min-h-[450px] rounded-3xl transition-all duration-500 overflow-hidden border-2",
                    isLocked
                        ? "bg-white border-gray-100 shadow-2xl"
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
                    onChange={(e) => handleFile(e.target.files?.[0]!)}
                />

                <div
                    className={cn(
                        "h-full w-full transition-all duration-500",
                        isLocked
                            ? "grid md:grid-cols-2"
                            : "flex items-center justify-center",
                    )}
                >
                    {/* LEFT SIDE: Image / Placeholder */}
                    <div className="relative flex items-center justify-center p-6 min-h-[400px]">
                        {preview ? (
                            <PreviewState
                                preview={preview}
                                isLocked={isLocked}
                                onReset={reset}
                                onScan={() => scanMutation.mutate(image!)}
                            />
                        ) : (
                            <UploaderPlaceholder />
                        )}

                        {/* Loading Overlay */}
                        {isScanning && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                                <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                                <p className="text-sm font-medium text-blue-900">
                                    Our AI is analyzing your skin...
                                </p>
                                <p className="text-xs text-blue-700/70 mt-1">
                                    Checking classification & generating report
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT SIDE: Results */}
                    {isLocked && (
                        <AnalysisResults
                            data={scanMutation.data}
                            onReset={reset}
                        />
                    )}
                </div>
            </div>

            {/* MEDICAL DISCLAIMER */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed text-center">
                    <strong>Disclaimer:</strong> This tool uses artificial
                    intelligence for educational purposes only. It is not a
                    medical diagnosis. Always seek the advice of a qualified
                    healthcare provider with any questions you may have
                    regarding a medical condition. Never disregard professional
                    medical advice because of something you have read here.
                </p>
            </div>
        </div>
    );
};
