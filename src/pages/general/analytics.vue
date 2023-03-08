<template>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart
        class="primary-card"
        query-name="g-1"
        title="Total contract of axelar ecosystem"
        column="0"
      />
    </div>

    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart
        query-name="g-1"
        title="Average transaction number per contract address"
        column="1"
      />
    </div>

    <div class="col-12">
      <div class="row px-0">
        <div class="col-12">
          <BarChart
            x-type="time"
            title="Daily transaction number"
            query-name="g-1"
            :axis="{ x: 'date', y: 'number' }"
          >
            <template v-slot:data>
              <div class="mt-5 pt-5 px-3 border-top fw-300">
                <p>
                  First daily transactionhave been recorded on 2021/12/22 with
                  351 transacrctions. After that the number of transaction
                  raised and on a big spike riched 223k on 2021/02/20. After
                  that abd with starting crypto winter the number of transaction
                  suddenky dropped to about 32K daily. On that days all crypto
                  droped. After that on a slow slope the number of transactions
                  growed and recenly reached 90k on a day
                </p>
                <p>
                  After crypto big dropping when all transaction of all chain
                  dropped terribly, the number of axelar transaction grows
                  slowly so in spite of we are already on winter axlelar could
                  expand thier number of transaction
                </p>
              </div>
            </template>
          </BarChart>
        </div>

        <div class="col-12">
          <LineChart
            x-type="time"
            title="Success Rate"
            query-name="g-1"
            :axis="{ x: 'date', y: 'success_rate' }"
          >
            <template v-slot:data>
              <div class="mt-5 pt-5 px-3 border-top fw-300">
                <p>
                  Success rate of axelar usually have been on a standard
                  position. but we can see a relationship between number of
                  transaction and success rate so that when number of
                  transaction increases the success rate dropped.
                </p>
                <ul>
                  <li>
                    When hen number of transaction increases the success rate
                    dropped
                  </li>
                </ul>
                <p>
                  For example on 2021/02/20 when the number of transaction
                  increased the success rate decreased.
                </p>
              </div>
            </template>
          </LineChart>
        </div>

        <div class="col-12">
          <BarChart
            x-type="time"
            title="Daily active contracts on axelar"
            query-name="g-1"
            :axis="{ x: 'date', y: 'users' }"
          >
            <template v-slot:data>
              <div class="mt-5 pt-5 px-3 border-top fw-300">
                <p>
                  Contract address here menas tx_from that extracted from
                  transaction table so it seems it can be smart contracts. from
                  2022-03-18 to 2022-09-14 the active contracts was constant and
                  it was about 560 after it increased and recently even reached
                  1.6k.
                </p>
              </div>
            </template>
          </BarChart>
        </div>

        <div class="col-12">
          <BarChart
            x-type="time"
            title="Daily average transaction per conract address"
            query-name="g-2"
            :axis="{ x: 'date', y: 'daily_average' }"
          >
            <template v-slot:data>
              <div class="mt-5 pt-5 px-3 border-top fw-300">
                <p>
                  we can see by increassing of the number of active contracts
                  daily average transaction number per contracts decreased.
                </p>
              </div>
            </template>
          </BarChart>
        </div>

        <!-- 
        <div class="col-12 col-xl-6">
          <BarChart
            x-type="time"
            
            title="Daily transaction number"
            query-name="general"
            :axis="{ x: 'date', y: 'number' }"
          />
        </div>

        <div class="col-12 col-xl-6">
          <BarChart
            x-type="time"
            
            title="Daily active user number"
            query-name="general"
            :axis="{ x: 'date', y: 'daily_active_user' }"
          />
        </div>

        <div class="col-12 col-xl-6">
          <LineChart
            x-type="time"
            
            title="Success rate"
            query-name="Success_rate"
            :axis="{ x: 'date', y: 'success_rate' }"
          />
        </div>

        <div class="col-12 col-xl-6">
          <LineChart
            x-type="time"
            
            title="price"
            query-name="general_price"
            :axis="{ x: 'date', y: 'price' }"
          />
        </div> -->
      </div>
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
    // DoughnutChart: () => import("@/components/charts/doughnut.vue"),
    LineChart: () => import("@/components/charts/line.vue"),
    // MixedChart: () => import("@/components/charts/mixed.vue"),
    SingleChart: () => import("@/components/charts/single.vue"),
  },
};
</script>
