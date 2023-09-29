<template>
  <div>
    <h1>Welcome to My Site</h1>
    <div v-if="!nameSubmitted">
      <label for="name" class="block mb-2">Please enter your name:</label>
      <input type="text" id="name" v-model="name" class="w-full p-2 border border-gray-400 rounded-md">
      <button @click="submitName" class="mt-4 px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark">Submit</button>
    </div>
    <div v-else-if="!ageSubmitted">
      <label for="age" class="block mb-2">Hi {{ name }}, please enter your age:</label>
      <input type="number" id="age" v-model.number="age" class="w-full p-2 border border-gray-400 rounded-md">
      <button @click="submitAge" class="mt-4 px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark">Submit</button>
    </div>
    <div v-else>
      <p v-if="isAdult" class="text-3xl font-bold mb-4">Welcome to the adult version of the site, {{ name }}!</p>
      <p v-else class="text-3xl font-bold mb-4">Welcome to the kids version of the site, {{ name }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      nameSubmitted: false,
      ageSubmitted: false,
    }
  },
  computed: {
    isAdult() {
      return this.age >= 18
    },
  },
  methods: {
    submitName() {
      if (this.name.trim().length === 0) {
        alert('Please enter your name.')
        return
      }
      this.nameSubmitted = true
    },
    submitAge() {
      if (isNaN(this.age) || this.age < 0) {
        alert('Please enter a valid age.')
        return
      }
      this.ageSubmitted = true
    },
  },
}
</script>