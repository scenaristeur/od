<template>
  <div>
    <b-input v-model="item.label" placeholder="label" @click="reset" />
    <b-button v-if="session!= null && session.webId != null" @click="save" variant="success">Save</b-button>
    <b-button v-else disabled variant = "warning">You must loggin to your pod to save </b-button>
    <br>
    <div v-if="result!= null" ><b>{{result.label}}</b> file saved at <a :href="result.savedFile" target="_blank">
      {{result.savedFile}}
    </a>
  </div>

  {{formType}}<br>
  {{item}}<br>
</div>
</template>

<script>
export default {
  name: "FormView",
  props: ['formType'],
  data(){
    return{
      result: null,
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
    reset(){
      this.result = null
    },
    async save(){
      console.log("save")
      this.result = await this.$putItem(this.item)
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
