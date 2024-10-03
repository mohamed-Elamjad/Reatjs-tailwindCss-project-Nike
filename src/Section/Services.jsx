import ServicesCart from "../Components/ServicesCart"
import { services } from "../constants"
const Services = () => {
  return (
    <section  className="max-container  flex justify-center  flex-wrap gap-9">
      {
        services.map((item)=>(
          <ServicesCart  key={item.label} {...item}/>
        ))
      }
    </section>
  )
}
export default Services