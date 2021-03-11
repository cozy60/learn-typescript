// type Todo = { // 타입별칭
//   id: number,
//   title: string,
//   done: boolean;
// }

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[]; // 할일 목록을 받는 배열
// 배열 안의 내용이 객체이기에 object[] 라는 타입을 지정한다.

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): { id: number; title: string; done: boolean; }[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void { // 함수의 반환 타입
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void { // 할일 완료 처리
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object { // 할일 목록에서 첫번째 걸 반환한다.
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: "아이템 4",
    done: false
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: "아이템 5",
    done: false
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
