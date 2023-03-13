<script>
	import TodoHeader from "./components/TodoHeader.svelte";
	import TodoInfo from "./components/TodoInfo.svelte";
	import TodoList from "./components/TodoList.svelte";
	import Constant from "./constant";

	import {v4 as uuid} from 'uuid';

	let todos = [
		{
			id: uuid(),
			content: '첫 번째 할일',
			done: false
		},
		{
			id: uuid(),
			content: '두 번째 할일',
			done: false
		},
		{
			id: uuid(),
			content: '세 번째 할일',
			done: true
		},
		{
			id: uuid(),
			content: '네 번째 할일',
			done: false
		}
	];

	let todoValue = "";
	let editMode = "";
	let viewMode = "";

	$: todoCount = fetchTodos.length;

	$: fetchTodos = todos;

	$: {
		if(viewMode === Constant.ALL) fetchTodos = todos;
		if(viewMode === Constant.ACTIVE) fetchTodos = todos.filter(todo => todo.done === false);
		if(viewMode === Constant.DONE) fetchTodos = todos.filter(todo => todo.done === true);
	}

	function handleCheckTodo(id){
		todos = todos.map(todo => {
			if(todo.id === id){
				todo.done = !todo.done;
			}
			return todo
		})
	};

	function addTodoItem(){
		if(todoValue){
			const newTodo = {
				id: uuid(),
				content: todoValue,
				done: false,
			}
			todos = [...todos, newTodo];
			todoValue = "";
		}
	};

	function handleTodoInputKeyup(e){
		if(e.keyCode === 13){
			console.log(`todoValue: ${e.target.value}`)
			addTodoItem();
		}
	};

	function handleRemoveTodo(id){
		todos = todos.filter(todo => todo.id !== id);
	};

	function handleChangeEditMode(id){
		editMode = id;
	};

	function closeEditMode(){
		editMode = "";
	};

	function handleEidtTodoItem(e, eidtTodo){
		if(e.keyCode === 13){
			editTodoItem(eidtTodo);
		}
	};

	function editTodoItem(editTodo){
		todos = todos.map(todo => {
			if(todo.id === editTodo.id){
				todo = editTodo
			}
			return todo;
		});
		closeEditMode();
	};

	function handleChangeViewMode(mode){
		viewMode = mode;
	}
</script>

<body>
	<div class="app">
		<TodoHeader bind:todoValue={todoValue} {handleTodoInputKeyup}/>
		<TodoInfo 
			{todoCount}
			{viewMode}
			{handleChangeViewMode}
		/>
		<TodoList
			{todos}
			{editMode}
			{fetchTodos}
			{handleCheckTodo}
			{handleRemoveTodo}
			{handleChangeEditMode}
			{handleEidtTodoItem}
		/>
	</div>
</body>