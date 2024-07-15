import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./layout/MainLayout";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#F6F8FA] p-6 h-[100vh]">
        <MainLayout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
