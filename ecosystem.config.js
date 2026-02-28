module.exports = {
  apps: [
    {
      name: "tour-agency",
      cwd: "/var/www/frontend/tour-agency", // <- правильная директория
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        NEXT_PUBLIC_API_URL: "https://back.yolgo.travel/api/v1",
        SECRET_KEY: "ваш_секрет"
      },
    },
  ],
};