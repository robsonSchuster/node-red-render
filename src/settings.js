module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: '/opt/render/project/src/flows/flows.json', // Caminho absoluto no Render
  userDir: '/opt/render/project/src/flows',
  credentialSecret: "suaSenhaSuperSecreta", // Altere para sua senha!
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
