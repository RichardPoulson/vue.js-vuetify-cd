<template>
  <div class="work-history">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">Work History</span>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout wrap align-end justify-center row fill-height>
        <v-flex xs10 sm8 md5 ma-2 pa-2 v-for="(item, i) in history" :key="i">
          <v-card
            class="pa-1"
            hover
            @click="item.accomplishmentsDisplayed = !item.accomplishmentsDisplayed"
          >
            <v-layout align-center justify-center>
              <p class="title text-center title-border">{{ item.name }}</p>
            </v-layout>
            <v-divider></v-divider>
            <ul class="subtitle-2 list-border">
              <li>{{ item.title }}</li>
              <li>{{ item.duration }}</li>
            </ul>
            <v-btn
              v-show="item.accomplishments.length > 0"
              absolute
              color="orange"
              class="white--text"
              fab
              small
              right
              bottom
            >
              <v-icon v-if="item.accomplishmentsDisplayed">mdi-chevron-down</v-icon>
              <v-icon v-else>mdi-chevron-up</v-icon>
            </v-btn>
            <v-expand-transition>
              <div v-show="item.accomplishmentsDisplayed && (item.accomplishments.length > 0)">
                <ul class="ma-1 pa-1">
                  <li
                    v-for="(accomplishment, j) in item.accomplishments"
                    :key="j"
                    class="subtitle-2"
                  >{{ accomplishment}}</li>
                </ul>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/work-data.json";
export default {
  data: () => ({
    history: json
  })
};
</script>

<style lang="scss" scoped>
.title-border {
  width: 100%;
  line-height: 1.3em;
  margin-bottom: 0.5rem; /* between paragraphs */
  border-radius: 6px 6px 12px 12px;
  background-color: rgba(107, 176, 255, 0.151);
}
.list-border {
  border-radius: 6px 6px 12px 12px;
  background-color: rgba(33, 56, 82, 0.637);
  margin: 0.5rem; /* between paragraphs */
  padding: 0.75rem;
  ul {
    line-height: 1.3em;
  }
}
#inspire.v-application.theme--dark {
  .v-content {
    .v-card {
      border: none;
      border-radius: 8px 8px 20px 20px;
      p.title {
        margin: 0.75rem;
        padding: 1rem;
      }
      ul {
        li {
          list-style-position: inside;
        }
      }
      background-image: linear-gradient(
        to bottom,
        rgb(36, 99, 138),
        rgb(26, 69, 95)
      );
    }
  }
}
</style>

