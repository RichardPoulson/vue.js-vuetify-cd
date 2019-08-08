<template>
  <div class="welcome-view ma-4 pa-4">
    <v-container fluid>
      <!-- PAGE TITLE -->
      <v-layout align-center justify-center row>
        <v-flex xs12>
          <p class="display-2 text-center">Welcome to my site!</p>
        </v-flex>
        <v-flex xs12>
          <p
            class="title"
          >Here, you can learn a little more about me, such as where I got my education or where I went to school.</p>
          <p class="subtitle-1">
            This site was created using the JavaScript frameworks/modules listed below; if you'd like to use this project to make your own website, you can find the code
            <a
              href
            >here</a>.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.welcome-view {
  padding: 1rem;
}
</style>
