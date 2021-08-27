<template>
  <div class="table-responsive">
    <h2>Employees</h2>
    <table class="table">
      <thead>
      <tr class="table-dark">
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Specialisation</th>
        <th scope="col">Skills</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Name</td>
        <td>PHP, JS</td>
        <td>5 years</td>
        <td>some desc</td>
        <td>
          <a href="">Edit</a>
          <a href="">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: []
    }
  }
}
</script>

<style scoped>

</style>