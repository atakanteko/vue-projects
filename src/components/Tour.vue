<template>
  <div>
    <article class="single-tour">
      <img :src="singleTour.image" :alt="singleTour.name"/>
      <footer>
        <div class="tour-info">
          <h4>{{singleTour.name}}</h4>
          <h4 class="tour-info">${{ singleTour.price }}</h4>
        </div>
        <p>
          {{this.subStringInfo}}<button v-if="readMore" @click="this.setReadMore">show less</button>
          <button v-else @click="this.setReadMore">read more</button>
        </p>
        <button class="delete-btn" @click="removeTour(singleTour.id)">not interested</button>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readMore: true
    }
  },
  props: {
    singleTour: {
      type: Object,
      required: true
    }
  },
  methods: {
    setReadMore(){
      this.readMore = !this.readMore;
    },
    removeTour(id){
      this.$emit("removeTour",id)
    }
  },
  computed:{
    subStringInfo(){
      return this.readMore ? this.singleTour.info : `${this.singleTour.info.substring(0,200)}...`
    }
  }
}
</script>
