<template>
  <div class="work-history ma-4">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">Work History</span>
      </v-layout>
      <v-carousel progress hide-delimiter-background hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in history" :key="i">
          <v-sheet height="100%" color="rgba(0,0,0,0)">
            <v-layout align-center fill-height justify-center>
              <v-tooltip
                bottom
                transition="expand-transition"
                :disabled="item.accomplishments.length == 0"
              >
                <template v-slot:activator="{ on }">
                  <v-card
                    class="pa-2"
                    max-width="700px"
                    hover
                    v-on="on"
                    @click="item.accomplishmentsDisplayed = !item.accomplishmentsDisplayed"
                  >
                    <v-layout align-center justify-center>
                      <div class="title-border">
                        <p class="display-1 text-center pa-2 ma-2">{{ item.name }}</p>
                      </div>
                    </v-layout>
                    <v-divider></v-divider>
                    <ul class="list-border text-center">
                      <li class="title">{{ item.title }}</li>
                      <li class="subtitle-2">{{ item.duration }}</li>
                    </ul>
                    <v-layout justify-center>
                      <v-btn
                        v-show="item.accomplishments.length > 0"
                        absolute
                        color="orange"
                        fab
                        x-small
                        bottom
                      >
                        <v-icon v-if="item.accomplishmentsDisplayed">mdi-chevron-up</v-icon>
                        <v-icon v-else>mdi-chevron-down</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-expand-transition>
                      <div
                        v-show="item.accomplishmentsDisplayed && (item.accomplishments.length > 0)"
                      >
                        <ul class="ma-1 pa-1">
                          <li
                            v-for="(accomplishment, j) in item.accomplishments"
                            :key="j"
                            class="subtitle-1"
                          >{{ accomplishment}}</li>
                        </ul>
                      </div>
                    </v-expand-transition>
                  </v-card>
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
  margin: 1rem; /* between paragraphs */
  padding: 0rem;
  border-radius: 12px;
  background-color: rgba(107, 176, 255, 0.151);
}
.list-border {
  border-radius: 12px;
  background-color: rgba(33, 56, 82, 0.637);
  margin: 1rem 2rem 0.5rem;
  padding: 0.75rem;
  list-style-type: none;
}
#inspire.v-application .v-content .education-history {
  .display-2 {
    margin: 1rem 0rem -1rem;
  }
  .v-carousel .v-card {
    ul {
      margin-left: 1rem;
    }
    li {
      line-height: 1.5em;
      list-style-position: inside;
      margin-left: 1rem;
    }
    li.subtitle-1 {
      line-height: 1.3em;
      margin: 0.5rem 0rem;
      margin-left: 1rem;
    }
  }
}
#inspire.v-application {
  .v-content {
    .v-card {
      border: none;
      border-radius: 8px 8px 20px 20px;
      background-image: linear-gradient(
        to bottom,
        rgb(36, 99, 138),
        rgb(26, 69, 95)
      );
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
#inspire.v-application
  .v-content
  div.work-history.ma-4.view
  div.container
  div.v-window.v-item-group.theme--dark.v-window--show-arrows-on-hover.v-carousel.v-carousel--hide-delimiter-background
  div.v-window__container
  div.v-window-item
  .v-carousel__item
  .v-responsive__content
  .v-sheet
  .v-card
  ul
  li.subtitle-1 {
  line-height: 1.3em;
  margin-left: 0.5rem;
}
</style>
