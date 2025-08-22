
const About = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom" >
      <h1 className="display-4 fw-bold text-body-emphasis">Event Hive</h1>
      <div className="col-lg-6 mx-auto">

        <p className="lead mb-4">
          In a city that never stops, you shouldn't have to either. We started Event Hub for one simple reason: to connect you to the pulse of your city. We're a passionate team dedicated to uncovering the best events—from major concerts to hidden gems—and putting them all at your fingertips. Stop searching, start experiencing.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3"> Contact Us</button>
          {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">View</button> */}
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
          <img
            src="../../public/assets/logo.jpeg"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default About
