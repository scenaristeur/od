<template>
  <b-container>
    <b-button @click="load">Load</b-button>
    <ul>
      <li v-for="(node, key) of vueState" :key="key">
        <b-button @click="remove(key)">X</b-button><b>{{node.label}} by {{node.creator['#']}}:</b>
        {{key}}
        <small>{{node}}</small>
      </li>
    </ul>
    <b-input placeholder="key" v-model="key" />
    <b-input placeholder="data" v-model="data" />
    <b-button @click="setToGun">Set</b-button>
    <hr>vueState : {{vueState}}
  </b-container>
</template>

<script>
export default {
  name: "GunTest",
  data(){
    return{
      vueState : {},
      key: null,
      data: null
    }
  },
  created() {
    this.$gun.get('od').map().on((node, key) => {
      //      console.log(node,key)
      // add results straight to the Vue component state
      // and get updates when nodes are updated by GUN

      let object = this.$gun.get('od/'+key)
      console.log(object)
      // base.load(o => console.log(o))
      // base.load(o => console.log(Array.from(o.data)))

      node != null ? this.vueState[key] = node : ""
      this.$forceUpdate();
    });

  },
  methods:{
    load(){
      let base = this.$gun.get('od')
      base.load(o => console.log(o))
      base.load(o => console.log(Array.from(o.data)))
    },
    setToGun(){
      this.$gun.get('od').get(this.key).set(this.data)
      this.key = ""
      this.data = ""
      this.$forceUpdate();
    },
    remove(key){
      this.$gun.get('od').get(key).put(null)
      delete this.vueState[key]
    }
  },
  watch:{
    vueState(){
      this.$forceUpdate();
    }
  }
}
</script>

<style>

</style>
