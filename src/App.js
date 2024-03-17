import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-nunito">
        <Header />
      </div>
    </BrowserRouter>
  )
}