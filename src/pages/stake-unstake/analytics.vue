<template>
    <div class="row">

        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <SingleChart title="Total unstaked tokens" name="" column="1" query-name='stake_unstake' />
        </div>

        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <SingleChart title="Total staked tokens" name="" column="0" query-name='stake_unstake' />
        </div>

        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <SingleChart title="Total optimism locked on staking pools" name="" column="2" query-name='stake_unstake' />
        </div>

        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <SingleChart title="Number of optimism stakers" name="" column="3" query-name='stake_unstake' />
        </div>

        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <SingleChart title="Number of optimism pools" name="" column="4" query-name='stake_unstake' />
        </div>

        <div class="col-12">
            <BarChart x-type="time" class="border rounded" title="Stake and unstake volume per day" query-name="stake"
                :axis="{ x: 'date' }" :stacked="{ number: 2, order: ['stake', 'unstake'] }" />
        </div>


        <div class="col-12">
            <BarChart x-type="time" class="border rounded" title="Stake and unstake transaction number per day"
                query-name="stake" :axis="{ x: 'date' }"
                :stacked="{ number: 2, order: ['stake_number', 'unstake_number'] }" />
        </div>

        <div class="col-12 col-xl-6">
            <LineChart x-type="time" class="border rounded" title="Net flow of staking pools" query-name="stake"
                :axis="{ x: 'date', y: 'net_flow' }" />
        </div>


        <div class="col-12 col-xl-6">
            <LineChart x-type="time" class="border rounded" title="Cumulative stake and unstake" query-name="stake"
                :axis="{ x: 'date' }" :stacked="{ number: 2, order: ['c_stke', 'c_unstake'] }" />
        </div>


        <div class="col-12 col-xl-6">
            <BarChart class="border rounded" dot-format-date
                title="Distribution of stakers based on how Solana they have on staking pools" query-name="stake_2"
                :axis="{ x: 'range', y: 'number' }" :chart-colors="6" label="Distribution" />
        </div>

        <div class="col-12 col-xl-6">
            <DoughnutChart query-name="stake" style="height : 100%"
                label="Distribution of stakers based on how Optimism they have on staking pools" class="border rounded"
                :some-in-group="{ by: 'range', over: 'number' }" />
        </div>



    </div>
</template>


<script>

export default {
    data() {
        return {

        }
    },
    components: {
        SingleChart: () => import("@/components/charts/single.vue"),
        BarChart: () => import("@/components/charts/bar.vue"),
        LineChart: () => import("@/components/charts/line.vue"),
        DoughnutChart: () => import("@/components/charts/doughnut.vue"),
    }
}
</script>