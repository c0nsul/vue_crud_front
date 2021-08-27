<template>
  <div id="app">
      <header>
        <router-link :to="{name: 'employees'}">Emploees list</router-link>
      </header>
    <main>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>
