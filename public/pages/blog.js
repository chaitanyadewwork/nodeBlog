module.exports.addBlog=addBlog;

function addBlog(page_name,page_content,app) {
    app.get(`/${page_name}`,(req,res)=>{
        res.render('blogPage',{PageName:page_name,PageContent:page_content})
    })
    
}