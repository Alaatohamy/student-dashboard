import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CustomButton } from "components";
import { fakeQuizService } from "redux/quizzes/actions";
import "./calender.style.scss";

const Calender = ({ calenderData, getQuizzesList }) => {
  useEffect(() => {
    getQuizzesList();
  }, [getQuizzesList]);

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
        {calenderData.map(
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

const mapState = state => ({
  calenderData: state.quiz.quizzesList
});

const mapDispatch = dispatch => ({
  getQuizzesList: () => dispatch(fakeQuizService())
});

export default connect(
  mapState,
  mapDispatch
)(Calender);
