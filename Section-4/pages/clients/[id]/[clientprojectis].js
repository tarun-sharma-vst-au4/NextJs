import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  //^ here the pathname for our url - http://localhost:3000/clients/hello/hii
  console.log(router.query);
  //& here we have our nested dynamic path as /clients/hello/hii which corresponds to our dynamic path '/clients/[id]/[clientprojectis]'

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
