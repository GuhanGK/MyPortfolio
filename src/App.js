import React from "react";
import "./App.css";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import MyWork from "./Components/Pages/MyWork";
import { FaNetworkWired } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "My Works",
    link: "#mywork",
    icon: <FaNetworkWired className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#footer",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const content = [
  {
    title: "Foresyt.co",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Track Task Management",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Hashching Admin",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];

function App() {
  return (
    <div className="">
      <Header navItems={navItems} />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="mywork">
        <MyWork content={content} />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}



export default App;
