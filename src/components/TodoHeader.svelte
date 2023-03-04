<script>
    export let todoValue;
    export let handleTodoInputKeyup
    /**
     * on:keyup => 키보드의 키가 눌러졌다 올라갈 때 작동하는 이벤트
    */
</script>
<header>
    <div class="wrap">
        <h1>SVELTE TODO</h1>
        <input 
            type="text"
            bind:value={todoValue}
            on:keyup={handleTodoInputKeyup}
        />
    </div>
</header>