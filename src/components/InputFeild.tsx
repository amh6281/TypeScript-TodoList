import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a ToDo"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputFeild;
