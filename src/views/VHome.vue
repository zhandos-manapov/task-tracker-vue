<template>
  <div v-if="showAddTask">
    <VAddTask @add-task="addTask" />
  </div>
  <VTasks @delete-task="deleteTask" @toggle-task="toggleTask" :tasks="tasks" />
</template>

<script>
import VTasks from '../components/VTasks'
import VAddTask from '../components/VAddTask'

const url = 'http://localhost:3000/'

export default {

  name: 'VHome',
  components: {
    VTasks,
    VAddTask
  },
  props: {
    showAddTask: Boolean
  },
  data(){
    return {
      tasks: []
    }
  },
  methods: {
    async fetchTasks() {
      let res = await fetch(url + 'tasks')
      res = await res.json()
      return res
    },

    async addTask(task) {
      let res = await fetch(url + 'tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      res = await res.json()
      this.tasks.push({ ...res, id: res.id })
    },

    async deleteTask(id) {
      await fetch(url + `tasks/${id}`, {
        method: 'DELETE'
      })
      this.tasks = this.tasks.filter(task => task.id !== id)
    },

    async toggleTask(id) {
      const task = this.tasks.find(task => task.id === id)
      task.reminder = !task.reminder
      await fetch(url + `tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      this.tasks = await this.fetchTasks()
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>