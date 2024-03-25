import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p onClick={() => navigate("/")} className="cursor-pointer">
        Click here to return
      </p>
    </div>
  );
}
