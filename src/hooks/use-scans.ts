import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function useScan() {
    return useMutation({
        mutationKey: ["use-scan"],
        mutationFn: async (image: File) => {
            if (!image) {
                throw new Error("No Image provided");
            }

            const delay = Math.floor(Math.random() * 2000) + 5000;
            await new Promise((res) => setTimeout(res, delay));

            return {
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas obcaecati rerum id. Asperiores aspernatur eos nihil odit ipsum. Odit quo omnis corrupti ducimus adipisci culpa excepturi assumenda, sit quam.",
                imageName: image.name,
                size: image.size,
            };
        },
    });
}
