<template>
    <div>
        <h1>登录界面</h1>
        用户名：<input v-model="name"/><br/>
        密&nbsp&nbsp&nbsp&nbsp码：<input type="password" v-model="password"/><br/>
        <button @click="tologin">登录</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                name:'',
                password:''
            }
        },
        methods: {
            tologin () {
                this.$store.dispatch('setbaseinfo',this.name)
            }
        }
    }
</script>