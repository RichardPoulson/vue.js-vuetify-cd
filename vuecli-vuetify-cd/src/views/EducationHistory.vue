<template>
  <div class="education-history">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">Educational History</span>
      </v-layout>
    </v-container>
    <v-container>
      <v-carousel
        interval
        progress
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        touch
      >
        <v-carousel-item v-for="(item, i) in history" :key="i">
          <v-sheet height="100%">
            <v-layout align-center fill-height justify-center>
              <v-card
                class="pa-2"
                max-width="60%"
                hover
                @click="item.accomplishmentsDisplayed = !item.accomplishmentsDisplayed"
              >
                <v-layout align-center justify-center>
                  <div class="title-border">
                    <p class="display-1 text-center pa-2 ma-2">{{ item.name }}</p>
                  </div>
                </v-layout>
                <v-divider></v-divider>
                <ul class="subtitle-2 list-border">
                  <li>{{ item.degree }}</li>
                  <li>{{ item.gpa }}</li>
                  <li>{{ item.duration }}</li>
                </ul>
              </v-card>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
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
.title-border {
  width: 100%;
  line-height: 1.3em;
  margin: 1rem; /* between paragraphs */
  padding: 0rem;
  border-radius: 12px;
  background-color: rgba(107, 176, 255, 0.151);
}
.list-border {
  border-radius: 12px;
  background-color: rgba(33, 56, 82, 0.637);
  margin: 1rem 1.5rem 0.5rem;
  padding: 0.75rem;
  list-style-type: none;
  line-height: 1.3em;
}
#inspire.v-application.theme--dark {
  .v-content {
    .v-card {
      border: none;
      border-radius: 8px 8px 20px 20px;
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

