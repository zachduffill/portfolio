<style>
.card {
    --card-bg: rgba(0, 0, 30, 0.035);
    --card-border: rgba(0, 0, 30, 0.035);

    background-color: var(--card-bg);
    border: 2px solid var(--card-border);
    border-radius: 5px;
    padding: 8px;
}
</style>

<div class="card" {...$$restProps}>
    <slot></slot>
</div>