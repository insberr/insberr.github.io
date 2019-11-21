---
pageversion: Page V 0.0.3
---
Website {{ site.siteversion }}
<br>{{ page.pageversion }}

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#todo">To Do</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#updates">Updates</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#links">Links</a>
  </li>
  <li class="nav-item">
   <a class="nav-link" data-toggle="tab" href="#history">History</a>
 </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active show" id="home">
    <p>Its yet another incremental game.
      <br>You are in the middle of space billions of miles away from your home planet, Eart. All things in existance are fading
      <br>
    </p>
  </div>
  <div class="tab-pane fade" id="todo">
    <p>To Do
      <br>- Change UI and buttons
      <br>- Add resources
      <br>- Update this website
      <br>- Find time to work on finding time to program this game
      <br>* Name the game
      <br>*Fully move all content to this website
      <br>
      <br>The To Do List Is {{ site.todobar }}% Complete
    </p>
      <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: {{ site.todobar }}%">
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="updates">
    <p>Updates
      <br>- None
    </p>
  </div>
  <div class="tab-pane fade" id="links">
    <p>The only links, so sad
      <br>- <a href="https://spidergamin.github.io/To-Be-Named/">To Be Named Game</a>
    </p>
  </div>
  <div class="tab-pane fade" id="history">
    {{ include gamehistory.md }}
    <p>Nothing much here. :)
      <br>
    </p>
  </div>
 </div>
<br>
<br>
<br>
<br>
<hr size="50" noshade>
<br>
<br>Thanks to you, I am not board anymore :)
