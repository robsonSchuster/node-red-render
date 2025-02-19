module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: '/opt/render/project/src/flows/flows.json',
  userDir: '/opt/render/project/src/flows',
  credentialSecret: "suaSenhaSegura",
  // Adicione esta seção 👇
  httpStatic: '/opt/render/project/src/flows', // Pasta a ser exposta
  httpAdminRoot: '/admin', // Altere a rota padrão do admin para evitar conflitos
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
