export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div></div>
      <div className="flex-1 flex justify-center items-center">
        <main className="w-sm sm:w-md">{children}</main>
      </div>
    </div>
  );
}
