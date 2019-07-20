<template>
  <div class="home">
    <h3>Welcome to FoxHomes!</h3>
    <h4>Current FoxNumber : {{number}}</h4>
    <Fox :image="image"></Fox>
    <button @click.prevent="getFox" class="btn">Next Fox</button>
  </div>
</template>

<script>
import Fox from "@/components/Fox.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    Fox
  },
  data() {
    return {
      image: "",
      number: 0
    };
  },
  methods: {
    async getFox() {
      let { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/`
      );
      console.log(data.image);
      this.image = data.image;
      this.number = this.number + 1
    }
  },
  created() {
    this.getFox();
  }
};
</script>

<style>
.border {
  border: 1px solid black;
}

.btn {
  background-color: salmon;
  padding: 0.7rem;
  width: 9rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 15px;
}
</style>
