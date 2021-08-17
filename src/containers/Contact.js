import { TextNumber } from "../components/TextNumber";
import "../styles/Contact.scss";
import { Tooltip } from "@material-ui/core";
import * as React from "react";

const EMAIL = "nathanmmacfarlane@gmail.com";

export const Contact = ({ section }) => {
  const [copied, setCopied] = React.useState(false);

  const clickedEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  };

  const clearCopied = () => {
    setTimeout(function () {
      setCopied(false);
    }, 750);
  };

  return (
    <div style={{ paddingTop: 100 }} className={section}>
      <div className="flex">
        <TextNumber num={4} text="Contact" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="contact-title">Let's Chat</h1>
      </div>
      <div className="flex">
        <p style={{ width: "65%", textAlign: "center" }}>
          My inbox is always open and I'd love to hear from you. Whether you
          have a question or just want to say hello, drop me an email and I'll
          get back to you.
        </p>
      </div>
      <div className="flex">
        <Tooltip title={copied ? "Copied" : "Copy"} placement="right" arrow>
          <p
            onMouseLeave={clearCopied}
            onClick={clickedEmail}
            className="contact-email"
          >
            {EMAIL}
          </p>
        </Tooltip>
      </div>
    </div>
  );
};
