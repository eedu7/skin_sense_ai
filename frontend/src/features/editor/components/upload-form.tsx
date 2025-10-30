"use client";

import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import { uploadFilesApi } from "../services/api";

export default function UploadForm() {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
  const maxFiles = 6;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxFiles,
    maxSize,
    multiple: true,
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUpload = async () => {
    try {
      console.log("Uploadin`");
      setLoading(true);
      const uploaded = await uploadFilesApi(
        files.map((f) => f.file as File),
      );

      if (uploaded["success"]) {
        // TODO: Use the id to go to the result page
        router.push("/results");
      }
    } catch (err) {
      toast.error(`Error: ${err}` || "Error uploading files");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {/* Drop area */}
        <div
          className="relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
          data-dragging={isDragging || undefined}
          data-files={files.length > 0 || undefined}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            {...getInputProps()}
            aria-label="Upload image file"
            className="sr-only"
          />
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              aria-hidden="true"
              className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
            >
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <p className="mb-1.5 text-sm font-medium">
              Drop your images here
            </p>
            <p className="text-xs text-muted-foreground">
              SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
            </p>
            <Button
              className="mt-4"
              onClick={openFileDialog}
              variant="outline"
            >
              <UploadIcon
                aria-hidden="true"
                className="-ms-1 opacity-60"
              />
              Select images
            </Button>
          </div>
        </div>

        {errors.length > 0 && (
          <div
            className="flex items-center gap-1 text-xs text-destructive"
            role="alert"
          >
            <AlertCircleIcon className="size-3 shrink-0" />
            <span>{errors[0]}</span>
          </div>
        )}

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                className="flex items-center justify-between gap-2 rounded-lg border bg-background p-2 pe-3"
                key={file.id}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="aspect-square shrink-0 rounded bg-accent">
                    <img
                      alt={file.file.name}
                      className="size-10 rounded-[inherit] object-cover"
                      src={file.preview}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <p className="truncate text-[13px] font-medium">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatBytes(file.file.size)}
                    </p>
                  </div>
                </div>

                <Button
                  aria-label="Remove file"
                  className="-me-2 size-8 text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
                  onClick={() => removeFile(file.id)}
                  size="icon"
                  variant="ghost"
                >
                  <XIcon aria-hidden="true" />
                </Button>
              </div>
            ))}

            {/* Remove all files button */}
            {files.length > 1 && (
              <div>
                <Button
                  onClick={clearFiles}
                  size="sm"
                  variant="outline"
                >
                  Remove all files
                </Button>
              </div>
            )}
          </div>
        )}

        <p
          aria-live="polite"
          className="mt-2 text-center text-xs text-muted-foreground"
          role="region"
        >
          Multiple image uploader w/ image list ∙{" "}
          <a
            className="underline hover:text-foreground"
            href="https://github.com/cosscom/coss/blob/main/apps/origin/docs/use-file-upload.md"
          >
            API
          </a>
        </p>
      </div>
      <div className="w-full flex justify-end">
        <Button
          className="w-full"
          disabled={loading || !files.length}
          onClick={handleUpload}
        >
          {loading ? "Uploading..." : "Upload"}
        </Button>
      </div>
    </>
  );
}
