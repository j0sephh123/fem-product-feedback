// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/_colors.scss" as *; @use "@/assets/styles/_fonts.scss" as *; @use "@/assets/styles/_mixins.scss" as *;',
        },
      },
    },
  },
});
