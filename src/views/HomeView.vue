<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <!--        style="max-width: 20rem;"   :title="$t('offer')"-->
          <b-card
          img-src="https://picsum.photos/600/300/?image=26"
          img-alt="OfferImage"
          img-top
          tag="article"
          class="mb-2"
          >
          <b-card-text>
            {{$t ('offerText')}}
          </b-card-text>
          <b-button href="#" variant="primary">{{$t('offer')}}</b-button>
        </b-card>
      </b-col>

      <b-col>
        <b-card
        img-src="https://picsum.photos/600/300/?image=27"
        img-alt="DemandImage"
        img-top
        tag="article"
        class="mb-2"
        >
        <b-card-text>
          {{$t ('demandText')}}
          <br>
          <br>
        </b-card-text>

        <b-button href="#" variant="primary">{{ $t('demand') }}</b-button>
      </b-card>
    </b-col>

  </b-row>

</b-container>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
