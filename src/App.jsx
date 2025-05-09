import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
