import React, { useEffect, useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  const { onDelete, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    if (window.confirm(`${id + 1}번 째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleQuitEdit = () => {
    toggleIsEdit();
    setLocalContent(content);
  };

  const handieEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="diary-item">
      <div className="info">
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          />
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handieEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
