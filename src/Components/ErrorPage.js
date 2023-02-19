import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>UH OH!</h1>
      <h2> Something Went Wrong </h2>
      <h2> Here's some info: {error?.status + error?.data?.message} </h2>
    </div>
  );
};
export default ErrorPage;
