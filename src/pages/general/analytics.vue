<template>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <SingleChart class="primary-card"
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
          />
        </div>

        <div class="col-12 ">
          <LineChart
            x-type="time"
            title="Success Rate"
            query-name="g-1"
            :axis="{ x: 'date', y: 'success_rate' }"
          />
        </div> 

        <div class="col-12">
          <BarChart
            x-type="time"
            title="Daily active contracts on axelar"
            query-name="g-1"
            :axis="{ x: 'date', y: 'users' }"
          />
        </div>

        <div class="col-12">
          <BarChart
            x-type="time"
            title="Daily average transaction per conract address"
            query-name="g-2"
            :axis="{ x: 'date', y: 'daily_average' }"
          />
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
