import contactPic from "../images/contact.png"

const Contacts = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <img className="col-12 col-md-5" src={contactPic} alt="" />
      <h4>شماره مرکز: 02184579514</h4>
    </div>
  )
}

export default Contacts
