<template>
    <div id="show-blogs">
        <h1>Makaleler</h1>
        <div v-for="(data,index) in blogs" :key="index" class="single-blog">
            <h3>{{data.title}}</h3>
            <article>{{data.body}}</article>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlogs',
    data() {
        return {
            blogs:[]
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts',).then(function(data){
            this.blogs = data.body.slice(0,10)
        })
    }
}
</script>

<style scoped>

</style>