
const state = {
  queries: {
    // sigles charst season 0 

    "g-1": {
      result: null,
      sql: `select 
      count(distinct TX_FROM) as total_users  ,
        count(*)/ total_users as average 
      from 
      axelar.core.fact_transactions`
    },
    "a-1": {
      result: null,
      sql: `select 
      count(*) as number 
      from
      axelar.core.fact_daily_balances
      where 
      date='2023-03-01'`
    },
    "a-2": {
      result: null,
      sql: `with t1 as
      (select 
      sum(AMOUNT/1e6)  as volume,
      
      count(distinct DELEGATOR_ADDRESS)  as users ,
      count(distinct VALIDATOR_ADDRESS) as validators, 
        sum( case when action in ('delegate','redelegate') then AMOUNT/1e6 end) as sstake ,
        sum( case when action in ('undelegate')   then AMOUNT/1e6 end) as uunstake ,
        sstake-uunstake as TVL
      from 
      axelar.core.fact_staking),
      t2 as
        (
      select sum(AMOUNT/1e6) as reward from axelar.core.fact_staking_rewards)
      
      select * from t1 full join t2`
    }


    //

  }

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
