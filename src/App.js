import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Navbar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
