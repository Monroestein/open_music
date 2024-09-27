<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

*{
  box-sizing: border-box;
  margin: 0;
}

body{
  background: #eeeeee;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f090b;
}

nav {
  padding: 10px;
  text-align: end;
}

nav a {
  font-weight: 600;
  color: #aaaaaa;
  text-decoration: none;
  margin: 0 .5rem;
}

nav a.router-link-exact-active {
  color: #cf2828;
}
</style>
