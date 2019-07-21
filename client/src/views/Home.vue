<template>
  <div class="home">
    <h3>Welcome to FoxHomes!</h3>
    <h4>Current FoxNumber : {{number}}</h4>
    <p> Next Number : {{nextNumber}} </p>
    <Fox :image="image"></Fox>
    <button @click.prevent="getFox" class="btn">Next Fox</button>
    <button @click.prevent="incrementFoxCount" class="btn">Increment Fox Count</button>
  </div>
</template>

<script>
import Fox from "@/components/Fox.vue";
import axios from "axios";
import { value, computed, watch, onCreated } from "vue-function-api";

export default {
  components: { Fox },
  setup(props, ctx) {
    const image = value("");
    const number = value(0);
    const nextNumber = computed(() => number.value + 1)

    const incrementFoxCount = () => {
      number.value++;
    };

    const getFox = async () => {
      let { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/`
      );
      image.value = data.image;
      number.value = number.value + 1;
    };

    watch(
      () => number.value,
      (value, oldValue) => {
        console.log("number: ", value, oldValue);
      }
    );

    onCreated(() => {
      getFox();
    });

    return {
      image,
      number,
      getFox,
      nextNumber,
      incrementFoxCount
    };
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
  width: 11rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 15px;
  margin: 1rem;
}
</style>
