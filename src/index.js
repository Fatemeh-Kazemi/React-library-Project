import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Books from "./components/Books";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main className="text-primary text-center">
                  یک کتاب را انتخاب کنید تا جزئیات آن نمایش داده شود
                </main>
              }
            ></Route>
            <Route path=":bookId" element={<Book />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
