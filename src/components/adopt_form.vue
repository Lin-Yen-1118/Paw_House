<template>
    <div id="adopt_form">
        <div><input type="text" id="name" />姓名:</div>

        <div>
            <input type="radio" id="male" name="sex" value="male" />
            <label for="contactChoice1">男</label>

            <input type="radio" id="female" name="sex" value="female" />
            <label for="contactChoice2">女</label>
        </div>

        <div>
            <input type="radio" id="living_env" name="living_env" value="living_env" checked />>居住環境:
            <label for="living1" value="apartment">公寓</label>
            <label for="living2" value="house">透天</label>
            <label for="living3" value="community_building">電梯大廈</label>
        </div>
    </div>
</template>

<script>
// import adoptForm from './adopt_form.vue'
export default {
    name: 'adoptForm ',

    watch: {},
    components: {},

    data() {
        return {}
    },
    methods: {},
    computed: {},
}
</script>
<style lang="scss" scoped>
#adopt_form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
}
</style>
