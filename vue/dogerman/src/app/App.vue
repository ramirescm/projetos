<template>
    <div id="app">
      <nav class="navbar has-shadow">
        <div class="container is-widescreen">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
            </a>
            <div class="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown">
                <a class="navbar-link">
                  Account
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Dashboard
                  </a>
                  <a class="navbar-item">
                    Profile
                  </a>
                  <a class="navbar-item">
                    Settings
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="container is-widescreen">
        <div class="columns">
          <div class="column is-2">
            <aside class="menu">
              <div class="main">
                <ul>
                  <li><a href="#" class="item active"><span class="icon"><i class="fa fa-inbox"></i></span><span class="name">Inbox</span></a></li>
                  <li><a href="#" class="item"><span class="icon"><i class="fa fa-star"></i></span><span class="name">Starred</span></a></li>
                  <li><a href="#" class="item"><span class="icon"><i class="fa fa-envelope-o"></i></span><span class="name">Sent Mail</span></a></li>
                  <li><a href="#" class="item"><span class="icon"><i class="fa fa-folder-o"></i></span><span class="name">Folders</span></a></li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="column is-9">
            <router-view></router-view>
          </div>
      
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>
<style>
    
</style>


