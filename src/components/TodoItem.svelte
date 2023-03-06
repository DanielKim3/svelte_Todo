<script>    
    export let todo;
    export let handleCheckTodo;
    export let handleRemoveTodo;
    export let editMode;
    export let handleEidtTodoItem;
    export let handleChangeEditMode;
</script>

<input 
    type="checkbox"
    bind:checked={todo.done}
    on:click={() => handleCheckTodo(todo.id)}
>
<a href="/#">X</a>
{#if editMode === todo.id}
<input 
    type="text"
    bind:value={todo.content}
    on:keyup={(e) => {handleEidtTodoItem(e, todo)}}
/>
{:else}
<span on:dblclick={() => handleChangeEditMode(todo.id)}>{todo.content}</span>
{/if}
<a href="#null" on:click={() => handleRemoveTodo(todo.id)}>X</a>
