import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  //& for path - http://localhost:3000/blog/2020/12 we get the router.query as { slug : ['2020','12']}
  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  );
}

export default BlogPostsPage;
