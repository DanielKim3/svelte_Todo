<script>
    import TodoItem from './TodoItem.svelte';
    import {fade, slide} from 'svelte/transition';
    import {flip} from 'svelte/animate';

    export let handleCheckTodo;
    export let handleRemoveTodo;
    export let editMode;
    export let handleEidtTodoItem;
    export let handleChangeEditMode;
    export let fetchTodos;
</script>

<div class="main">
    <ul>
        {#each fetchTodos as todo, index(todo)}
            <li 
                in:slide
                out:fade
                animate:flip={{duration:300}}
                >
                <TodoItem 
                    {todo}
                    {handleCheckTodo}
                    {handleRemoveTodo}
                    {editMode}
                    {handleEidtTodoItem}
                    {handleChangeEditMode}
                />
            </li>
        {/each}
    </ul>
</div>