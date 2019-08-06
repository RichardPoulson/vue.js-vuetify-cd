<template>
  <div class="education-history">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">Education History</span>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md text-center>
      <v-layout wrap align-end justify-center row fill-height>
        <v-flex grow-shrink-0 xs11 sm5 md3 ma-2 pa-2 v-for="(item, i) in history" :key="i">
          <v-card dark color="primary">
            {{ item.name }}
            <br />
            {{ item.degree }}
            <br />
            {{ item.gpa }}
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
