<script setup lang="ts">
import { faker } from '@faker-js/faker/locale/en';
import { ref } from 'vue';

const fullName = ref(`${faker.name.firstName()} ${faker.name.lastName()}`);
const avatarUrl = ref(faker.image.avatar());
const natureImageUrl = ref(faker.image.nature());
</script>

<template>
  <h1>Webpack CJS Faker Demo</h1>
  <div class="card">
    <div class="card__image">
      <img :src="natureImageUrl" :alt="'Background image for ' + fullName" />
    </div>
    <div class="card__profile">
      <img :src="avatarUrl" :alt="'Avatar image of ' + fullName" />
    </div>
    <div class="card__body">
      {{ fullName }}
    </div>
  </div>
</template>

<style>
.card {
  border-radius: 4px;
  width: 256px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.card__body {
  padding: 64px 8px 16px;
}

.card__image {
  padding-bottom: 100%;
  position: relative;
  border-bottom: 1px solid #888888;
}

.card__image img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.card__profile {
  position: absolute;
  width: 128px;
  height: 128px;
  top: 256px;
  left: 64px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 100%;
  border: 1px solid #dddddd;
  overflow: hidden;
}

.card__profile img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
