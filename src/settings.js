module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: '/opt/render/project/src/flows/flows.json',
  userDir: '/opt/render/project/src/flows',
  credentialSecret: "suaSenhaSegura",
  httpStatic: [
    {
      path: '/flows',  // URL para acessar os arquivos (ex: /flows/flows.json)
      root: '/opt/render/project/src/flows' // Caminho absoluto no servidor
    }
  ],
  httpAdminRoot: '/admin', // Editor em /admin
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
