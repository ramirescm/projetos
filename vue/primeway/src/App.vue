<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">My Title</h1>
    </md-toolbar>
  
  <div class="main-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.</p>
  

  <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Initial value</label>
          <md-input v-model="initialValue"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Autocomplete (with fetch)</label>
          <md-autocomplete v-model="autocompleteValue" :fetch="fetchFunction"></md-autocomplete>
        </md-input-container>

        <md-input-container>
          <label>With label</label>
          <md-input placeholder="My nice placeholder"></md-input>
        </md-input-container>

        <md-input-container md-inline>
          <label>Inline field</label>
          <md-input></md-input>
        </md-input-container>

        <md-input-container>
          <label>Number</label>
          <md-input type="number"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Textarea</label>
          <md-textarea></md-textarea>
        </md-input-container>

        <md-input-container>
          <label>Disabled</label>
          <md-input disabled></md-input>
        </md-input-container>

        <md-input-container md-clearable>
          <label>Clearable</label>
          <md-input v-model="initialValue"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary">Button</md-button>
      </form>
</div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>

</style>
