<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <router-view />
                </div>
            </div>
        </div>
		<base-loader />
		<base-toast />
    </div>
</template>
<script>
export default {}
</script>
