import React from "react";
import "./announcements.style.scss";
import defaultImg from "assets/user.svg";

const Announcements = () => {
  // [TODO] check emoji
  const announcementsData = [
    {
      key: 1,
      owner: "Alaa Tohamy",
      position: "Senior frontend",
      content: [
        "Search on me to get latest tech news ",
        <span key="emoji_1" role="img" aria-label="Smiling Face with Sunglass">
          &#128526;
        </span>
      ]
    },
    {
      key: 2,
      owner: "Alaa Tohamy",
      position: "Senior frontend",
      content: [
        "Search on My talk about GraphQL Clients ",
        <span key="emoji_2" role="img" aria-label="Smiling Face with Sunglass">
          &#128526;
        </span>
      ]
    },
    {
      key: 3,
      owner: "Mr.Ahmed",
      position: "Math 101",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <section className="announcements section">
      <header className="section__header">
        <div className="section__header__content">
          <h2 className="section__title">Announcements</h2>
          <p className="section__note">we educate, keep updated</p>
        </div>
        <a className="section__link" href="/announcements">
          All
        </a>
      </header>
      <ul className="announcements__list">
        {announcementsData.map(item => (
          <li key={item.key} className="announcement">
            <img
              src={item.img ? item.img : defaultImg}
              className="announcement__img"
              alt={item.owner}
            />
            <div className="announcement__owner">
              <p className="announcement__owner__name">{item.owner}</p>
              <p className="announcement__owner__position">{item.position}</p>
            </div>
            <p className="announcement__content">{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Announcements;
