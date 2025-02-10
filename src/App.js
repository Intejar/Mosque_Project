import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Route/Routes";

function App() {
  return (
    <div className="mx-auto min-h-screen bg-white dark:bg-slate-800">
      <RouterProvider router={router}></RouterProvider>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
