<template>
  <article class="cocktail">
    <div class="img-container">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="cocktail-footer">
      <h3>{{ item.name }}</h3>
      <h4>{{ item.glass }}</h4>
      <p>{{ item.info }}</p>
      <nuxt-link :to="{name: 'cocktail-id', params: { id:item.id } }" class="btn btn-primary btn-details">
        details
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props:{
    item:{
      type: Object,
      required: true
    }
  }
}
</script>
