<template>
  <header>
    <h1>{{title}}</h1>
    <div>
      <VButton 
        v-if="homePage"
        @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task' " 
        :color="showAddTask ? 'red' : 'green' " />
    </div>
  </header>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'VHeader',
  components: {
    VButton
  },
  props: {
    title: String,
    showAddTask: Boolean
  },
  computed: {
    homePage(){
      if(this.$route.path === '/'){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>