import { reviews } from "../../constants"
import ReviewsCard from "./ReviewsCard"

const CustomerReviews = () => {
  return (
    <section  className="max-container">
      <h3  className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span  className="text-coral-red"> Customers </span>
        Say ?
      </h3>
      <p  className="m-auto mt-4 max-w-lg font-montserrat text-slate-gray text-lg leading-7 ">
      Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div  className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {
          reviews.map((item,index)=>(
            <ReviewsCard   key={index} {...item}/>
          ))
        }
      </div>
    </section>
  )
}
export default CustomerReviews