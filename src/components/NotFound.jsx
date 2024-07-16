import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div style={{textAlign: "center"}}>
      <div id="notfound-bg"></div>
      <NavLink to="/" className="btn btn-primary" >بازگشت به صفحه اصلی</NavLink>
    </div>
  )
}

export default NotFound
