<template>
    <div class="row">
      
      
  
      
  
      <div class="col-12">
        <h1>Comparing</h1>
      </div>
  
      <!-- ----------------------------------------------- 1 -->
      <div class="col-12">
        <BarChart
          xType="time"
          label="volume"
          title="Daily bridge out volume (US dollar$) axelar bridge VS other bridge"
          :stacked="{
            number: 19,
            column: 'bridge',
            order: [
              'Avalanche Bridge',
              'Solana Wormhole',
              'Near Rainbow Bridge',
              'Harmony Bridges',
              'Fantom Anyswap Bridge',
              'Polygon Bridges',
              'Optimism Bridges',
              'Arbitrum Bridges',
              'Gnosis: xDAI Bridges',
              'Optics Bridge',
              'BSC Anyswap Bridge',
              'Moonriver Anyswap Bridge',
              'RSK Token Bridge',
              'ZkSync Bridge',
              'Boba Network Bridge',
              'Axie Infinity: Ronin Bridge',
              'Synapse Bridge',
              'Nomad Bridge',
              'axelar bridge',
            ],
          }"
          :stacked-order="[
            'Avalanche Bridge',
            'Solana Wormhole',
            'Near Rainbow Bridge',
            'Harmony Bridges',
            'Fantom Anyswap Bridge',
            'Polygon Bridges',
            'Optimism Bridges',
            'Arbitrum Bridges',
            'Gnosis: xDAI Bridges',
            'Optics Bridge',
            'BSC Anyswap Bridge',
            'Moonriver Anyswap Bridge',
            'RSK Token Bridge',
            'ZkSync Bridge',
            'Boba Network Bridge',
            'Axie Infinity: Ronin Bridge',
            'Synapse Bridge',
            'Nomad Bridge',
            'axelar bridge',
          ]"
          query-name="b-4"
          :axis="{ x: 'date', y: 'volume' }"
        />
      </div>
  
      <div class="col-12">
        <DoughnutChart
          query-name="b-3"
          label="Total bridge out volume axelar bridge VS other bridge"
          :some-in-group="{ by: 'bridge', over: 'volume' }"
        />
      </div>
      <!-- ----------------------------------------------- 2 -->
      <div class="col-12">
        <BarChart
          xType="time"
          label="volume"
          title="Daily bridge in volume(US dollar$) axelar bridge VS other bridge"
          :stacked="{
            number: 19,
            column: 'bridge',
            order: [
              'Avalanche Bridge',
              'Solana Wormhole',
              'Near Rainbow Bridge',
              'Harmony Bridges',
              'Fantom Anyswap Bridge',
              'Polygon Bridges',
              'Optimism Bridges',
              'Arbitrum Bridges',
              'Gnosis: xDAI Bridges',
              'Optics Bridge',
              'BSC Anyswap Bridge',
              'Moonriver Anyswap Bridge',
              'RSK Token Bridge',
              'ZkSync Bridge',
              'Boba Network Bridge',
              'Axie Infinity: Ronin Bridge',
              'Synapse Bridge',
              'Nomad Bridge',
              'axelar bridge',
            ],
          }"
          :stacked-order="[
            'Avalanche Bridge',
            'Solana Wormhole',
            'Near Rainbow Bridge',
            'Harmony Bridges',
            'Fantom Anyswap Bridge',
            'Polygon Bridges',
            'Optimism Bridges',
            'Arbitrum Bridges',
            'Gnosis: xDAI Bridges',
            'Optics Bridge',
            'BSC Anyswap Bridge',
            'Moonriver Anyswap Bridge',
            'RSK Token Bridge',
            'ZkSync Bridge',
            'Boba Network Bridge',
            'Axie Infinity: Ronin Bridge',
            'Synapse Bridge',
            'Nomad Bridge',
            'axelar bridge',
          ]"
          query-name="b-5"
          :axis="{ x: 'date', y: 'volume' }"
        />
      </div>
  
      <div class="col-12">
        <DoughnutChart
          query-name="b-5"
          label="Total bridge in volume axelar bridge VS other bridge"
          :some-in-group="{ by: 'bridge', over: 'volume' }"
        />
      </div>
      <!-- ----------------------------------------------- 3 -->
      <div class="col-12">
        <BarChart
          xType="time"
          label="volume"
          title="Axelar volume bridge in to total Ethereum ecosystem volume bridge in (percent%)"
          query-name="b-6"
          :axis="{ x: 'date', y: 'ratio' }"
        />
      </div>
  
      <!-- ----------------------------------------------- 4 -->
      <div class="col-12">
        <BarChart
          xType="time"
          label="volume"
          title="Axelar volume bridge in to total Ethereum ecosystem volume bridge out (percent%)"
          query-name="b-7"
          :axis="{ x: 'date', y: 'ratio' }"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
    components: {
      BarChart: () => import("@/components/charts/bar.vue"),
      DoughnutChart: () => import("@/components/charts/doughnut.vue"),
    },
  };
  </script>
  