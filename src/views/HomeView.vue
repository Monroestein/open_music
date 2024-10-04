<template>
  <div class="home">
    <Header/>
    <Categories/>
    <Quantity/>
    <NewAlbum/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Categories from '@/components/Categories.vue';
import Quantity from '@/components/Quantity.vue';
import NewAlbum from '@/components/NewAlbum.vue';

import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['state'])
  },
  components: {
    Header,
    Categories,
    Quantity,
    NewAlbum
  }
}
</script>
