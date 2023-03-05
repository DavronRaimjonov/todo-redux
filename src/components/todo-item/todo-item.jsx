import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../axios/axios";
import { deletList, editList } from "../../config/todo-slice";
import useTogle from "../../hooks/useTogle";
import { TodoItems } from "./style";

const TodoItem = ({ list, id }) => {
  const disaptch = useDispatch();
  const [value, setValue] = React.useState(list);
  const deletTodo = async (id) => {
    await request.delete("/list/" + id);
    disaptch(deletList(id));
  };
  const { open, isOpen, isClosed } = useTogle();
  const editLists = async () => {
    const res = await request.put("/list/" + id, { list: value });
    disaptch(editList(res.data));
    isClosed();
  };
  return (
    <TodoItems>
      <div className="todo_items_top">
        <div className="title">
          {open ? (
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              value={value}
            />
          ) : (
            <h1>{list}</h1>
          )}
        </div>

        <div className="todo_icon">
          <button onClick={() => deletTodo(id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
          {open ? (
            <button onClick={() => editLists(list)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          ) : (
            <button onClick={isOpen}>
              <i className="fa-solid fa-pencil"></i>
            </button>
          )}
        </div>
      </div>
    </TodoItems>
  );
};

export default TodoItem;
