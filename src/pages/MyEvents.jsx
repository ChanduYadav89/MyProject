
const MyEvents = () => {
  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <div className="list-group list-group-checkable d-grid gap-2 border-0">
        <h1>My Events..</h1>
        <input
          className="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios1"
          defaultValue=""
          // Changed 'checked' to 'defaultChecked' for React compatibility
          defaultChecked
        />
        <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios1">
          Music Concert
          <span className="d-block small opacity-50">With support text underneath to add more detail</span>
        </label>

        <input
          className="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios2"
          defaultValue=""
        />
        <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios2">
          Seminar Dive into Artificial Intelligence
          <span className="d-block small opacity-50">Some other text goes here</span>
        </label>

        <input
          className="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios3"
          defaultValue=""
        />
        <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios3">
          Talent Show
          <span className="d-block small opacity-50">And we end with another snippet of text</span>
        </label>

        <input
          className="list-group-item-check pe-none"
          type="radio"
          name="listGroupCheckableRadios"
          id="listGroupCheckableRadios4"
          defaultValue=""
          disabled
        />
        <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios4">
          Fourth disabled radio
          <span className="d-block small opacity-50">This option is disabled</span>
        </label>

      </div>
    </div>
  )
}

export default MyEvents
