import { eventsData } from "../Data";
import Card2 from './Card2';

const ViewEvents = () => {
  return (<>
    <div class="container py-3">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Scene Kya Hai?</h1>
        <p className="fs-5 text-body-secondary">
          Your Guide to What's Happening.
          Effortlessly find and join the best events, workshops, and meetups near you.
        </p>
      </div>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {
            eventsData.map((curr) => {
              return <Card2 key={curr.id} title={curr.title} id={curr.id} url={curr.imageUrl} />
            })
          }

        </div>
      </main>
    </div>
  </>
  )
}

export default ViewEvents
