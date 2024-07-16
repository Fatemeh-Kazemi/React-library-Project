import aboutPic from "../images/about.jpg"

const About = () => {
  return (
    <div style={{textAlign: "center"}}>
      <img style={{width: "80%", height: "70vh"}} className="my-4" src={aboutPic} alt="" />
      <h4>ما همه روزه از ساعت 7:00 الی 21:00 آماده خدمت رسانی هستیم</h4>
    </div>
  )
}

export default About
