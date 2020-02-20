import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'


export default [
    {
        path:'/',
        component:ShowBlog,
    },
    {
        path:'/add',
        component:AddBlog,
    },
    {
        path:'/blog/:id',
        component:SingleBlog,
    }
]