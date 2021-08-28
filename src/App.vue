<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <header>
        <router-link :to="{name: 'employees'}">Emploees list</router-link>
      &nbsp;&nbsp;&nbsp;
        <router-link :to="{name: 'employee_create'}">Add Emploee</router-link>
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
