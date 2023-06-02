import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Nav, Contents, Layout } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout nav={<Nav />} mainContent={<Contents />} />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
