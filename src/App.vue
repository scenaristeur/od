<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> &nbsp;
      <LocaleChanger/>
      <SolidLogin />
    </nav>


    <router-view/>
    <OdList />
    <HelloI18n/>
  </div>
</template>

<script>
import HelloI18n from "@/components/HelloI18n";
import LocaleChanger from "@/components/LocaleChanger";
import OdList from "@/views/OdList";
import SolidLogin from "@/components/SolidLogin";

export default {
  name: 'app',
  components: {
    HelloI18n,
    LocaleChanger,
    OdList,
    SolidLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
