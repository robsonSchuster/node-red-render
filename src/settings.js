module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: "/opt/render/project/src/flows/flows.json",
  userDir: "/opt/render/project/src/flows",
  credentialSecret: "suaSenhaSegura",
  httpStatic: "/opt/render/project/src/flows", // 👈 Pasta exposta
  httpAdminRoot: "/admin", // Evita conflito com a rota estática
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },
};
