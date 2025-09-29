import type { Metadata } from "next"
import "../globals.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: {
    template: "%s - Grocerystore online store",
    default: "Grocerystore online store",
  },
  description: "Grocerystore online store, if you do not believe me, then I will believe you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
    </ClerkProvider>
  );
}
