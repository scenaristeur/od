import {
  getSolidDataset,
  getThingAll,
  //   //getPublicAccess,
  //   //  getAgentAccess,
  // getSolidDatasetWithAcl,
  //   //getPublicAccess,
  //   //getAgentAccess,
  //   // getFile,
  //   // isRawData,
  //   // getContentType,
  //   //saveFileInContainer,
  //   // getContainedResourceUrlAll,
  //   // getStringNoLocaleAll,
  //   // createContainerAt,
  getSourceUrl,
  //   // deleteFile,
  //   //removeThing,
  //   // removeAll,
  //   //removeStringNoLocale,
  //   //deleteContainer,
  //   //addStringNoLocale,
  //   //setThing,
  //   //saveSolidDatasetAt,
  //   //createSolidDataset,
  //   //createThing,
  //   //addUrl,
  //   //buildThing,
  overwriteFile,
  //   getStringNoLocale,
  //   getThing,
  //   getUrlAll,
  //   getUrl,
  //   //addDatetime,
  //   //  getDatetime,
  //   //setUrl,
  //   //setStringNoLocale,
  //   //setDecimal,
  //   //setInteger,
  //   //  getDecimal,
  //   //getInteger,
  //   // setDatetime
} from "@inrupt/solid-client";
import { v4 as uuidv4 } from 'uuid';
// import { FOAF, /*LDP,*/ VCARD, /*RDF,*/ /*AS,*/ /*RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
// import { WS, /*SOLID*/ } from "@inrupt/vocab-solid-common";
//
import * as sc from '@inrupt/solid-client-authn-browser'
// https://communitysolidserver.github.io/CommunitySolidServer/4.0/example-requests/
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$getThings = async function(path){
      console.log(path)
      const mainDataset = await getSolidDataset( path, { fetch: sc.fetch });
      console.log(mainDataset)

      let things = await getThingAll(mainDataset)
      console.log(things)
      // for await (const t of things){
      //   const ds = await getSolidDataset( t, { fetch: sc.fetch });
      //   console.log(ds)
      //
      // }
    }

    // post at a generated url https://communitysolidserver.github.io/CommunitySolidServer/4.0/example-requests/
    // put at a defined url
    Vue.prototype.$putItem = async function(item){
      let context =  {
        "name": "http://xmlns.com/foaf/0.1/name",
        // "knows": "http://xmlns.com/foaf/0.1/knows",
        "@base": this.$store.state.od.path,  //"http://local/",
        "@vocab": "https://scenaristeur.github.io/od/",
        "label":   "http://www.w3.org/2000/01/rdf-schema#label",
        "id": "@id",
        "type": "@type",
        "reverse": "@reverse",
        // "homepage": {
        //   "@id": "http://xmlns.com/foaf/0.1/homepage",
        //   "@type": "@id"
        // }
      }
      item['@context'] = context
      item['@id'] == undefined ? item['@id'] = uuidv4() : ""
      item.path = this.$store.state.od.path
      item.url = this.$store.state.od.path+item['@id']//+'.jsonld'
      item.created == undefined ? item.created = Date.now() : ""
      item.updated = Date.now()
      item.creator = {'@id': this.$store.state.solid.pod.webId, 'name': this.$store.state.solid.pod.name}
      console.log(item)
      const savedFile = await overwriteFile(
        item.path,
        new Blob([JSON.stringify(item)], { type: "application/ld+json" }),
        { contentType: "application/ld+json", fetch: sc.fetch }
      );

      console.log(`File saved at ${getSourceUrl(savedFile)}`);
      item.savedFile = `${getSourceUrl(savedFile)}`
      return item

    }




  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
