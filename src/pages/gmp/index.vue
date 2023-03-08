<template>
  <div class="row">
    <div class="col-12">
      <h1>GMP Activities</h1>
      <p>In this section we will explore GMP activities over EVM networks</p>
      <p>
        General Message Passing Axelar's General Message Passing (GMP) enables a
        developer building on one chain to call any function on any other
        connected chain. (We use the word “function” to encompass both smart
        contracts at the application layer and functions built at the protocol
        layer, as in Cosmos, for example.) That means complete composability
        across Web3. With GMP you can:
      </p>

      <p>
        Call a contract on chain B from chain A. Call a contract on chain B from
        chain A and attach some tokens.
      </p>

      <p>
        Prerequisites. <br />
        For GMP to work, both chain A and chain B must be EVM chains with a
        deployed Axelar Gateway contract. GMP for Cosmos chains is still under
        development. The application’s executable contract must be deployed on
        the destination contract. The application must be on one of Axelar's
        supported EVM chains. See chain names for a list of EVM chains that have
        an Axelar Gateway deployed. The list is updated as new chains are added.
      </p>
    </div>
    <div class="col-12">
      <h2>Ethereum</h2>
    </div>
    <div class="col-12">
      <BarChart
        label="activity"
        title="Daily GMP activity on Ethereum"
        :stacked="{
          number: 2,
          column: 'type',
          order: ['callContractWithToken', 'callContract'],
        }"
        :stacked-order="['callContract', 'callContractWithToken']"
        query-name="p-1"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="p-1"
        label="Total GMP activity on Ethereum"
        :some-in-group="{ by: 'type', over: 'number' }"
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
            <p>
              Majority of GMP activity on ethereum is Call contract with token.
              We can see The GMP activity of ethereum started pior to all EVM
              chains and it began on 2021/12/22. Ethereum's GMP activity was
              around 20 transactions per day at the beginning, but over time it
              grew and lastly reached 200 transactions per day.
            </p>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>Avalanche</h2>
    </div>

    <div class="col-12">
      <BarChart
        label="activity"
        title="Daily GMP activity on Avalanche"
        :stacked="{
          number: 2,
          column: 'type',
          order: ['callContractWithToken', 'callContract'],
        }"
        :stacked-order="['callContract', 'callContractWithToken']"
        query-name="p-2"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="p-2"
        label="Total GMP activity on Avalanche"
        :some-in-group="{ by: 'type', over: 'number' }"
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
            <p>
              Majority of GMP activity on Avalanche is Call contract with token.
              Trend of Avalanche GMP activity number is like axelar dailt
              transaction number.it had a spike with growing all crypto market
              and then dropped at starting of crypto winter and after a while
              incrased slowly.
            </p>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>BSC</h2>
    </div>
    <div class="col-12">
      <BarChart
        label="activity"
        title="Daily GMP activity on bsc"
        :stacked="{
          number: 2,
          column: 'type',
          order: ['callContractWithToken', 'callContract'],
        }"
        :stacked-order="['callContract', 'callContractWithToken']"
        query-name="p-3"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="p-3"
        label="Total GMP activity on bsc"
        :some-in-group="{ by: 'type', over: 'number' }"
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
            <p>
              Majority of GMP activity on BSC is Call contract with token. but
              the number Call contract and Call contract with token functions
              are more close contrary to Ethereum and Avalanche When the number
              of GMP activities of BSC raised the number of Call contract raised
              too. but when GMP activities decreased too. so that some days we
              don't have any Call contract activity.
            </p>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>Arbitrium</h2>
    </div>

    <div class="col-12">
      <BarChart
        label="activity"
        title="Daily GMP activity on arbitrium"
        :stacked="{
          number: 2,
          column: 'type',
          order: ['callContractWithToken', 'callContract'],
        }"
        :stacked-order="['callContract', 'callContractWithToken']"
        query-name="p-4"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="p-4"
        label="Total GMP activity on arbitrium"
        :some-in-group="{ by: 'type', over: 'number' }"
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
            <p>
              Majority of GMP activity on Arbitrium is Call contract with token.
              but like BSC he number of Call contract and Call contract with
              token functions are closer It seems axelar GMP on Arbitrum lunched
              later than others.The number of GMP transaction have been
              increasing overtime.
            </p>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>Polygone</h2>
    </div>

    <div class="col-12">
      <BarChart
        label="activity"
        title="Daily GMP activity on polygon"
        :stacked="{
          number: 2,
          column: 'type',
          order: ['callContractWithToken', 'callContract'],
        }"
        :stacked-order="['callContract', 'callContractWithToken']"
        query-name="p-5"
        :axis="{ x: 'date', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        query-name="p-5"
        label="Total GMP activity on polygon"
        :some-in-group="{ by: 'type', over: 'number' }"
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
            <p>
              Majority of GMP activity on polygone is Call contract with token.
              at the begening all GMP transactions are only Call contract with
              token but later Call contract added too .
            </p>
          </div>
        </template>
      </vs-card>
    </div>

    <div class="col-12 mt-12">
      <h2>Comparing</h2>
    </div>

    <div class="col-12">
      <BarChart
        :chartColors="6"
        xType="category"
        dot-format-date
        label="activity"
        title="GMP activity number"
        query-name="p-6"
        :axis="{ x: 'blockchain', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <DoughnutChart
        xType="category"
        dot-format-date
        query-name="p-6"
        label="GMP activity number"
        :some-in-group="{ by: 'blockchain', over: 'number' }"
      />
    </div>

    <div class="col-12">
      <vs-card type="0" class="mb-4 w-100 transparent">
        <template #title>
          <div class="d-flex align-center justify-space-between pt-2">
            <div class="fw-600">
              <div>Result</div>
            </div>
          </div>
        </template>
        <template #text>
          <div class="mt-4">
            <ul>
              <li>
                GMP transaction of polygone is mora than others and arbitrium
                are less
              </li>
              <li>
                In all chains Call contract with token is more which means
                majority of GMP transaction cause token transferring
              </li>
              <li>
                The gas fee of Ethereum is much more than other chains so GMP
                transaction of Ethereum create much more fees
              </li>
            </ul>
          </div>
        </template>
      </vs-card>
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
