import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Review QR - Smart Review Management System",
  description: "Manage your online reputation and Google reviews with Review QR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}