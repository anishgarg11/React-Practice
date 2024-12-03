import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const TodoList =({data,checked, onhandleCheckedTodo, handleDelete})=>{
    return(
        <li className="todo-item">
                <span className= {checked ? "checkList": "notCheckList"}>{data}</span>
                <button className="check-btn" onClick={()=> onhandleCheckedTodo(data)}>
                  <CheckIcon />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(data)}
                >
                  <DeleteForeverIcon/>
                </button>
              </li>

    )
}