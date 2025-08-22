import { Link } from "react-router-dom"

const Card = ({ title, music, id }) => {
  const imgSizes = {
    height: "350px",
    width: "300px",
    background: "black",
    objectFit: 'contain',
    margin: "5px",
  }

  return (

    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3  border-primary">
          <h4 className="my-0 fw-normal">{title}</h4>
        </div>
        <div className="card-body">
          {/* <img src={music} style={imgSizes}>
        </img> */}
          <Link to={`/myEvents/${id}`}>
            <button type="button" className="w-100 btn btn-lg btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Card
