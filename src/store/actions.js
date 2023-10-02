import axios from "axios";

export default {
  async getPresentation(context) {
    context.commit("setLoading", { key: "presentation", value: true });
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/presentacion.json`
      );
      context.commit("setPresentation", response.data);
      context.commit("setLoading", { key: "presentation", value: false });
    } catch (error) {
      console.error("Error fetching presentation:", error);
    }
  },
  async getExperience(context) {
    context.commit("setLoading", { key: "experience", value: true });
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/experiencia.json`
      );
      context.commit("setExperience", response.data);
      context.commit("setLoading", { key: "experience", value: false });
    } catch (error) {
      console.error("Error fetching experience:", error);
    }
  },
  async getEducation(context) {
    context.commit("setLoading", { key: "education", value: true });
    try {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/educacion.json`
      );
      context.commit("setEducation", response.data);
      context.commit("setLoading", { key: "education", value: false });
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
