import Form from "./Form";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import Questions from "./Questions";

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Form />
      <Questions />
    </>
  );
}

export default App;
