import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
