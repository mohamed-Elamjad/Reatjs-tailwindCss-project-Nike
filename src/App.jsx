import CustomerReviews from "./Components/CustomerReviews/CustomerReviews"
import NavBar from "./Components/NavBar"
import Footer from "./Section/Footer"
import Hero from "./Section/Hero"
import PopularProducts from "./Section/PopularProducts"
import Services from "./Section/Services"
import SpecialOffer from "./Section/SpecialOffer"
import Subscribe from "./Section/Subscribe"
import SuperQuality from "./Section/SuperQuality"
const App = () => {
  return (
    <main  className="relative">
      <NavBar/>
      <section  className="xl:pl-16 pl-8 wide:pr-16 pr-8 
      sm:pb-24 pb-12">
        <Hero/>
      </section>
      <section  className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts/>
      </section>
      <section  className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality/>
      </section>
      <section  className="py-10 sm:px-16 px-8">
        <Services/>
      </section>
      <section  className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffer/>
      </section>
      <section  className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
        <CustomerReviews/>
      </section>
      <section  className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section  className="bg-black sm:px-16 px-8   sm:pt-20 pt-8 pb-8">
        <Footer/>
      </section>
    </main>
  )}
export default App