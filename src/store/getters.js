export default {
  activeBar: (state) => state.activeBar,
  isLoading: (state) => (key) => {
    return state.loading[key] !== undefined ? state.loading[key] : false;
  },
  presentationData: (state) => state.presentationData,
  experienceData: (state) => state.experienceData,
  educationData: (state) => state.educationData,
};
