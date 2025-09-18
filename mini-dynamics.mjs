export default () => {
  // Removing the following condition fixes the problem
  if (true) {
    return new URL("api/", "https://example.com").toString();
  }
};
