<template>
    <div id="add-blog">
        <form v-if="!submitted">
            <h2>Yeni Makale Ekle</h2>
            <label>Başlık:</label>
            <input type="text" v-model.lazy="blog.title">   
            <label>İçerik:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <p>Makale Kategorileri</p>
                <label>Yazılım</label>
                <input type="checkbox" value="yazılım" v-model="blog.categories">
                <label>Hayat</label>
                <input type="checkbox" value="hayat" v-model="blog.categories">
                <label>Spor</label>
                <input type="checkbox" value="spor" v-model="blog.categories">
            </div>   
            <label>Yazar:</label>
            <select v-model="blog.author">
                <option v-for="(data,index) in authors" :key="index">{{data}}</option>
            </select>
            <button @click.prevent="post">Ekle</button>
        </form> 
        <div id="preview">
            <h3>Makale Önizleme</h3>
            <p>Makale Başlık: {{blog.title}}</p>
            <p>Makale İçerik:</p>
            <p>{{blog.content}}</p>
            <p>Makale Kategorileri:</p>
            <ul>
                <li v-for="(data,index) in blog.categories" :key="index">{{data}} </li>
            </ul>
            <p>Yazar: {{blog.author}}</p>
        </div>
        <div v-if="submitted">
            <h3>Makale Eklendi</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog:{
                title:'',
                content:'',
                categories:[],
                author:''
            },
            authors:["Ali","Mert","Ayşe","Gönül"],
            submitted:false
        }
    },
    methods: {
        post:function(){
            this.$http.post('https://blog-vue-38a16.firebaseio.com/post.json',this.blog).then(function(data){
                console.log(data);
                this.submitted = true
            })
        }
    },
}
</script>

<style >
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea {
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label{
    display: inline-block;
}
</style>