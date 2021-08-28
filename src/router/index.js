import { createRouter, createWebHashHistory } from 'vue-router'
import Employees from "../components/Employees"
import Employee from "../components/Employee"
import ActionEmployee from "../components/ActionEmployee"

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
        component: ActionEmployee
    },
    {
        path: '/edit/:id',
        name: 'employees_edit',
        component: ActionEmployee
    }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
