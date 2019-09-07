<template>
    <div class="app-content">
        <home-header/>
    </div>
</template>

<script>
	import homeHeader from "@/layouts/homeHeader";
	export default {
		components: {
			homeHeader
		}
	}
</script>

<style lang="scss" scoped>
body{
    background-image: url(../../assets/img/indexBg.jpg);
    background-size: 100%;
}
</style>
