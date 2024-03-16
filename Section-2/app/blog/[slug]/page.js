export default function BlogPostPage({ params }) {
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to Single Blog page!</h1>
      <p>{JSON.stringify(params)}</p>
    </>
  );
}
