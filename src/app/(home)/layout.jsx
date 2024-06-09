import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Dashboard | Hear4U",
  description: "Hear4U dashboard",
};

export default function RootLayout({ children }) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
}
