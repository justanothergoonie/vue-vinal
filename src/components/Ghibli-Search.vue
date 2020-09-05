<template>
  <div class="ghibli">
    <h1>Ghiblipedia</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <form v-on:submit.prevent>
      <select name="subject" v-model="newSubject">
        <option value>Subject</option>
        <option value="films">Films</option>
        <option value="people">People</option>
        <option value="locations">Locations</option>
        <option value="species">Species</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <input type="text" name="character" placeholder="Something Ghibli" v-model="newSpecSub" />
      <button
        class="submit"
        @click="
					$emit('do-search');
					('gimmie-ghibli-giphy-gifs');
				"
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ghibli-API",
  props: ["searchResults"],

  data: function() {
    return {
      newSubject: "",
      newSpecSub: ""
    };
  },
  method: {
    nameSake: function() {
      console.log("GhibliSearch.vue sent a search to App.vue");
      this.$emit("searching-ghibli");
    }
  },
  watch: {
    newSubject: function() {
      console.log(
        "GhibliSearch.vue saw a change in the selected subject",
        this.newSubject
      );
      this.$emit("subject-search", this.newSubject);
    },
    newSpecSub: function() {
      console.log(
        "GhibliSearch.vue saw a change in the specSubject",
        this.newSpecSub
      );
      this.$emit("specSub-search", this.newSpecSub);
    }
  }
};
</script>
<style >
.ghibli {
  font-family: Ghibli;
}
form {
  margin-bottom: 5%;
}
</style>
