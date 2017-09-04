// Model
var Blog = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: ''
    }
});

// Collection
var Blogs = Backbone.Collection.extend({});

// Instantiate two Blogs
var blog1 = new Blog({
    author: 'Jak',
    title: 'Jak Blog',
    url: 'http//jakblog.com'
});

var blog2 = new Blog({
    author: 'Sam',
    title: 'Sam Blog',
    url: 'http//samblog.com'
});

// Instantiate a collection
var Blogs = new Blogs([blog1, blog2]);