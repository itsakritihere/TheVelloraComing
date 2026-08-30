import { Toaster } from "react-hot-toast";
import "./App.css";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <>
      <ComingSoon />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
        }}
      />
    </>
  );
}

export default App;

