
const state = {
  //General
  queries: {
    "g-1" : {
      result : null,
      sql : `select 
      date_trunc('day',BLOCK_TIMESTAMP) as date,
      count(*) as number, 
    count(distinct TX_FROM) as users, 
     count(case when TX_SUCCEEDED='TRUE' then 1 else null end)*100/number as success_rate, 
    number/users as daily_average 
    from 
    axelar.core.fact_transactions
    
    group by date
    order by date asc`
    },
    "a-1" : {
      result : null,
      sql : `select avg(PRICE)  as price , 
      date_trunc('day',RECORDED_AT) as date 
      from 
    osmosis.core.dim_prices
    where 
    SYMBOL='axl'
    group by date order by date asc `
    },
    "a-2" : {
      result : null,
      sql : `select 
      case 
    when BALANCE/1e6 between 0 and 10 then 'Shrimp'
    when BALANCE/1e6 between 10 and 100 then 'Crab'
    when BALANCE/1e6 between 100 and 1000 then 'ctopus'
    when BALANCE/1e6 between 1e3 and 10e3 then 'Fish'
    when BALANCE/1e6 between 10e3 and 100e3 then 'Dolphin'
    when BALANCE/1e6 between 100e3 and 1000e3 then 'Shark'
    when BALANCE/1e6 between 1000e3 and 10000e3 then 'Whale' else 'Humpback' end as wallet , 
    date ,
    count(*) as number , 
    sum(BALANCE/1e6) as volume
  
    from
    axelar.core.fact_daily_balances
    group by 1,2 order by date asc`
    },
    "a-3" : {
      result : null,
      sql : `select case 
      when BALANCE/1e6 between 0 and 10 then 'Shrimp'
      when BALANCE/1e6 between 10 and 100 then 'Crab'
      when BALANCE/1e6 between 100 and 1000 then 'ctopus'
      when BALANCE/1e6 between 1e3 and 10e3 then 'Fish'
      when BALANCE/1e6 between 10e3 and 100e3 then 'Dolphin'
      when BALANCE/1e6 between 100e3 and 1000e3 then 'Shark'
      when BALANCE/1e6 between 1000e3 and 10000e3 then 'Whale' else 'Humpback' end as wallet , 
      date ,
      count(*) as number , 
      sum(BALANCE/1e6) as volume from osmosis.core.fact_daily_balances
    where 
    CURRENCY ='ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
    group by 1,2 order by date asc`
    },
    "a-4" : {
      result : null,
      sql : `select date_trunc('day',BLOCK_TIMESTAMP ) as date , 
      sum(AMOUNT/1e6) as volume , 
      sum(volume) over (order by date) as cumulatives
    from 
    axelar.core.fact_staking_rewards
      where 
    ACTION='withdraw_rewards'
    group by date order by date asc`
    }
  },


};

const getters = {
  getQueries(state) {
    return state.queries;
  },
};

const mutations = {
  setQueryResult(state, data) { // data => query, result
    state.queries[data.query].result = data.result;
  },
};



export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
