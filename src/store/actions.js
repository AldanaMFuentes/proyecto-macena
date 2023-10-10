import axios from "axios";

export default {
  async getPresentation() {
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/presentacion.json`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching presentation:", error);
    }
  },
  async getExperience() {
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/experiencia.json`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching experience:", error);
    }
  },
  async getEducation() {
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/educacion.json`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching education:", error);
    }
  },
  async getPhoneNumber(context) {
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/celContacto.json`
      );
      context.commit("setPhoneNumber", response.data);
    } catch (error) {
      console.error("Error fetching education:", error);
    }
  },
  async postContacto(payload) {
    try {
      const response = await axios.post(
        `https://pil-2023-land-default-rtdb.firebaseio.com/contacto/Harrington.json`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error fetching education:", error);
    }
  },
};
