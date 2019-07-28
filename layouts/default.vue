<template>
  <div class="main">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
    
        <div class="navbar-start">
          
          <a class="navbar-item">vue-examples</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" @click="() => push('/vue-chart')">vue-chart.js</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">example 1</a>
              <a class="navbar-item">example 2</a>
              <a class="navbar-item">code 1</a>
              <a class="navbar-item">code 2</a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">vue-draggable</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">example 1</a>
              <a class="navbar-item">example 2</a>
              <a class="navbar-item">code 1</a>
              <a class="navbar-item">code 2</a>
            </div>
          </div>


        </div>
      </div>
    </nav>
    <div class="section">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    push(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.navbar {
  border-bottom: 1px solid #DDD;
}

footer {
  background: none;
}
</style>
