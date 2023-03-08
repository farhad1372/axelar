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
      <h2>by tokens</h2>
      <p>
        In this section we are going to examine the token volume that flow throw
        the iBC OUT
      </p>
      <p>NOTE: ALL volumes are in US dollars</p>
    </div>

    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily IBC_TRANSFER_OUT volume of tokens"
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
        query-name="i-8"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        xType="category"
        label="volume"
        title="Total IBC_TRANSFER_OUT volume of tokens"
        dot-format-date
        :some-in-group="{ by: 'currency', over: 'usd' }"
        query-name="i-10"
        :axis="{ x: 'currency', y: 'usd' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="i-3"
        label="Total IBC_TRANSFER_OUT volume of tokens"
        :some-in-group="{ by: 'currency', over: 'volume' }"
      />
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>Impotrant notes</div>
            </div>
          </div>
        </template>
        <template #text>
          <div class="mt-4">
            <ol>
              <li>
                <span>There are several spike on the daily volume chart</span>
                <ul>
                  <li>First on 2022-09-27 with 17M$ axelar token.</li>
                  <li>Second on 2022-11-26 with 41M$ luna token.</li>
                  <li>Thierd on 2023-02-23 with 7M$ luna luna.</li>
                </ul>
              </li>

              <li class="mt-4">
                At the begining majority of tranferrs was AXL but in time USDC
                took it's place and now about 70% of transferring done bu
                USDC(axlUSDC)
              </li>
              <li class="mt-4">
                Luna has a huge total volume of iBC but all the transferring
                done suddenly and LUNA have no place on daily transferring
              </li>
              <li class="mt-4">
                Recently Wrap tokens appeared in daily transferring
              </li>
            </ol>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-10">
      <h2>by chains</h2>
      <p>
        In this section we are going to examine the blockchains volume that flow
        throw the iBC OUT
      </p>
    </div>


    <div class="col-12">
      <BarChart
        xType="time"
        label="volume"
        title="Daily IBC_TRANSFER_OUT volume based on receiver wallets"
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
        query-name="i-11"
    
        :axis="{ x: 'date', y: 'volume' }"
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
