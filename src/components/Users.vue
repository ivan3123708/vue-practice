<template>
  <div id="users">
    <h1>USERS</h1>
    <form v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name"><br>
      <input type="email" v-model="newUser.email" placeholder="Enter Email"><br>
      <button type="submit">Add User</button>
    </form>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <input type="checkbox" v-model="user.contacted">
        <span :class="{ contacted: user.contacted }">
          {{ user.name }}: {{ user.email }} <button v-on:click="deleteUser(index)" class="btn-delete">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'users',
    data() {
      return {
        newUser: {},
        users: []
      }
    },
    methods: {
      addUser() {
        if (this.newUser.name && this.newUser.email) {
          this.users.push({
            name: this.newUser.name.trim(),
            email: this.newUser.email.trim(),
            contacted: this.newUser.contacted
          });

          this.newUser.name = '';
          this.newUser.email = '';
        }
      },
      deleteUser(i) {
        this.users.splice(i, 1);
      }
    },
    created() {
      return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => this.users = res.data);
    }
  }
</script>

<style>
  #users {
    overflow: hidden;
  }

  #users > h1 {
    margin-top: 100px;
  }

  #users > form > input {
    width: 200px;
    margin: 4px;
    padding: 4px;
    border: none;
    border-radius: 4px;
  }

  #users > form > button {
    margin-top: 10px;
    padding: 4px 10px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #2c3e50;
    cursor: pointer;
  }

  #users > ul {
    width: 50%;
    margin: auto;
    margin-top: 40px;
    text-align: left;
    list-style: none;
  }

  .contacted {
    text-decoration: line-through;
  }

  .btn-delete {
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #d43a3a;
    cursor: pointer;
  }
</style>
