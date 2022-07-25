<template>
  <b-container>
    <b-button @click="load">Load</b-button>
    <ul>
      <li v-for="(node, key) of vueState" :key="key">
        <b-button @click="remove(key)">X</b-button>
        <!-- <b>
          {{node.label}} by {{node.creator['#']}}:</b> -->
        {{key}}
        <small>{{node}}, by {{node.creator}}</small>
      </li>
    </ul>
    <b-input placeholder="key" v-model="key" />
    <b-input placeholder="data" v-model="data" />
    <b-button @click="setToGun">Set</b-button>
    <hr>vueState : {{vueState}}
    <hr>vueState2 : {{vueState2}}
  </b-container>
</template>

<script>
export default {
  name: "GunTest",
  data(){
    return{
      vueState : {},
      vueState2 : {},
      key: null,
      data: null
    }
  },
  created() {
    let gunRoot = this.gunRoot
    this.$gun.get(gunRoot).map().on((node, key) => {
      //      console.log(node,key)
      // add results straight to the Vue component state
      // and get updates when nodes are updated by GUN

    //   let object = this.$gun.get(gunRoot+'/'+key)
    // //  console.log(object)
    //   object.load(o => {
    //
    //   //  console.log("object",o)
    //     this.vueState2[key] = o
    //   }
    // )
      // base.load(o => console.log(Array.from(o.data)))
  //  this.$store.commit('od/setVueState', Object.values(this.vueState))
     node != null ? this.vueState[key] = node : ""
      this.$forceUpdate();
    });

  },
  methods:{
    load(){
      let base = this.$gun.get(this.gunRoot)
      base.load(o => console.log(o))
      base.load(o => console.log(Array.from(o.data)))
    },
    setToGun(){
      this.$gun.get(this.gunRoot).get(this.key).set(this.data)
      this.key = ""
      this.data = ""
      this.$forceUpdate();
    },
    remove(key){
      this.$gun.get(this.gunRoot).get(key).put(null)
      delete this.vueState[key]
        delete this.vueState2[key]
    }
  },
  watch:{
    vueState(){
      this.$forceUpdate();

    }
  },
  computed:{
    gunRoot:{
      get () { return this.$store.state.od.gunRoot },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
