import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// types/scan.ts
export type ScanSummary = {
  id: string;
  summary: string;
  imageUrl: string | null;
  userId: string;
  createdAt: string; // ISO string from NextResponse.json
  updatedAt: string;
};

export type GetScansResponse = {
  data: ScanSummary[];
};

export function useCreateScan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["use-scan"],
    mutationFn: async ({
      image,
      hasActiveSubscription,
    }: {
      image: File;
      hasActiveSubscription: boolean;
    }) => {
      if (!image) throw new Error("No Image provided");

      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("/api/scans", {
        method: "POST",
        body: formData,
        headers: {
          "x-has-subscription": String(hasActiveSubscription),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to scan image");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["use-get-scans"] });
    },
  });
}

export function useGetScans() {
  return useQuery<GetScansResponse, Error>({
    queryKey: ["use-get-scans"],
    queryFn: async () => {
      const response = await fetch("/api/scans", {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to scan image");
      }

      return response.json() as Promise<GetScansResponse>;
    },
  });
}
