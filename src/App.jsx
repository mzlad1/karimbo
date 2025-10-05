import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        {/* Navbar Section */}
        <Navbar />

        {/* All Sections Combined */}
        <HomePage />
      </div>
    </LanguageProvider>
  );
}

export default App;
