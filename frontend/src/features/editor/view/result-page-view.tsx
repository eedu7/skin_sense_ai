"use client"
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { TrashIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Result = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

const results: Result[] = [
  {
    createdAt: "2025-10-30 10:00:00",
    description:
      "Comprehensive analysis of blood components, glucose levels, and overall health indicators.",
    id: "1",
    title: "Blood Test Report",
  },
  {
    createdAt: "2025-10-29 09:30:00",
    description:
      "Detailed MRI scan showing brain structure and highlighting any abnormal findings.",
    id: "2",
    title: "MRI Brain Scan",
  },
  {
    createdAt: "2025-10-28 16:45:00",
    description:
      "X-ray result evaluating lung clarity and bone structure of the chest region.",
    id: "3",
    title: "Chest X-Ray",
  },
  {
    createdAt: "2025-10-27 14:10:00",
    description:
      "Computed tomography of the abdomen showing organ details and any possible inflammation.",
    id: "4",
    title: "CT Abdomen Scan",
  },
  {
    createdAt: "2025-10-26 11:20:00",
    description:
      "Urinalysis result showing kidney function and signs of infection or metabolic issues.",
    id: "5",
    title: "Urine Test Report",
  },
  {
    createdAt: "2025-10-25 17:05:00",
    description:
      "Electrocardiogram report analyzing heart rhythm and electrical activity.",
    id: "6",
    title: "ECG Report",
  },
  {
    createdAt: "2025-10-24 13:40:00",
    description:
      "Comprehensive report on liver enzyme levels and bilirubin concentration.",
    id: "7",
    title: "Liver Function Test",
  },
  {
    createdAt: "2025-10-23 08:55:00",
    description:
      "Assessment of kidney health, including urea, creatinine, and electrolyte balance.",
    id: "8",
    title: "Kidney Function Report",
  },
  {
    createdAt: "2025-10-22 12:30:00",
    description:
      "Detailed report showing T3, T4, and TSH hormone levels for thyroid evaluation.",
    id: "9",
    title: "Thyroid Profile",
  },
  {
    createdAt: "2025-10-21 15:15:00",
    description:
      "Test measuring vitamin D levels and evaluating bone health and immunity factors.",
    id: "10",
    title: "Vitamin D Test",
  },
];

export const ResultPageView = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col h-screen py-8">
      <div className="mb-6 border-b pb-2">
        <h1 className="text-2xl font-bold font-mono text-center">
          Results - History
        </h1>
      </div>
      <div className="flex flex-col w-full gap-y-4 flex-1 overflow-hidden">
        <Input className="px-4 py-6 rounded-xl" placeholder="Search" />
        <small className="text-xs text-gray-600 font-sans mx-2">
          Results:
        </small>
        <ScrollArea className="h-full pr-4">
          <ul className="space-y-4">
            {results.map(
              ({ id, title, createdAt, description }) => (
                <li className="w-full" key={id}>
                  <Link
                    className="block w-full p-2 rounded-lg border hover:bg-gray-50 hover:shadow transition"
                    href={`/results/${id}`}
                  >
                    <div className="space-y-2 font-mono">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">
                          {title}
                        </p>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            // Deltet the id
                          }}
                          size="icon"
                          type="button"
                          variant="outline"
                        >
                          <TrashIcon className="size-4" />
                        </Button>
                      </div>
                      <p className="text-sm whitespace-normal  max-w-full text-gray-600">
                        {description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Created: {createdAt}
                      </p>
                    </div>
                  </Link>
                </li>
              ),
            )}
            <li className="h-24"></li>
          </ul>
          <Scrollbar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
};
