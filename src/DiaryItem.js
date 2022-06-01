import React from "react";

const DiaryItem = ({ author, content, created_date, emotion }) => {
  return (
    <div className="diary-item">
      <div className="info">
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">일기: {content}</div>
    </div>
  );
};

export default DiaryItem;
