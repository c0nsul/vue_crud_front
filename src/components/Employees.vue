<template>
  <div class="table-responsive">
    <h2>Employees</h2>
    <table class="table">
      <thead>
      <tr class="table-dark">
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Specialisation</th>
        <th scope="col">Experience(years)</th>
        <th scope="col">Description</th>
        <th scope="col">Skills</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="employee in employees" :key="employee.id">
        <th scope="row">{{employee.id}}</th>
        <td>{{employee.full_name}}</td>
        <td>{{employee.specialization}}</td>
        <td>{{employee.experience}}</td>
        <td>{{employee.description}}</td>
        <td><router-link :to="{name: 'employee', params: { id: employee.id }}">show</router-link></td>
        <td>
          <a href="">Edit</a>&nbsp;&nbsp;&nbsp;
          <a href="">Delete</a>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      employees: []
    }
  },
  created() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      axios.get('http://127.0.0.1:8000/api/employees')
          .then(response => response.data
          )
          .then(data => {
            this.employees = data.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>