import { useMutation } from "@tanstack/react-query";

export default function useScan() {
  return useMutation({
    mutationKey: ["use-scan"],
    mutationFn: async (image: File) => {
      if (!image) throw new Error("No Image provided");

      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("/api/scans", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to scan image");
      }

      return response.json();
    },
  });
}