const todoKey = "reactTodo";

export const getLocalStorageTododata = ()=>{
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    try {
      return JSON.parse(rawTodos);
    } catch (error) {
      console.log("Error Parsing licalStorage data:", error);
      return [];
    }
  }

 export const setLocalStorageTododata = (task)=>{
    // Add data to localStorage
    return localStorage.setItem(todoKey, JSON.stringify(task));
    
  }