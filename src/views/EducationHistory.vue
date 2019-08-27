<template>
  <div class="education-history">
    <v-container fluid>
      <!-- PAGE TITLE -->
      <v-layout align-center justify-center>
        <span class="display-2 text-center">My Education</span>
      </v-layout>
      <!-- CAROUSEL -->
      <v-carousel
        progress
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        active-class
      >
        <!-- FOR EACH ITEM IN THE HISTORY ARRAY: -->
        <v-carousel-item v-for="(item, i) in history" :key="i">
          <v-sheet height="100%" color="rgba(0,0,0,0)">
            <v-layout align-center fill-height justify-center>
              <!-- TOOLTIP FOR CARD -->
              <v-tooltip
                bottom
                transition="expand-transition"
                :disabled="item.accomplishments.length == 0"
              >
                <template v-slot:activator="{ on }">
                  <!-- V-CARD -->
                  <v-card
                    class="pa-2"
                    active-class
                    max-width="700px"
                    hover
                    v-on="on"
                    @click="
                      item.accomplishmentsDisplayed = !item.accomplishmentsDisplayed
                    "
                  >
                    <v-layout align-center justify-center>
                      <!-- DETAILS -->
                      <div class="title-border">
                        <p
                          class="display-1 font-weight-medium text-center pa-2 ma-2"
                        >
                          {{ item.name }}
                        </p>
                      </div>
                    </v-layout>
                    <v-divider></v-divider>
                    <ul class="list-border text-center">
                      <li class="title">{{ item.degree }}</li>
                      <li class="subtitle-2">{{ item.gpa }}</li>
                      <li class="subtitle-2">{{ item.duration }}</li>
                    </ul>
                    <v-layout justify-center>
                      <!-- CHEVRON BUTTON (only show if accomplishments noted for job) -->
                      <v-btn
                        v-show="item.accomplishments.length > 0"
                        absolute
                        color="orange"
                        fab
                        x-small
                        bottom
                      >
                        <v-icon v-if="item.accomplishmentsDisplayed"
                          >mdi-chevron-up</v-icon
                        >
                        <v-icon v-else>mdi-chevron-down</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-expand-transition>
                      <!-- SHOW ACCOMPLISHMENTS IF THEY'RE NOTED -->
                      <div
                        v-show="
                          item.accomplishmentsDisplayed &&
                            item.accomplishments.length > 0
                        "
                        class="details-border"
                      >
                        <ul class="ma-1 pa-1">
                          <!-- FOR EACH ACCOMPLISHMENT: RETURN IT -->
                          <li
                            v-for="(accomplishment, j) in item.accomplishments"
                            :key="j"
                            class="subtitle-2"
                          >
                            {{ accomplishment }}
                          </li>
                        </ul>
                      </div>
                    </v-expand-transition>
                  </v-card>
                  <!-- TOOLTIP TEXT: 2 VERSIONS -->
                </template>
                <span v-if="item.accomplishmentsDisplayed">Hide details</span>
                <span v-else>Show additional details</span>
              </v-tooltip>
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
.education-history {
  padding: 1rem;
}
.title-border {
  width: 100%;
  line-height: 1.3em;
  margin: 0.5rem 0.5rem 0.75rem; /* between paragraphs */
  padding: 0rem;
  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgba(43, 124, 175, 0.507),
    rgba(58, 137, 185, 0.747)
  );
}
.list-border {
  border-radius: 12px;
  background-image: linear-gradient(to right, rgb(18, 43, 59), rgb(15, 31, 41));
  margin: 1rem 2rem 0rem;
  padding: 0.75rem;
  list-style-type: none;
}
.details-border {
  margin: 0rem 0.5rem 0.5rem;
  padding: 0.75rem;
  ul {
    margin-left: 1rem;
    li {
      margin: 9px 0px;
    }
  }
}
#inspire.v-application
  main.v-content
  .v-content__wrap
  .container
  .v-window.v-item-group.v-carousel {
  margin: -1rem 0rem;
  .v-window__container .v-window-item .v-responsive.v-carousel__item {
    .v-responsive__content .v-sheet .layout .v-card {
      border: none;
      border-radius: 16px 16px 32px 32px;
      background-image: linear-gradient(
        to bottom,
        rgb(36, 99, 138),
        rgb(26, 69, 95)
      );
      ul {
        li {
          line-height: 1.5em;
        }
      }
      .v-divider {
        margin: 0.25rem 0.5rem;
      }
      .v-expand-transition {
        ul {
          line-height: 3em;
          li {
            list-style-position: inside;
          }
        }
      }
    }
  }
}
</style>
