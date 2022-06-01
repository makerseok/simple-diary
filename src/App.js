import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김철수",
    content: "하이 1",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "박영희",
    content: "하이 2",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "정깔깔",
    content: "하이 3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "유하하",
    content: "하이 4",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
