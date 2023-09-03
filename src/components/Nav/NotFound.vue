<template>
  <div class="centered-container">
    <h1>DOMINIO INCORRECTO</h1>
    <h3>Te invito a conocer mi</h3>
    <router-link to="/MainPage"
      ><v-btn text class="selected-button"> página principal</v-btn>
    </router-link>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
