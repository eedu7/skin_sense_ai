import { Button } from "@/components/ui/button";
import UploadForm from "../components/upload-form";

export const UploadPageView = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="w-sm sm:w-md md:w-lg lg:w-xl xl:w-2xl 2xl:w-3xl p-4 space-y-8">
        <UploadForm />
        
      </div>
    </div>
  );
};
