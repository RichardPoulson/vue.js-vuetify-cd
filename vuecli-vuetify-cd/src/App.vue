<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense nav>
          <router-link v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item @click="0" active-class class="ma-1">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="title mr-1">
            <span class="application-title">{{ title }}&nbsp;</span>
            {{ subtitle }}
          </span>
        </v-toolbar-title>
        <v-spacer />
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
    title: "Richard Poulson",
    subtitle: "Professional Site",
    items: [
      {
        icon: "mdi-home",
        title: "Home",
        route: "/"
      },
      {
        icon: "mdi-briefcase",
        title: "Work History",
        route: "/work"
      },
      {
        icon: "mdi-school",
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
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#inspire.v-application
  .v-navigation-drawer
  .v-navigation-drawer__content
  .v-list
  .router-link-exact-active
  .v-list-item {
  background-image: linear-gradient(
    to right,
    var(--v-primary-base),
    var(--v-accent-base)
  );
}
#inspire.v-application
  .v-app-bar
  .v-toolbar__content
  .v-toolbar__title
  .application-title {
  color: var(--v-primary-base);
}
</style>

