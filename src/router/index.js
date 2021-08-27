import { createRouter, createWebHashHistory } from 'vue-router'
import Employees from "../components/Employees"


const routes = [
    {
        path: '/',
        name: 'employees',
        component: Employees
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
