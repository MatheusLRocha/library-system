import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Library Home'
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
