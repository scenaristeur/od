<template>
  <div>
    <b-input v-model="item.label" placeholder="label" @click="reset" />
    <b-button v-if="session!= null && session.webId != null" @click="save" variant="success">Save</b-button>
    <b-button v-else disabled variant = "warning">You must loggin to your pod to save </b-button>
    <br>
    <div v-if="result!= null" ><b>{{result.label}}</b> file saved at <a :href="result.savedFile" target="_blank">
      {{result.savedFile}}
    </a>
    <!-- {{result}} -->
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
    [
      {'@id': 'https://schema.org/Offer', label: "Offer (schema.org)"}, {
        '@id': 'https://www.wikidata.org/wiki/Q542869', label: "Supply (wikidata)"}
      ] :
      [
        {'@id': 'https://schema.org/Demand', label: "Demand (schema.org)"},
        {'@id': 'https://www.wikidata.org/wiki/Q4402708', label: "Demand (wikidata)"}
      ]
    },
    methods: {
      reset(){
        this.result = null
        this.item['@id'] =  undefined
        this.item.label = undefined
      },
      async save(){
        console.log("save")
        this.result = await this.$putItem(this.item)

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
