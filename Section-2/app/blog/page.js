import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to Blog pages!</h1>
      <Link href="blog/post-1">Post 1</Link>
      <Link href="blog/post-2">Post 2</Link>
    </>
  );
}
