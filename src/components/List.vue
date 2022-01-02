<template>
  <div>
    <article class="grocery-item" v-for="(item, index) in this.items" :key="index">
      <p class="title">{{item.title}}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <eva-icon name="edit" fill="limegreen" @click="editItem(item.id)"></eva-icon>
        </button>
        <button type="button" class="delete-btn" @click="removeItem(item.id)">
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
  methods:{
    removeItem(id){
      this.$emit("removeItem",id)
    },
    editItem(id){
      this.$emit("editItem",id)
    }
  }
}
</script>

<style>

</style>
