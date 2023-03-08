<template>
    <div class="row">

        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas used (Daily)" title="Daily gas used" x-type="time"
                query-name="fee" :axis="{ x: 'date', y: 'gas' }" />
        </div>

        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas price (AVG)" title="Average gas price per transaction $"
                x-type="time" query-name="fee" :axis="{ x: 'date', y: 'avggasprice' }" />
        </div>

        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas used (AVG)" title="Daily average gas used" x-type="time"
                query-name="fee" :axis="{ x: 'date', y: 'avg(gas_used)' }" />
        </div>


        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Transaction fee (Daily)" title="Daily transaction fee $"
                x-type="time" query-name="fee" :axis="{ x: 'date', y: 'fees' }" />
        </div>



        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas used (Daily)" title="Daily gas used" x-type="time"
                query-name="fee" :axis="{ x: 'date', y: 'gas' }" />
        </div>


        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Transactions (AVG)" title="Average transaction per block per week"
                x-type="time" query-name="fee_2" :axis="{ x: 'date', y: 'average_per_block' }" />
        </div>


        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Size (AVG)" title="Average size per block per week"
                x-type="time" query-name="fee_2" :axis="{ x: 'date', y: 'size_per_block' }" />
        </div>

        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas (AVG)" title="Average gas limit per block per week"
                x-type="time" query-name="fee_2" :axis="{ x: 'date', y: 'gas_limit_per_block' }" />
        </div>

        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Difficulty" title="Average difficulty per block per week"
                x-type="time" query-name="fee_2" :axis="{ x: 'date', y: 'total_difficulty_per_block' }" />
        </div>


        <div class="col-12 col-lg-6">
            <BarChart class="border rounded" label="Gas" title="Average gas used per block per week"
                x-type="time" query-name="fee_2" :axis="{ x: 'date', y: 'gas_used_per_block' }" />
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
        BarChart: () => import("@/components/charts/bar.vue"),
        // DoughnutChart: () => import("@/components/charts/doughnut.vue"),
        // LineChart: () => import("@/components/charts/line.vue"),
        // // MixedChart: () => import("@/components/charts/mixed.vue"),
        // SingleChart: () => import("@/components/charts/single.vue"),
        // DataTable: () => import("@/components/table.vue")
    }
}
</script>