import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import Button from "./components/Button.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Home
        title="Thank you!"
        message={
          <div className="container flex flex-wrap flex-col gap-4 justify-center items-center">
            <p className="body-2 text-n-2">Thank you for your message. I will be in touch shortly.</p>
            <Button className="rounded-2xl bg-n-7 border border-n-5 p-2 w-[10rem]" href="https://tannerr23.github.io/tanners-website/">
              Go Back
            </Button>
          </div>
        }
        msgStyling="body-2 text-n-2"
      />
    </div>
  </StrictMode>
);
