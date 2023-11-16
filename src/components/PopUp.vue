<template>
    <div class="popup">
        <div class="popup-inner">
            <solt />
            <button class="popup-close">Close popup</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style  lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgb(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        background-color: #fff;
        padding: 32px;
    }
}
</style>