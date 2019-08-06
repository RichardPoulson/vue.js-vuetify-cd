<template>
  <div class="education-history">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">Education History</span>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout wrap align-end justify-center row fill-height>
        <v-flex xs10 sm5 md3 ma-2 pa-2 v-for="(item, i) in history" :key="i">
          <v-card class="pa-2" hover>
            <v-layout align-center justify-center>
              <p class="title text-center">{{ item.name }}</p>
            </v-layout>
            <v-divider></v-divider>
            <ul class="subtitle-2 pl-2">
              <li>{{ item.degree }}</li>
              <li>{{ item.gpa }}</li>
            </ul>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/education-data.json";
export default {
  data: () => ({
    history: json
  })
};
</script>

<style lang="scss" scoped>
#inspire.v-application.theme--dark {
  .v-content {
    .v-card {
      border: none;
      p {
        width: 100%;
        line-height: 1.3em;
        margin-bottom: 0.5rem; /* between paragraphs */
      }
      p.title {
        border-radius: 8px;
        margin: 0.75rem;
        padding: 1rem;
        background-color: rgba(55, 89, 129, 0.432);
      }
      ul {
        line-height: 1.3em;
        margin-top: 0.5rem; /* between paragraphs */
        border-radius: 8px;
        padding: 0.75rem;
        background-color: rgba(33, 56, 82, 0.637);
        li {
          margin-left: 1rem;
        }
      }
      background-image: linear-gradient(
        to bottom,
        rgb(157, 197, 221),
        rgb(112, 158, 187)
      );
    }
  }
}
</style>

