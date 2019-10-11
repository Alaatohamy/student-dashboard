import React from "react";
import { ReactComponent as Event } from "assets/event.svg";
import { ReactComponent as Time } from "assets/sands-of-time.svg";
import { CustomButton } from "components";
import "./calender.style.scss";

const Calender = () => {
  const CalenderData = [
    {
      key: 1,
      title: "Unit 2 quiz",
      icon: Time,
      iconTitle: "event",
      course: "Physics 02",
      topic: "Unit2 Motion and forces",
      dueTo: "20 Dec 2017 - 09:00 PM",
      buttonText: "Start Quiz"
    },
    {
      key: 2,
      title: "12 - 12 Assignment",
      icon: Event,
      iconTitle: "event",
      course: "Arabic K12",
      topic: "الوحدة الثانية - الافعال",
      dueTo: "20 Dec 2017 - 09:00 PM",
      buttonText: "Solve Assignment"
    }
  ];

  return (
    <section className="calender section">
      <header className="section__header">
        <div className="section__header__content">
          <h2 className="section__title">What's due</h2>
          <p className="section__note">Sometimes late becomes ..</p>
        </div>
        <a className="section__link" href="/announcements">
          All
        </a>
      </header>
      <ul>
        {CalenderData.map(
          ({
            key,
            title,
            icon,
            iconTitle,
            course,
            topic,
            dueTo,
            buttonText
          }) => {
            let Icon = icon;
            let fullDate = new Date(dueTo.split("-")[0]);
            let year = fullDate.getFullYear();
            let month = fullDate.getMonth();
            let day = fullDate.getDay();

            return (
              <li key={key}>
                <h3>
                  <span>
                    <Icon
                      title={iconTitle}
                      aril-role="personation"
                      className="icon"
                    />
                  </span>
                  {title}
                </h3>
                <p>Course: {course}</p>
                <p>Topic: {topic}</p>
                <p>
                  Due to:{" "}
                  <time dateTime={`${year}-${month}-${day}`}>{dueTo}</time>
                </p>
                <CustomButton
                  type="button"
                  color="transparent"
                  text={buttonText}
                />
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Calender;
