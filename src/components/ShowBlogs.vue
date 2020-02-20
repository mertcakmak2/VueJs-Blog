<template>
    <div v-tema="'uzun'" id="show-blogs">
        <input type="text" v-model="search" placeholder="Makale Ara">
        <h1>Makaleler</h1>
        <div v-for="(data,index) in filteredBlogs" :key="index" class="single-blog">
            <router-link :to="'/blog/'+data.id">
            <h3>{{data.title}}</h3>
            <article>{{data.content}}</article>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlogs',
    data() {
        return {
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('https://blog-vue-38a16.firebaseio.com/post.json',this.blog).then(function(data){
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
        })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    }
}
</script>

<style scoped>

</style>