<template>
  <main>
      <Loading v-if="this.loadingStatus"/>
      <Tours v-else-if="(!this.loadingStatus && this.tourList.length !== 0)" :tour-info="this.tourList" @removeTour="removeTour"/>
      <div class="title" v-else-if="this.tourList.length === 0">
        <h2>no tours left</h2>
        <button class="btn" @click="fetchData">refresh</button>
      </div>
  </main>
</template>

<script>
import Loading from './components/Loading'
import Tours from "./components/Tours";
import axios from "axios";
export default {
  name: 'App',
  components: {
    Tours,
    Loading
  },
  data() {
    return {
      loading: false,
      tours: [],
    }
  },
  computed:{
    loadingStatus() {
      return this.loading;
    },
    tourList(){
      return this.tours;
    }
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('https://course-api.com/react-tours-project')
        this.tours = response.data;
        this.loading = false;
      } catch (error){
        console.log(error)
      }
    },
    removeTour(singleTourId){
      this.tours = this.tours.filter(i => i.id !== singleTourId)
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style>

</style>
