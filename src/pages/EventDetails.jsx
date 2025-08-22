import './card.css'
import { eventsData } from '../Data.js'
const EventDetails = () => {
  console.log(eventsData)
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <svg
          className="bi mt-4 mb-3"
          style={{ color: 'var(--bs-indigo)' }}
          width="100"
          height="100"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
        <h1 className="text-body-emphasis">{eventsData[0].title}</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorum perspiciatis fuga nesciunt similique, voluptatum ipsam exercitationem vero cupiditate nostrum beatae atque perferendis unde. Aspernatur harum reprehenderit doloribus mollitia maiores?
        </p>
        <div className="d-inline-flex gap-2 mb-5">

          <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
