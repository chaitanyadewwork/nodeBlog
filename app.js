const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const addBlog = require(__dirname + '/public/pages/blog.js');
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

// let blog_pages = [['title', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis repellendus quis nulla minus laborum exercitationem quasi reiciendis ducimus vel?"],
// ['title', " consectetur adipisicing elit. Consequuntur architecto placeat suscipit eius quibusdam! Veniam laboriosam ut doloribus commodi pariatur cupiditate consequatur eveniet dolorum voluptas nostrum deleniti, qui vel ullam?"],
// ['title', " architecto placeat suscipit eius quibusdam! Veniam laboriosam ut doloribus commodi pariatur cupiditate consequatur eveniet dolorum voluptas nostrum deleniti, qui vel ullam?"],
// ]
let blog_pages = []
let CurrentAdded = 0;
app.get('/', (req, res) => {
    res.render('index', { blogPages: blog_pages })
});
app.get('/compose', (req, res) => {
    // res.send('heel');
    res.render('composeBlogs')
});
app.post('/', (req, res) => {
    let PageName = req.body.pageTitle;
    let PageContent = req.body.pageContent;
    try {

        // let PageName=req.body.pageTitle;
        // let PageName=req.body.pageContent;

        // addBlog.addBlog(PageName, PageContent, app)
        // setTimeout(() => {
        //     res.redirect('/' + PageName);
        // }, 500);
        console.log(PageName);
        blog_pages.push([PageName, PageContent])
        CurrentAdded += 1


        res.redirect("/")

    } catch (error) {
        console.log(error);
        res.redirect('/compose')
    }


})
app.listen(5000, () => {
    console.log('http://localhost:5000');
});