import { ContextProvider } from "./pages/context/Context";
import Layouts from "./pages/layout/Layouts";

function App() {
  return (
    <ContextProvider>
      <Layouts />
    </ContextProvider>
  );
}

export default App;
