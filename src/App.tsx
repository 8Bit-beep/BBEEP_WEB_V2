import React, { useState } from "react";
import Header from "./components/common/Header";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
