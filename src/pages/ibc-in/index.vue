<template>
  <div class="row">
    <div class="col-12">
      <h1>IBC Token Transfer</h1>
      <p>
        Transferring tokens between chains is both a common requirement and a
        significant technical challenge when two chains are incompatible. A
        convenient solution for moving tokens between chains is essential.
      </p>
      <p>
        In this section, you will explore how a fungible token transfer can be
        done with IBC. <br />
      </p>

      <p>
        There are many use cases involving token transfers on blockchains, like
        the tokenization of assets holding value or initial coin offerings
        (ICOs) to finance blockchain projects. IBC makes it possible to transfer
        tokens and other digital assets between (sovereign) chains, both
        fungible and non-fungible tokens. For example, fungible token transfers
        allow you to build applications relying on cross-chain payments and
        token exchanges. Therefore, IBC frees up great potential for cross-chain
        Decentralized Finance (DeFi) applications by offering a technically
        reliable cross-chain interoperability protocol that is compatible with
        digital assets on multiple networks.
      </p>
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily IBC_TRANSFER_IN volume of tokens"
        :stacked="{
          number: 11,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
            'other',
          ],
        }"
        :stacked-order="[
          'dot',
          'wbtc',
          'usdc',
          'usdt',
          'acre',
          'evmos',
          'uni',
          'fet',
          'atom',
          'cre',
          'chf',
          'other',
        ]"
        query-name="i-1"
        :groupBy="{ by: 'date', type: 'asc' }"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="i-1"
        label="Total IBC_TRANSFER_IN volume of tokens"
        :some-in-group="{ by: 'currency', over: 'usd' }"
      />
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>observation</div>
            </div>
          </div>
        </template>
        <template #text>
          <div class="mt-4">
            <ul>
              <li>
                Majority of volume belongs to USDC or axlUSDC. after it luna and
                shib have big volume too
              </li>
              <li>There are many tokens that could transfer through axlar</li>
              <li>
                After lunching of wrap tokens on axelar the volume of transfer
                in increase
              </li>
            </ul>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>by chains</h2>
      <p>
        In this section we are going to exploire IBC TRANSFER IN in oint of view
        of blockchain transferring.
      </p>

      <p>All volume are in US dollars</p>
    </div>

    <!-- <div class="col-12">
      <BarChart
    
        :dot-format-date="true"
        label="action"
        title="Total IBC_TRANSFER_IN volume of tokens"
        :stacked="{
          number: 12,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
          ],
        }"
        :stacked-order="[
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
        ]"
        query-name="i-3"
        
        :axis="{ x: 'currency', y: 'usd' }"
      />
    </div> -->

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily IBC_TRANSFER_IN volume of blockchains"
        :stacked="{
          number: 11,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
          ],
        }"
        :stacked-order="[
          'dot',
          'wbtc',
          'usdc',
          'matic',
          'usdc',
          'usdt',
          'acre',
          'evmos',
          'uni',
          'fet',
          'atom',
          'cre',
          'chf',
        ]"
        query-name="i-4"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="i-2"
        label="tal IBC_TRANSFER_IN volume of blockchains"
        :some-in-group="{ by: 'foreign_chain', over: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily IBC_TRANSFER_IN volume of blockchains"
        :stacked="{
          number: 11,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
          ],
        }"
        :stacked-order="[
          'dot',
          'wbtc',
          'usdc',
          'matic',
          'usdc',
          'usdt',
          'acre',
          'evmos',
          'uni',
          'fet',
          'atom',
          'cre',
          'chf',
        ]"
        query-name="i-5"
        :groupBy="{ by: 'date', type: 'asc' }"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Total IBC_TRANSFER_IN volume of blockchains by tokens"
        :stacked="{
          number: 11,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
          ],
        }"
        :stacked-order="[
          'dot',
          'wbtc',
          'usdc',
          'matic',
          'usdc',
          'usdt',
          'acre',
          'evmos',
          'uni',
          'fet',
          'atom',
          'cre',
          'chf',
        ]"
        query-name="i-6"
        :groupBy="{ by: 'date', type: 'asc' }"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Total IBC_TRANSFER_IN volume of blockchains"
        :stacked="{
          number: 11,
          column: 'currency',
          order: [
            'dot',
            'wbtc',
            'usdc',
            'matic',
            'usdc',
            'usdt',
            'acre',
            'evmos',
            'uni',
            'fet',
            'atom',
            'cre',
            'chf',
          ],
        }"
        :stacked-order="[
          'dot',
          'wbtc',
          'usdc',
          'matic',
          'usdc',
          'usdt',
          'acre',
          'evmos',
          'uni',
          'fet',
          'atom',
          'cre',
          'chf',
        ]"
        query-name="i-7"
        :axis="{ x: 'date', y: 'usd' }"
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
    // LineChart: () => import("@/components/charts/line.vue"),
    // // // MixedChart: () => import("@/components/charts/mixed.vue"),
    // SingleChart: () => import("@/components/charts/single.vue"),
    // DataTable: () => import("@/components/table.vue")
  },
};
</script>
