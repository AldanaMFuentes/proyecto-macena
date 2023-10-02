export default {
  setActiveBar(state, payload) {
    state.activeBar = payload;
  },
  setLoading(state, { key, value }) {
    state.loading[key] = value;
  },
  setPresentation(state, data) {
    state.presentationData = data;
  },
  setExperience(state, data) {
    state.experienceData = data;
  },
  setEducation(state, data) {
    state.educationData = data;
  },
  setPhoneNumber(state, data) {
    state.phoneNumber = data;
  },
};
