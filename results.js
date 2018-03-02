<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<div class="container">
<h1> Results </h1>
</div>
<div class="jumbotron">
<ul class="list-group">
<div class="container">    
<% data["Search"].forEach(function(movie){ %>
    <li> <%= movie["Title"] %> </li>    
<% }) %>
</div>
</div>
