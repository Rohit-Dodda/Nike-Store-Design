import { Announcement, Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'

const App = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Cart />
      <main className='flex flex-col relative gap-16'>
      <Hero heroapi={heroapi}  />
      <Sales type={popularsales} ifExists  />
      <FlexContent type={highlight} />
      <Sales type={toprateslaes} ifExists />
      <FlexContent type={sneaker} />
      <Stories story={story} />
    </main>
    <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
