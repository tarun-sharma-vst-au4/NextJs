import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  //console.log("%c%s", "color: #8c00ff", router.pathname);

  console.log(router.pathname); //^ -  /portfolio/[projectid] - prints the folder path
  console.log(router.query); //? - {projectid: 'hello'} - suppose path is /portfolio/hello then router.query will print the given object

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
