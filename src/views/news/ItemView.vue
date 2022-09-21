<template>
  <div>
    <h3>news item</h3>
    <ul>
      <li v-for="news in list" :key="news.id">{{ news.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  /**
   *  ! data
   */
  data() {
    return {
      list: [],
    };
  },

  /**
   *  ! lifecycle
   */
  async created() {
    const res = await axios.get("https://api.hnpwa.com/v0/news/1.json");
    console.log(res.data);
    this.list = res.data;
  },
};
</script>
