// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  // doc: null
  path: "https://od.solidcommunity.net/public/experiments/",
  items: [],
  gunRoot: 'od-test',
  vueState:[]
})

const mutations = {
  setPath(state, p){
    console.log("path",p)
    state.path = p
  },
  setVueState(state, v){
    console.log("vuestate",v)
    state.vueState = v
  },
  setItems(state, i){
    state.items = i
  }
  // setPod(state, p){
  //   console.log("pod",p)
  //   state.pod = p
  // },
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

}

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
