const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      expressSanitizer = require('express-sanitizer'),
      mongoose   = require('mongoose');

// App config
mongoose.connect('mongodb://localhost:27017/codingStoicBlog', { useNewUrlParser: true} );
mongoose.set('useCreateIndex', true);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


// Mongoose config
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    created: {type: Date, default: Date.now},
    comments: Array
});

const posts = mongoose.model('post', postSchema);


//  RESTful Routes

// INDEX
app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.get('/posts', (req, res) => {
    posts.find({}, (err, allPosts) => {
        if(err){
            console.log(err);
        } else {
            res.render('posts', {posts: allPosts});
        }
    });
});


// NEW
app.get('/posts/new', (req, res) => {
    res.render('new');
});

//CREATE
app.post('/posts', (req, res) => {
    let title = req.body.blog.title,
        image = req.body.blog.image,
        content = req.body.blog.content;

    content = req.sanitize(content);

    let newPost = {
        title: title,
        image: image,
        date: new Date(),
        content: content,
        comments: []
    };


    posts.create(newPost, (err, newPost) => {
        if(err) {
            console.log(err);
        }else{
            res.redirect('/posts');
        }
    });
});

// SHOW
app.get('/posts/:id', (req, res) => {
    posts.findById(req.params.id, (err, foundPost) => {
        if(err){
           res.redirect('/posts');
        }else{
            res.render('show', {post: foundPost});
        }
    });



});

// EDIT
app.get("/posts/:id/edit", (req, res) => {
    posts.findById(req.params.id, (err, foundPost) => {
        if(err){
            res.redirect('/posts');
        }else{
           res.render('edit', {post: foundPost});
        }
    });
});

// Update route
app.put('/posts/:id', (req, res) => {
    let content = req.body.blog.content;
    content = req.sanitize(content);
    posts.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedPost) => {
        if(err){
            res.redirect('/posts');
        }else{
            res.redirect('/posts/' + req.params.id);
        }
    });
});

// destroy route
app.delete('/posts/:id', (req, res) => {
    // destory blog and redirect to to /posts
    posts.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            res.redirect('/posts');
        }else{
            res.redirect('/posts');
        }
    });
});



app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running'));