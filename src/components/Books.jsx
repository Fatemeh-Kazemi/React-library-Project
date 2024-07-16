import { getBooks } from "../data/data";
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";

const Books = () => {
  const [searchParams, setSearchParams]= useSearchParams()
  const location= useLocation()
  const books = getBooks();
  console.log(location)
  return (
    <>
      <div className="container">
      <div className="row mt-5 d-flex justify-content-around">
        <div className="col-12 col-md-4">
        <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
        <input
          type="text"
          dir="rtl"
          className="form-control"
          placeholder="جستجوی کتاب ..."
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({filter})
            } else {
              setSearchParams({})
            }
          }}
        />
      </div>
          <div className="list-group">
            {
              books.filter(book=>{
                let filter= searchParams.get("filter");
                if(!filter) return true;
                let name= book.name;
                return name.startsWith(filter)
              })
              .map((book) => (
                <NavLink className="list-group-item" to={`${book.id}${location.search}`} key={book.id}>
                  {book.name}
                </NavLink>
              ))
            }
          </div>
        </div>
        <Outlet />
      </div>
      </div>
    </>
  );
};

export default Books;
