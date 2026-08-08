import Header from '../components/Header.jsx'
import Invitation from '../components/Invitation.jsx'
import Layout from '../components/Layout.jsx'
import Highlights from '../components/Highlights.jsx'
import Visit from '../components/Visit.jsx'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'
import CallBar from '../components/CallBar.jsx'

export default function LaunchPage() {
  return (
    <>
      <Header />
      <main id="top">
        <Invitation />
        <Layout />
        <Highlights />
        <Visit />
        <About />
      </main>
      <Footer />
      <CallBar />
    </>
  )
}
