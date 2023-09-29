<!-- NameAge.vue -->
<template>
    <div>
        <label>
            Name:
            <input type="text" v-model="name" />
        </label>
        <br />
        <label>
            {{ `Hi ${name}, please enter your age:` }}
            <input type="number" v-model.number="age" />
        </label>
        <br />
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'NameAge',
    data() {
        return {
            name: '',
            age: null,
        };
    },
    methods: {
        submit() {
            if (this.age >= 18) {
                this.$router.push('/adult');
            } else {
                this.$router.push('/kids');
            }
        },
    },
};
</script>