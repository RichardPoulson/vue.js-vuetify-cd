<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <router-link to="/">
            <v-list-item @click>
              <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/about">
            <v-list-item @click>
              <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer />
        <v-icon @click="this.$vuetify.theme.dark = $vuetify.theme.dark">mdi-theme-light-dark</v-icon>
      </v-app-bar>

      <v-content>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </v-content>

      <v-footer app>
        <span>&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// https://nodejs.org/api/modules.html#modules_require_id
export default {
  name: "App",
  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "Home",
        route: "/"
      },
      {
        icon: "mdi-view-dashboard",
        title: "Work History",
        route: "/work"
      },
      {
        icon: "mdi-view-dashboard",
        title: "Educational History",
        route: "/education"
      },
      {
        icon: "mdi-view-dashboard",
        title: "Projects",
        route: "/projects"
      }
    ],
    drawer: null
  })
};
</script>

<style lang="scss" scoped>
#inspire.v-application {
  .v-navigation-drawer {
    .v-navigation-drawer__content {
      a {
        text-decoration: none;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

