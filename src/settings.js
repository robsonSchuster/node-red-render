module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: '/opt/render/project/src/flows/flows.json',
  userDir: '/opt/render/project/src/flows',
  credentialSecret: "suaSenhaSegura",
  httpStatic: [
    { 
      path: '/flows', 
      root: '/opt/render/project/src/flows' 
    }
  ],
  httpAdminRoot: '/admin',
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
