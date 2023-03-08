<template>
  <div class="row">
    <div class="col-12 mb-8">
      <h1>What is Crypto Staking?</h1>
      <p>
        Like we mentioned above, crypto staking is the process of offering your
        crypto assets to help verify transactions. When you stake crypto, you
        are essentially putting your crypto up as collateral to help validate
        these transactions. As a token of appreciation for your support, you
        earn rewards in the form of new crypto tokens. The amount of crypto you
        earn and the payout interval will depend on the crypto asset you stake,
        the length of time you stake it for, and the network's overall health.
        Not all cryptocurrencies can be staked though. Only cryptocurrencies
        that use a Proof-of-Stake (PoS) algorithm can be staked. Proof-of-Stake
        is a consensus mechanism that requires participants to stake coins in
        order for them to be randomly selected as a validator of the network.
        Because participants have to give up their crypto assets, the network is
        thought to be less susceptible to hacks. After all, participants would
        not want to tamper with the blockchain, lose their crypto assets and the
        potential for rewards for the sake of hacking it. PoS is one of
        different ways blockchains can process and verify transactions. Another
        method is called Proof-of-Work, which we will explain later. For now,
        keep in mind that PoS keeps the blockchain distributed, decentralized
        and secure. Crypto staking can be a great way to earn passive income
        from your crypto holdings while helping to secure a blockchain network,
        which can be a noble contribution.
      </p>
      <p>
        in this section we will examine axelar token and will see what holders
        hold the axelar and how it stake and on what blockchain the axelar has
        more volume
      </p>
      <p class="mb-0">we groued the axelar holders as below:</p>

      <code
        >case when BALANCE/ between 0 and 10 then 'Shrimp' when BALANCE between
        10 and 100 then 'Crab' when BALANCE between 100 and 1000 then 'ctopus'
        when BALANCE/ between 1e3 and 10e3 then 'Fish' when BALANCE between 10e3
        and 100e3 then 'Dolphin' when BALANCE between 100e3 and 1000e3 then
        'Shark' when BALANCE between 1000e3 and 10000e3 then 'Whale' else
        'Humpback' end as wallet</code
      >
    </div>

    <div class="col-12">
      <LineChart
        x-type="time"
        title="Axelar price $"
        query-name="a-1"
        :axis="{ x: 'date', y: 'price' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        dot-format-date
        title="Volume of AXL asset of holder based on types"
        query-name="a-1"
        :axis="{ x: 'wallet', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="a-1"
        label="Volume of AXL asset of holder based on types"
        :some-in-group="{ by: 'wallet', over: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        label="action"
        title="Daily axelar holder types axelar hold volume"
        :stacked="{
          number: 8,
          column: 'wallet',
          order: [
            'Dolphin',
            'Shrimp',
            'Crab',
            'ctopus',
            'Fish',
            'Shark',
            'Whale',
            'Humpback',
          ],
        }"
        :stacked-order="[
          'Dolphin',
          'Shrimp',
          'Crab',
          'ctopus',
          'Fish',
          'Shark',
          'Whale',
          'Humpback',
        ]"
        query-name="a-2"
        :groupBy="{ by: 'date', type: 'asc' }"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="a-2"
        label="Number of holder types"
        :some-in-group="{ by: 'wallet', over: 'number' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        label="action"
        title="Number of holder types"
        query-name="a-3"
        :dotFormatDate="true"
        :axis="{ x: 'wallet', y: 'number' }"
      />
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart
        query-name="a-1"
        title="Total axelar wallet number"
        column="0"
      />
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>important points</div>
            </div>
          </div>
        </template>
        <template #text>
          <ul>
            <li>
              Before 2022-09-22 there were few axelar token number holding by
              holders after that suddenly hold volume increases significantly
            </li>
            <li>
              There are between 7-10 humpback that hold majority of axelar
              tokens (about 83%). on 2022-09-29 there were 10 humpback. their
              axelar tokens incresed and it reached 540M tokens on 2023-01-29.
              after that three humpback sold their tokens so that today there
              are 7 and they have 455M token.
            </li>
            <li>
              After humpback s whalses have the most axelar token. the number of
              them was 19 on 2022-09-29 and their possition was 75M after that
              both number and possition inreased and reched 103M token and 24
              respectively. after that booth dropped and todey there are 18
              whales with possition 79M tokens
            </li>

            <li>
              After 2023-01-26 all holders started to sell their axelar
              tokens.also the increasing of shrimp number is because of that.
              means the bigger holders sold their assets and turned to shrimp
            </li>

            <li>Majority of holders are shrimps.</li>
          </ul>
        </template>
      </vs-card>
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>Axelar holders on osmosis network</div>
            </div>
          </div>
        </template>
        <template #text>
          <p>
            Like previous section this section we are going to examine axelar
            holders but in osmosis network <br />
            The groupnig is like previous section: case <br />
            when BALANCE/ between 0 and 10 then 'Shrimp' <br />
            when BALANCE between 10 and 100 then 'Crab' <br />
            when BALANCE between 100 and 1000 then 'ctopus' <br />
            when BALANCE/ between 1e3 and 10e3 then 'Fish' <br />
            when BALANCE between 10e3 and 100e3 then 'Dolphin' <br />
            when BALANCE between 100e3 and 1000e3 then 'Shark' <br />
            when BALANCE between 1000e3 and 10000e3 then 'Whale' else 'Humpback'
            end as wallet <br />
          </p>
        </template>
      </vs-card>
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="a-3"
        label="Number of holder of axelar on osmosis"
        :some-in-group="{ by: 'wallet', over: 'volume' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        label="Volume"
        title="Volume of axelar held by wallets on osmosis"
        query-name="a-4"
        :dotFormatDate="true"
        :axis="{ x: 'wallet', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="a-3"
        label="Volume of axelar held by wallets on osmosis"
        :some-in-group="{ by: 'wallet', over: 'volume' }"
      />
    </div>

    <!-- <div class="col-12">
      <LineChart
      xType="time"
        title="Daily volume of axelar held on osmosis"
        query-name="a-3"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 8,
          column: 'wallet',
          order: [
            'Dolphin',
            'Shrimp',
            'Crab',
            'ctopus',
            'Fish',
            'Shark',
            'Whale',
            'Humpback',
          ],
        }"
      />
    </div> -->

    <div class="col-12">
      <BarChart
        label="holder"
        title="Number of axelar holder on osmosis"
        :stacked="{
          number: 8,
          column: 'wallet',
          order: [
            'Dolphin',
            'Shrimp',
            'Crab',
            'ctopus',
            'Fish',
            'Shark',
            'Whale',
            'Humpback',
          ],
        }"
        :stacked-order="[
          'Dolphin',
          'Shrimp',
          'Crab',
          'ctopus',
          'Fish',
          'Shark',
          'Whale',
          'Humpback',
        ]"
        query-name="a-5"
        :groupBy="{ by: 'date', type: 'asc' }"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>important points</div>
            </div>
          </div>
        </template>
        <template #text>
          <ul>
            <li>There is about 3.5M axelar token on osmosis chain</li>
            <li>
              There are two whales on osmosis chain that have majority of axelar
              tokens(about 2M).
            </li>
            <li>Number of axelar holders on osmosis have been growing</li>
            <li>Majority of wallets are shrimp</li>
          </ul>
        </template>
      </vs-card>
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart
        query-name="a-2"
        title="Total AXL paid as reward"
        column="6"
      />
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart
        query-name="a-2"
        title="Total number of validators"
        column="2"
      />
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart query-name="a-2" title="TVL" column="5" />
    </div>

    <!-- 
    <div class="col-12">
      <BarChart
        label="transaction"
        title="Daily staking action transaction number"
        :stacked="{
          number: 3,
          column: 'action',
          order: [
            'delegate',
            'redelegate',
            'undelegate',
          ],
        }"
        :stacked-order="[
               'delegate',
            'redelegate',
            'undelegate',
        ]"
        query-name="a-7"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div> -->

    <div class="col-12">
      <BarChart
        xType="time"
        title="Volume of AXL asset of holder based on types"
        query-name="a-9"
        :axis="{ x: 'date', y: 'volume' }"
      />
    </div>

    <div class="col-12">
      <LineChart
        x-type="time"
        title="Cumulative daily get reward"
        query-name="a-4"
        :axis="{ x: 'date', y: 'cumulatives' }"
      />
    </div>

    <!-- <div class="col-12">
      <LineChart
      xType="time"
        title="Daily axelar holder number"
        query-name="a-2"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 8,
          column: 'wallet',
          order: [
            'Dolphin',
            'Shrimp',
            'Crab',
            'ctopus',
            'Fish',
            'Shark',
            'Whale',
            'Humpback',
          ],
        }"
      />
    </div> -->
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
    LineChart: () => import("@/components/charts/line.vue"),
    // // MixedChart: () => import("@/components/charts/mixed.vue"),
    SingleChart: () => import("@/components/charts/single.vue"),
    // DataTable: () => import("@/components/table.vue")
  },
};
</script>
