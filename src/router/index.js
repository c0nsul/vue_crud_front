import { createRouter, createWebHashHistory } from 'vue-router'
import Employees from "../components/Employees"
import Employee from "../components/Employee"
import CreateEmployee from "../components/CreateEmployee"
import EditEmployee from "../components/EditEmployee"

const routes = [
    {
        path: '/',
        name: 'employees',
        component: Employees
    },
    {
        path: '/show/:id',
        name: 'employee',
        component: Employee
    },
    {
        path: '/create',
        name: 'employee_create',
        component: CreateEmployee
    },
    {
        path: '/edit/:id',
        name: 'employees_edit',
        component: EditEmployee
    }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
