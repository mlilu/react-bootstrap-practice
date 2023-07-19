import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LandingPage from "./pages/landing";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <LandingPage />;
      break;
    case "/home":
      Component = <HomePage />;
      break;
    case "/about":
      Component = <AboutPage />;
      break;
    case "/contact":
      Component = <ContactPage />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
