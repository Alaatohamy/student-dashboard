import React from "react";
import { CustomButton } from "components";
import "./highlights.style.scss";

const Highlights = () => {
  return (
    <aside className="highlights section">
      <h2 className="highlights__title">Exams Time</h2>
      <p className="highlights__content">
        Here we are , Are you ready to fight? Don't worry, we prepared some tips
        to be ready for your exams.
      </p>
      <p className="highlights__quat">
        <q cite="">Nothing happens until something moves.</q> Albert Einstein
      </p>
      <CustomButton text="View exams tips" color="filled" type="button" />
    </aside>
  );
};

export default Highlights;
