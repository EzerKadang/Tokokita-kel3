import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="text-white bg-primary h-[120px] px-9 py-[5px]">
      <div className="h-6 flex justify-between">
        <div>
          <ul className="flex items-center space-x-2 text-[13px] font-roboto font-light">
            <li>
              <Link to="#">Seller Centre</Link>
            </li>
            <hr className="border-r border-gray-300 h-4" />
            <li>
              <Link to="#">Mulai Berjualan</Link>
            </li>
            <hr className="border-r border-gray-300 h-4" />
            <li>
              <Link to="#">Download</Link>
            </li>
            <hr className="border-r border-gray-300 h-4" />
            <li className="flex items-center">
              <span>Ikuti kami di</span>
              <ul className="flex space-x-1">
                <li className="mx-2">
                  <a href="/" className="text-base">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="/" className="text-base">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center space-x-3 text-[13px] font-roboto font-light">
            <li>
              <Link to="/" className="flex items-center">
                <span>
                  <i className="fa-regular fa-bell mr-2 text-base"></i>
                </span>
                <span>Notifikasi</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center">
                <span>
                  <i className="fa-solid fa-circle-question mr-2 text-base"></i>
                </span>
                <span>Bantuan</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center">
                <span>
                  <i className="fa-solid fa-globe mr-2 text-base"></i>
                </span>
                <span>Bahasa Indonesia</span>
              </Link>
            </li>
            <li className="font-bold ">
              <Link to="/register">Daftar</Link>
            </li>
            <hr className="border-r border-gray-300 h-4" />
            <li className="font-bold">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
