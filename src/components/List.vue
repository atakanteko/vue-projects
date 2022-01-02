<template>
  <div>
    <article class="grocery-item" v-for="(item, index) in this.items" :key="index">
      <p class="title">{{item.title}}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <eva-icon name="edit" fill="limegreen"></eva-icon>
        </button>
        <button type="button" class="edit-btn">
          <eva-icon name="trash-2" fill="red"></eva-icon>
        </button>
      </div>
    </article>


  </div>
</template>

<script>

export default {
  name: 'List',
  components: {
  },
  data() {
    return {

    }
  },
  props:{
    items:{
      type: Array,
      required: true
    }
  },
}
</script>

<style>

</style>
