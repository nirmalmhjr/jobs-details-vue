<template>
  <div v-if="job">
  <h1>This is job details page</h1>
  <h2>Job title : {{ job.title }}</h2>
  <p>params is {{ id }}</p>
  <p>Your job is {{ job.details }}</p>
</div>
<div v-else>
  <p>Loading jobs details........</p>
</div>
</template>

<script>
export default {
    props: ['id'],
    data(){
      return{
        job: null
      }
    },
    mounted(){
      fetch('http://localhost:3000/jobs/'+ this.id)
        .then(res => res.json())
        .then(data=> this.job = data)
        .then(err => console.log(err.message))
    }
   
}
</script>

<style>

</style>