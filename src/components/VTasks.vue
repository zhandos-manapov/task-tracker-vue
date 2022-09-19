<template>
  <div :key="task.id" v-for="task in tasks">
    <VTask 
      @delete-task="$emit('delete-task', task.id)" 
      @toggle-task="$emit('toggle-task', task.id)"
      :task="task" />
  </div>
</template>

<script>
import VTask from './VTask.vue';

export default {
  name: 'VTasks',
  components: {
    VTask
  },
  props: {
    tasks: Array
  }
}

</script>