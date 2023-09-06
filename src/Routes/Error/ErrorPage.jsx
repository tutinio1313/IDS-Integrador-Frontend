import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
   return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Algo ha salido mal.</p>
      <p>
        <i>{error.status || error.data}</i>
      </p>
    </div>
  );
}