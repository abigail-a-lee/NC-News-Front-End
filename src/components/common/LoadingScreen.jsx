import Spinner from "./Spinner";

function LoadingScreen() {
  return (
    <div className="flex h-screen">
      <div className="mx-auto drop-shadow-md scale-50">
        <Spinner />
      </div>
    </div>
  );
}

export default LoadingScreen;
