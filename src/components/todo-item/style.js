import styled from "styled-components";

export const TodoItems = styled.div`
  width: 380px;
  border-bottom: 2px solid rgba(72, 64, 64, 0.37);
  margin: 0 auto;
  padding: 5px;
  height: auto;
  .todo_items_top {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 100%;
    }
    h1 {
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.7);
      width: 300px;
    }
    .todo_icon {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    button {
      border: none;
      background-color: transparent;
      color: rgba(191, 86, 255, 0.79);
      cursor: pointer;
      font-size: 18px;
    }
  }
  input {
    width: 80%;
    padding: 4px;
    outline: none;
    background-color: #25273c;
    border: none;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.7);
  }
`;
