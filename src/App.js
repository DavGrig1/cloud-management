import React, {useState} from 'react';
import { About } from "./components/About";
import { Platforms } from "./components/Platforms";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Support } from "./components/Support";
import { LogInPopup } from "./components/LogInPopup";

function App() {

  const [signIn, setSignIn] = useState(false)

  return (
    <div>
      <LogInPopup trigger={signIn} setTrigger={setSignIn}/>
      <Navbar setTrigger={setSignIn}/>
      <Home />
      <About />
      <Support />
      <Platforms />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
