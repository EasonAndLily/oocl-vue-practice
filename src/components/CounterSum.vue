<template>
    <div id="counter-sum">
        <label>现在的总数是：{{counterNumberSum}}</label>
    </div>
</template>

<script>
export default {
    props: ["counterNumberSum"],
    name: "counter-sum"
}
</script>