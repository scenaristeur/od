<template>
  <div>
    {{formType}}<br>
    {{item}}<br>

    <b-input v-model="item.label" placeholder="label" />


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
        label: undefined,
        '@id': undefined,
        '@type': []
      }
    }
  },
  created(){
    this.item.types = this.formType == "offer" ?
    [{'@id': 'https://schema.org/Offer'}, {'@id': 'https://www.wikidata.org/wiki/Q542869'}] :
    [{'@id': 'https://schema.org/Demand'}, {'@id': 'https://www.wikidata.org/wiki/Q4402708'}]
  },
  methods: {
    async save(){
      console.log("save")
      await this.$putItem(this.item)
      this.item['@id'] =  undefined
      this.item.label = undefined
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
