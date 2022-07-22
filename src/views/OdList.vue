<template>
  <div>
    <b-table striped hover responsive sticky-header
    :fields="fields" :items="items">

    <template #head(offer_or_demand)>
      <div class="text-nowrap">
        {{$t('offer')}} / {{$t('demand')}}
      </div>
    </template>

    <!-- <template #head()="scope">
     <div class="text-nowrap">
       Heading {{ scope.label }}
     </div>
   </template> -->

  </b-table>
</div>
</template>

<script>

export default {
  name: "OdList",
  data() {
    return {
      fields: [
        { key: 'offer_or_demand',
        stickyColumn: true,
        isRowHeader: true,
        variant: 'primary' , sortable: true },
        { key: 'price', stickyColumn: true, variant: 'info' , sortable: true },
        { key: 'what', stickyColumn: true, variant: 'warning' , sortable: true },
        { key: 'troc_or_condition' , sortable: true },
        { key: 'where' , sortable: true },
        { key: 'date' , sortable: true },
        { key: 'expire' , sortable: true },
      ],
      items: [
        { offer_or_demand: "offer",
        troc_or_condition: "troc",
        price: 40,
        where: 'Milano',
        what: 'Ferrari' ,
        date: "01/01/2022:18h30:34" ,
        expire: "01/01/2020:18h30:34" },
        { offer_or_demand: "demand", troc_or_condition: "troc", price: 0, where: 'Online / remote', what: 'web development' , date: "01/01/2020:15h30:34" , expire: "01/01/2020:18h30:34" },
        { offer_or_demand: "demand", troc_or_condition: "condition", price: 89, where: 'Garden Place, Paris', what: 'Apple' , date: "01/01/2021:18h30:34" , expire: "01/01/2020:18h30:34" },
        { offer_or_demand: "offer", troc_or_condition: "condition", price: 38, where: 'online', what: 'ipfs tuto' , date: "01/02/2020:18h30:34" , expire: "01/01/2020:18h30:34" },
      ]
    }
  }
}
</script>
