import React from "react";
import AddSvg from "../../icons/Add";
import { TodoOverflow, TodoSection } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addList, addAxios } from "../../config/todo-slice";
import TodoItem from "../todo-item/todo-item";
import { request } from "../../axios/axios";
const AddTodo = () => {
  const [data, setData] = React.useState("");
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todoSlice);
  const ref = React.useRef();
  React.useEffect(() => {
    const fetch = async () => {
      const response = await request.get("/list");
      dispatch(addList(response.data));
    };
    fetch();
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (data.length == 0) {
      ref.current.style.border = "1px solid red";
      return;
    }
    ref.current.style.border = "none";
    const addPost = async () => {
      const res = await request.post("/list", { list: data });
      dispatch(addAxios(res.data));
    };
    addPost();
    setData("");
  };
  return (
    <>
      <TodoSection>
        <div className="todo_title">
          <h1>TODO</h1>
          <p>By: Davron Raimjonov</p>
        </div>
        <form onSubmit={submit}>
          <input
            ref={ref}
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            placeholder="Create a new todo..."
          />
          <button type="submit">
            <AddSvg />
          </button>
        </form>
        <TodoOverflow>
          {list.map((item) => (
            <TodoItem key={item.id} {...item} />
          ))}
        </TodoOverflow>
      </TodoSection>
    </>
  );
};

export default AddTodo;
