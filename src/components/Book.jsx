import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const params = useParams();
  const book = getBook(params.bookId);
  if (book) {
    return (
      <>
        <div className="col-12 col-md-6">
        <div class="card" id="book-parent">
          <img id="book-image" src={book.img || "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.1518270500.1717372800&semt=sph"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 className="card-title">
              نام کتاب: {book.name}
            </h4>
            <p class="card-text">
              {book.description}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li className="list-group-item">
              <span>قیمت: </span>
              {book.price}
            </li>
            <li className="list-group-item">
              <span>نویسنده: </span>
              {book.author}
            </li>
          </ul>
          <div class="card-body">
            <button class="btn btn-primary" onClick={() =>{
              deleteBook(book.id);
              navigate("/books" + location.search);
            }}>
              حذف کتاب
            </button>
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return <div className="text-center">کتاب مورنظر در حال حاضر موجود نمی باشد</div>;
  }
};

export default Book;
