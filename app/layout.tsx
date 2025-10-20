import "./globals.css";

export const metadata = {
  title: "Devil's Advocate Chatbot",
  description:
    "A specialized AI chatbot designed to challenge your statements and beliefs with thoughtful counterarguments at your chosen intensity level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
