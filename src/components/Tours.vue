<template>
  <section>
    <div class="title">
      <h2>our tours</h2>
      <div class="underline"></div>
    </div>
    <div>
      <Tour v-for="(tour, index) in tourInfo" :key="index" :single-tour="tour" @removeTour="removeTour"/>
    </div>
  </section>
</template>

<script>
import Tour from './Tour'
export default {
  props: {
    tourInfo:{
      type:Array,
      required: true
    }
  },
  components:{
    Tour
  },
  methods:{
    removeTour(singleTourId){
      console.log(singleTourId)
      this.$emit("removeTour",singleTourId)
    }
  }
}
</script>
