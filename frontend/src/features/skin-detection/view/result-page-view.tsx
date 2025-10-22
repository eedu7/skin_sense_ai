import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export const ResultPageView = () => {
  return (
    <div className="max-w-4xl mx-auto flex justify-center items-center h-screen">
      <Card className="w-sm sm:w-md lg:w-lg">
        <CardHeader>
          <CardTitle>Result</CardTitle>
          <CardDescription>Of skin cancer detection</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sr.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Skin Cancer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p className="text-gray-400 text-sm text-center">
            There is no human supervision on this ai model. Double check every
            detail. AI have mmany chanches to ignore many details.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
