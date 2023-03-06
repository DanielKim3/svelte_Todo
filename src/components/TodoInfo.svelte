<script>
    import constant from "../constant";

    export let todoCount;
    export let viewMode;
    export let handleChangeViewMode;
</script>
<div class="info">
    <span>총 {todoCount}건</span>
    <div>
        <button class="btn"
            class:selected={viewMode === constant.ALL}
            on:click={() => handleChangeViewMode(constant.ALL)}
        >전체보기</button>
        <button class="btn"
            class:selected={viewMode === constant.ACTIVE}
            on:click={() => handleChangeViewMode(constant.ACTIVE)}
        >진행중</button>
        <button class="btn"
            class:selected={viewMode === constant.DONE}
            on:click={() => handleChangeViewMode(constant.DONE)}
        >완료</button>
    </div>
</div>