"use client";
import { useState } from "react";
import styles from "./Referrals.module.scss";
import Image from "next/image";
import email from "../../public/assets/email.svg";
import success from "../../public/assets/success.svg";

export default function ReferralsInput() {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<string | undefined>(undefined);

  let icon = state !== "success" ? true : false;
  let placeholder = state !== "success" ? "Enter your email address" : "";
  let wrap = state !== "success" ? false : true;
  let btnlabel = state !== "success" ? "Get referral link" : "Copy";

  function handleChange() {
    setState(value);
  }

  function handleClick() {
    if (state === undefined || state === "error") {
      if (value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
        setState("success");
        postEmail(value);
        setValue("https://ratepunk.com/referral");
      } else {
        setState("error");
      }
    } else {
      navigator.clipboard.writeText(value);
    }
  }

  function postEmail(email: string) {
    let req = new XMLHttpRequest();
    const json = JSON.stringify({ email: email });

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open(
      "PUT",
      "https://api.jsonbin.io/v3/b/648c81b59d312622a37097fc",
      true
    );
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Access-Key",
      "$2b$10$X9vjdBQe7uG6dUzEQNqzgO14CYs7oUW0ewkGUTroYFXq.3cJnZawm"
    );
    req.send(json);
  }

  return (
    <div>
      {state === "success" && (
        <div className={styles.success}>
          <Image src={success} alt="success" width={32} height={32} />
          <p>Your email is confirmed!</p>
        </div>
      )}
      {state === "error" && <div className={styles.error}>Error state</div>}
      <div className={[styles.input, wrap ? styles.wrap : ""].join(" ")}>
        <div className={styles.icon}>
          {icon ? <Image src={email} alt="email" /> : null}
        </div>

        <input
          className={[
            icon ? "" : styles.input__noicon,
            wrap ? styles.input__thin : "",
          ].join(" ")}
          type="email"
          name="email"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (e.target.value.length === 0) setState(undefined);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick();
          }}
        />
        <button
          className={wrap ? styles.button__thin : ""}
          onClick={handleClick}
        >
          {btnlabel}
        </button>
      </div>
    </div>
  );
}
