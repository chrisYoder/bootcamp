# Renderingi HTML, and Templates

### Objectives

* use `res.render()` to render html from an ESJ file
* Explain what EJS is and why we use it
* Pass variables to EJS Templates

### Explain what EJS is and why we use it

* Embedded Javascript in views
* enables us to use features of js to create dynamic pages.

### Render html from ejs file

* `res.render('fileName.ejs')`
* `<%= %>` --> will render whatever is inside the brackets to the screen
* `<% %>` --> will run the code 

### Pass variables to ejs files
* app.js
```
app.get('/route', (req, res) => {
    let variable = req.params.variable;
    res.render('filename.ejs', {newVar: variable})
});
```
* view.ejs
```
<h1><% = newVar %></h1>
```
# EJS: Control Flow

### Objectives

* Show examples of control flow in EJS templates.
* Write if statements in an EJS file
* Write Loops in EJS file

### Conditional Statements

```
<% if(condition){ %>
    result
<% } else { %>
    result
<% } %>

```



### Loops

* steps
    * make an entry div which includes
        * entry 
        * tagline
        * content
* JS file
    ```
        app.get('/something', (req, res) => {
            let array = [item, item, item];
            res.render('file.ejs', {array: itemArray});
        }
    ```
* EJS file
    ```
        <% itemArray.forEach( item => { %>
            <% item %>
        <% }); %>
    ```

# Serving Custom Assests (Styles and Partials)

### Objectives
* Show how to properly include public assets
* Properly configure our app to use EJS
* Use partials to DRY up our code


### Including Public Assets
* `app.use(express.static('filename'));`

### Properly configure app to use EJS
* `app.set('view engine', 'ejs');`
    * allows to write our app.gets like this `res.render('filename')` instead of `res.render('/post.ejs')`

### Using Partials
*`<% include partialsFolderName/partialsFileName %>`

# Post Requests

### Objectives
* Write some post routes, and test them with postman
* Use a for to send a post request
* Use body parse to get form data 
