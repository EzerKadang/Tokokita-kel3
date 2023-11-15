import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes></Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
