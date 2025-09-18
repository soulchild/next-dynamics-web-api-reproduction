export default () => {
  // Removing the following condition fixes the problem
  if (true) {
    let url = "api";
    url += `/`; // Not appending here fixes the problem
    return new URL(url, "https://example.com").toString();
  }
};
