<template>
  <div>
    <div class="col-8 offset-2">
    <h2>Creating employes</h2>
        <form @submit.prevent="createEmployee">
              <div class="form-group">
                  <label for="full_name">Name</label>
                  <input required type="text" id="full_name" class="form-control" v-model="employee.full_name">
              </div>

              <div class="form-group">
                <label for="specialization">Specialization</label>
                <input required type="text" id="specialization" class="form-control" v-model="employee.specialization">
              </div>

              <div class="form-control">
                <label for="experience">Experience</label>
                <input required type="text" id="experience" class="form-control" v-model="employee.experience">
              </div>

              <div class="form-control">
                <label for="skills">Skills (separating by comma)</label>
                <input required type="text" id="skills" class="form-control" v-model="employee.skills">
              </div>

              <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" class="form-control" v-model="employee.description" cols="30" rows="10"></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      employee: {}
    }
  },
  methods: {
    createEmployee() {
        axios.post('http://127.0.0.1:8000/api/employees', this.employee)
            .then(response => {
              this.$router.push("/")
              console.log(response)
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