<template>
  <div>
    {{formType}}<br>
    {{item}}<br>
    <b-button v-if="session!= null && session.webId != null" @click="save" variant="success">Save</b-button>
    <b-button v-else disabled variant = "warning">You must loggin to your pod to save </b-button>
  </div>
</template>

<script>
export default {
  name: "FormView",
  props: ['formType'],
  data(){
    return{
      item: {
        types: []
      }
    }
  },
  created(){
    this.item.types = this.formType == "offer" ?
    ['https://schema.org/Offer', 'https://www.wikidata.org/wiki/Q542869'] :
    ['https://schema.org/Demand', 'https://www.wikidata.org/wiki/Q4402708']
  },
  methods: {
    save(){
      console.log("save")
    }
  },
  computed:{
    session:{
      get () { return this.$store.state.solid.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
