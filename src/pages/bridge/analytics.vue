<template>
  <div class="row">
    <div class="col-12 mb-10">
      <h1>what is Satellite bridge?</h1>
      <p>
        Satellite is one of the first ecosystem applications powered by the
        Axelar Network. Satellite is a decentralized cross-chain asset transfer
        application, which enables users to transfer assets they hold on a
        source chain to an address on a different destination chain.
      </p>
    </div>
    <div class="col-12">
      <BarChart
        x-type="time"
        title="Daily active users number of bridge"
        query-name="b-1"
        :axis="{ x: 'date', y: 'user' }"
        label="Volume"
      />
    </div>

    <div class="col-12">
      <BarChart
        x-type="time"
        title="Daily bridge number"
        query-name="b-1"
        :axis="{ x: 'date', y: 'number' }"
        label="Volume"
      />
    </div>

    <div class="col-12">
      <h1>source</h1>
      <p>Source means from which blockchain tokens come.</p>
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily source bridge number"
        :stacked="{
          number: 8,
          column: 'source',
          order: [
            'Fantom',
            'Ethereum',
            'Polygon',
            'Moonbeam',
            'Avalanche',
            'Axelarnet',
            'binance',
            'arbitrum',
          ],
        }"
        :stacked-order="[
          'Fantom',
          'Ethereum',
          'Polygon',
          'Moonbeam',
          'Avalanche',
          'Axelarnet',
          'binance',
          'arbitrum',
        ]"
        query-name="b-2"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="b-1"
        label="source bridge number"
        :some-in-group="{ by: 'source', over: 'user' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="number"
        title="Daily destination bridge number"
        :stacked="{
          number: 8,
          column: 'destination',
          order: [
            'Fantom',
            'Ethereum',
            'Polygon',
            'Moonbeam',
            'Avalanche',
            'Axelarnet',
            'binance',
            'arbitrum',
          ],
        }"
        :stacked-order="[
          'Fantom',
          'Ethereum',
          'Polygon',
          'Moonbeam',
          'Avalanche',
          'Axelarnet',
          'binance',
          'arbitrum',
        ]"
        query-name="b-2"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="b-2"
        label="destination bridge number"
        :some-in-group="{ by: 'destination', over: 'number' }"
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
