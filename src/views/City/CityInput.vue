<template>
    <div v-if="cityData">
        {{ cityData.name }} Inputs:
        <p>Power usage (MW): {{ (cityData.power.currentElectricity * cityData.population / 14570000).toFixed(2) }}</p>
        <p>Power generation breakdown:</p>
        <v-sparkline
            :value=[cityData.generation.biofuel,cityData.generation.gas,cityData.generation.hydro,cityData.generation.nuclear,cityData.generation.solar,cityData.generation.wind]
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            :labels="labels"
            auto-draw
        ></v-sparkline>
            <p>Demand trend:</p>    
                <v-sparkline
            :value=cityData.power.sinceMidnightDemand
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :auto-line-width="autoLineWidth"
            
            auto-draw
        ></v-sparkline>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    name: "CityInput",
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      //value: [],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'bars',
      autoLineWidth: false,
      labels: ["Biofuel","Gas","Hydro","Nuclear","Solar","Wind"],
    }),
    computed: mapGetters({
        cityData: "city/cityData",
    }), 
    mounted() {
    }
}
</script>
