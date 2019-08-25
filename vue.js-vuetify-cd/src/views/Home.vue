<template>
  <div class="welcome-view ma-4 pa-4">
    <v-container fluid>
      <!-- PAGE TITLE -->
      <v-layout align-center justify-center row>
        <v-flex xs12>
          <p class="display-2 text-center">Welcome to my site!</p>
        </v-flex>
        <v-flex xs12>
          <p class="title text-center">
            Here, you can learn a little more about me, such as where I went to
            school and the jobs I've worked at.
          </p>
          <p class="subtitle-2 text-center created-with">
            This site was created with the JavaScript frameworks and modules
            below; if you would like to use this project to create your own
            site, you can find the code
            <a
              href="https://github.com/RichardPoulson/vue.js-vuetify-cd"
              target="_blank"
              >here</a
            >.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout align-end justify-space-around fill-height row>
        <v-flex v-for="(item, i) in technologies" :key="i" xs5 sm4 md3 lg2>
          <a :href="item.href" target="_blank">
            <div class="svg-logo" v-html="item.image" />
            <p class="text-center">{{ item.name }}</p>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    technologies: [
      {
        name: "Vue.js",
        image: require("@/assets/img/vue-logo.svg"),
        href: "https://vuejs.org/"
      },
      {
        name: "Vuetify",
        image: require("@/assets/img/vuetify-logo.svg"),
        href: "https://vuetifyjs.com/en/"
      },
      {
        name: "Webpack",
        image: require("@/assets/img/webpack-logo.svg"),
        href: "https://webpack.js.org/"
      },
      {
        name: "Sass",
        image: require("@/assets/img/sass-logo.svg"),
        href: "https://sass-lang.com/"
      },
      {
        name: "Jest",
        image: require("@/assets/img/jest-logo.svg"),
        href: "https://jestjs.io/"
      },
      {
        name: "Nightwatch",
        image: require("@/assets/img/nightwatch-logo.svg"),
        href: "https://nightwatchjs.org/"
      },
      {
        name: "Selenium",
        image: require("@/assets/img/selenium-logo.svg"),
        href: "https://www.seleniumhq.org/"
      },
    ]
  })
};
</script>

<style lang="scss" scoped>
.welcome-view {
  padding: 1rem;
}
.created-with {
  margin: 4rem 0rem 0rem;
}
</style>
