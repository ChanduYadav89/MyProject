
const CreateEvents = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
      <div class="container py-3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={handleClick} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Event Title</label>
            <textarea type="text" className="form-control" id="descrbe" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Describe Your Event</label>
            <textarea type="text" className="form-control" id="descrbe" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Event Details</label>
            <textarea type="text" className="form-control" id="event" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Agree terms and conditions </label>
          </div>
          <button type="submit" className="btn btn-primary">Create </button>
        </form>
      </div>
    </>
  )
}

export default CreateEvents
