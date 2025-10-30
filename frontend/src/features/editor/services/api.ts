import { apiClient } from "@/lib/api-client";

export const uploadFilesApi = async (files: File[]) => {
    if (!files || files.length === 0) throw new Error("No files selected");

    const formData = new FormData();

    files.forEach((file) => {
        formData.append("files", file);
    });

    try {
        const response = await apiClient.post(
            "/upload/uploadfiles/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        );

        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};
