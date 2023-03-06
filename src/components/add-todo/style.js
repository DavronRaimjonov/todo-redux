import styled from "styled-components";

export const TodoSection = styled.section`
 .todo_title {
    display: flex;
    align-items: center;
    margin-top: 45px;
    gap: 20px;
    p {
      color: #fff;
      padding-top: 20px;
    }
    h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      letter-spacing: 0.1em;
      color: #fff;
      padding-left: 40px;
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      background-color: #25273c;
      width: 350px;
      border: none;
      outline: none;
      height: 32px;
      padding-left: 10px;
      border-radius: 10px 0 0 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.7);
    }
    button {
      background-color: #5aff31;
      border: none;
      outline: none;
      height: 30px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
    }
  }
`;
export const TodoOverflow = styled.div`
  height: 300px;
  overflow-x: auto;
`;
