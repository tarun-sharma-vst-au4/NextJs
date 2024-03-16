import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  console.log("On server...");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <a href="/about">About Us InCorrect</a>
      </p>
      <p>
        <Link href="/about">About Us Correct</Link>
      </p>
    </main>
  );
}
