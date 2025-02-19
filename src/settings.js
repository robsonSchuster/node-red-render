module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: '/opt/render/project/src/flows/flows.json',
  userDir: '/opt/render/project/src/flows',
  credentialSecret: "suaSenhaSegura",
  httpStatic: '/opt/render/project/src/flows', // Pasta exposta
  httpAdminRoot: '/admin', // Editor em /admin
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
