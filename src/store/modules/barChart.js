
const state = {
  queries: {
    //General
    "g-1": {
      result: null,
      sql: `select 
    date_trunc('day',BLOCK_TIMESTAMP) as date,
    count(*) as number, 
  count(distinct TX_FROM) as users, 
   count(case when TX_SUCCEEDED='TRUE' then 1 else null end)*100/number as success_rate, 
  number/users as daily_average 
  from 
  axelar.core.fact_transactions
  
  group by date
  order by date asc
  `
    },
    "g-2": {
      result: null,
      sql: `select 
      date_trunc('day',BLOCK_TIMESTAMP) as date,
      count(*) as number, 
    count(distinct TX_FROM) as users, 
     count(case when TX_SUCCEEDED='TRUE' then 1 else null end)*100/number as success_rate, 
    number/users as daily_average 
    from 
    axelar.core.fact_transactions
    
    group by date
    order by date`
    },
    "a-1": {
      result: null,
      sql: `select 
      case 
    when BALANCE/1e6 between 0 and 10 then 'Shrimp'
    when BALANCE/1e6 between 10 and 100 then 'Crab'
    when BALANCE/1e6 between 100 and 1000 then 'ctopus'
    when BALANCE/1e6 between 1e3 and 10e3 then 'Fish'
    when BALANCE/1e6 between 10e3 and 100e3 then 'Dolphin'
    when BALANCE/1e6 between 100e3 and 1000e3 then 'Shark'
    when BALANCE/1e6 between 1000e3 and 10000e3 then 'Whale' else 'Humpback' end as wallet , 
    
    count(*) as number , 
    sum(BALANCE/1e6) as volume
  
    from
    axelar.core.fact_daily_balances
    where 
    date='2023-03-01'
    group by 1`
    },
    "a-2": {
      result: null,
      sql: `select 
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
    group by 1,2`
    },
    "a-3": {
      result: null,
      sql: `select 
      case 
    when BALANCE/1e6 between 0 and 10 then 'Shrimp'
    when BALANCE/1e6 between 10 and 100 then 'Crab'
    when BALANCE/1e6 between 100 and 1000 then 'ctopus'
    when BALANCE/1e6 between 1e3 and 10e3 then 'Fish'
    when BALANCE/1e6 between 10e3 and 100e3 then 'Dolphin'
    when BALANCE/1e6 between 100e3 and 1000e3 then 'Shark'
    when BALANCE/1e6 between 1000e3 and 10000e3 then 'Whale' else 'Humpback' end as wallet , 
    
    count(*) as number , 
    sum(BALANCE/1e6) as volume
  
    from
    axelar.core.fact_daily_balances
    where 
    date='2023-03-01'
    group by 1`
    },
    "a-4": {
      result: null,
      sql: `select case 
      when BALANCE/1e6 between 0 and 10 then 'Shrimp'
      when BALANCE/1e6 between 10 and 100 then 'Crab'
      when BALANCE/1e6 between 100 and 1000 then 'ctopus'
      when BALANCE/1e6 between 1e3 and 10e3 then 'Fish'
      when BALANCE/1e6 between 10e3 and 100e3 then 'Dolphin'
      when BALANCE/1e6 between 100e3 and 1000e3 then 'Shark'
      when BALANCE/1e6 between 1000e3 and 10000e3 then 'Whale' else 'Humpback' end as wallet , 
     
      count(*) as number , 
      sum(BALANCE/1e6) as volume from osmosis.core.fact_daily_balances
    where 
    CURRENCY ='ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E' and date='2023-02-20'
    group by 1`
    },
    "a-5": {
      result: null,
      sql: `select case 
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
    "a-6": {
      result: null,
      sql: `with t1 as
      (select
      sum(AMOUNT/1e6)  as volume,
        date_trunc('day',BLOCK_TIMESTAMP) as date , 
        ACTION,
        count(*) as number , 
        count(distinct DELEGATOR_ADDRESS) , 
       
        sum( case when action in ('delegate','redelegate') then AMOUNT/1e6 end) as sstake ,
        sum( case when action in ('undelegate')   then AMOUNT/1e6 end) as uunstake
      
      
      from 
      axelar.core.fact_staking
        group by 2,3)
      
      select * , 
       sum(sstake) over (order by date) as stake  , 
       sum(uunstake) over (order by date) as unstake ,   stake-unstake as TVL
      from t1 
      order by date asc`
    },

    "a-7": {
      result: null,
      sql: `with t1 as
      (select
      sum(AMOUNT/1e6)  as volume,
        date_trunc('day',BLOCK_TIMESTAMP) as date , 
        ACTION,
        count(*) as number , 
        count(distinct DELEGATOR_ADDRESS) , 
       
        sum( case when action in ('delegate','redelegate') then AMOUNT/1e6 end) as sstake ,
        sum( case when action in ('undelegate')   then AMOUNT/1e6 end) as uunstake
      
      
      from 
      axelar.core.fact_staking
        group by 2,3)
      
      select * , 
       sum(sstake) over (order by date) as stake  , 
       sum(uunstake) over (order by date) as unstake ,   stake-unstake as TVL
      from t1 
      order by date asc`
    },

    "a-8": {
      result: null,
      sql: `with t1 as
      (select
      sum(AMOUNT/1e6)  as volume,
        date_trunc('day',BLOCK_TIMESTAMP) as date , 
        ACTION,
        count(*) as number , 
        count(distinct DELEGATOR_ADDRESS) , 
       
        sum( case when action in ('delegate','redelegate') then AMOUNT/1e6 end) as sstake ,
        sum( case when action in ('undelegate')   then AMOUNT/1e6 end) as uunstake
      
      
      from 
      axelar.core.fact_staking
        group by 2,3)
      
      select * , 
       sum(sstake) over (order by date) as stake  , 
       sum(uunstake) over (order by date) as unstake ,   stake-unstake as TVL
      from t1 
      order by date asc`
    },

    "a-9": {
      result: null,
      sql: `select date_trunc('day',BLOCK_TIMESTAMP ) as date , 
      sum(AMOUNT/1e6) as volume , 
      sum(volume) over (order by date) as cumulatives
    from 
    axelar.core.fact_staking_rewards
      where 
    ACTION='withdraw_rewards'
    group by date `
    },

    "p-1": {
      result: null,
      sql: `with t1 as 
      (select 
        distinct TX_HASH as TX_HASH
        from ethereum.core.fact_event_logs
        WHERE
      CONTRACT_ADDRESS=lower('0x4f4495243837681061c4743b74b3eedf548d56a5') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') ),
      t2 as 
      (select distinct TX_HASH from ethereum.core.fact_token_transfers
        where 
      TO_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')
        or 
      FROM_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712') 
        or
        origin_TO_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')
        or 
      origin_FROM_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712') 
        )
      
      select count(distinct TX_HASH) as number ,
        date_trunc('day',BLOCK_TIMESTAMP) as date , 
      case when TX_HASH in (select TX_HASH from t2) then 'callContractWithToken' else 'callContract' end as type,
        count(distinct ORIGIN_FROM_ADDRESS) as fromTO,
          count(distinct ORIGIN_TO_ADDRESS) as toFROM
      from ethereum.core.fact_event_logs 
        where TX_HASH in (select TX_HASH from t1)
      group by date,type order by date asc`
    },
    "p-2": {
      result: null,
      sql: `with t1 as 
      (select 
        distinct TX_HASH as TX_HASH
        from avalanche.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') ),
      t2 as 
      (select distinct TX_HASH from avalanche.core.fact_token_transfers
        where 
      ORIGIN_FROM_ADDRESS in (lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      ORIGIN_TO_ADDRESS in (lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712')) 
        or
        FROM_ADDRESS in (lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      TO_ADDRESS in (lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712')) 
        )
      
      select count(distinct TX_HASH) as number ,date_trunc('day',BLOCK_TIMESTAMP) as date , 
      case when TX_HASH in (select TX_HASH from t2) then 'callContractWithToken' else 'callContract' end as type,
        count(distinct ORIGIN_FROM_ADDRESS) as originTO,
          count(distinct ORIGIN_TO_ADDRESS) as originFROM
      from avalanche.core.fact_event_logs 
        where TX_HASH in (select TX_HASH from t1)
      group by date,type
      order by date asc`
    },
    "p-3": {
      result: null,
      sql: `with t1 as 
      (select 
        distinct TX_HASH as TX_HASH
        from bsc.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') ),
      t2 as 
      (select distinct TX_HASH from bsc.core.fact_token_transfers
        where 
      TO_ADDRESS in (lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      FROM_ADDRESS in (lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712')) 
        or 
       origin_TO_ADDRESS in (lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      origin_FROM_ADDRESS in (lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))  
        )
      
      select count(distinct TX_HASH) as number ,date_trunc('day',BLOCK_TIMESTAMP) as date , 
      case when TX_HASH in (select TX_HASH from t2) then 'callContractWithToken' else 'callContract' end as type,
        count(distinct ORIGIN_FROM_ADDRESS) as originTO,
          count(distinct ORIGIN_TO_ADDRESS) as originFROM
      from bsc.core.fact_event_logs 
        where TX_HASH in (select TX_HASH from t1)
      group by date,type order by date asc`
    },

    "p-4": {
      result: null,
      sql: `with t1 as 
      (select 
        distinct TX_HASH as TX_HASH
        from arbitrum.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0xe432150cce91c13a887f7D836923d5597adD8E31') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') ),
      t2 as 
      (select distinct TX_HASH from arbitrum.core.fact_token_transfers
        where 
      TO_ADDRESS in (lower('0xe432150cce91c13a887f7D836923d5597adD8E31'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      FROM_ADDRESS in (lower('0xe432150cce91c13a887f7D836923d5597adD8E31'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712')) 
        OR
        origin_TO_ADDRESS in (lower('0xe432150cce91c13a887f7D836923d5597adD8E31'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or
        origin_TO_ADDRESS in (lower('0xe432150cce91c13a887f7D836923d5597adD8E31'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        )
      
      select count(distinct TX_HASH) as number ,date_trunc('day',BLOCK_TIMESTAMP) as date , 
      case when TX_HASH in (select TX_HASH from t2) then 'callContractWithToken' else 'callContract' end as type,
        count(distinct ORIGIN_FROM_ADDRESS) as originTO,
          count(distinct ORIGIN_TO_ADDRESS) as originFROM
      from arbitrum.core.fact_event_logs 
        where TX_HASH in (select TX_HASH from t1)
      group by date,type order by date asc
      `
    },

    "p-5": {
      result: null,
      sql: `with t1 as 
      (select 
        distinct TX_HASH as TX_HASH
        from polygon.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x6f015F16De9fC8791b234eF68D486d2bF203FBA8') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') ),
      t2 as 
      (select distinct TX_HASH from polygon.core.fact_token_transfers
        where 
      ORIGIN_FROM_ADDRESS in (lower('0x6f015F16De9fC8791b234eF68D486d2bF203FBA8'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712'))
        or 
      ORIGIN_TO_ADDRESS in (lower('0x6f015F16De9fC8791b234eF68D486d2bF203FBA8'),lower('0x2d5d7d31F671F86C782533cc367F14109a082712')) 
        )
      
      select count(distinct TX_HASH) as number ,date_trunc('day',BLOCK_TIMESTAMP) as date , 
      case when TX_HASH in (select TX_HASH from t2) then 'callContractWithToken' else 'callContract' end as type,
        count(distinct ORIGIN_FROM_ADDRESS) as originTO,
          count(distinct ORIGIN_TO_ADDRESS) as originFROM
      from polygon.core.fact_event_logs 
        where TX_HASH in (select TX_HASH from t1)
      group by date,type
       order by date asc`
    },

    "p-6": {
      result: null,
      sql: `(select 
        count(distinct TX_HASH) as number , 'arbitrum' as blockchain
        from arbitrum.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0xe432150cce91c13a887f7D836923d5597adD8E31') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') )
      
      union ALL
      
      (select 
        count(distinct TX_HASH) as number , 'Ethereum' as blockchain
        from ethereum.core.fact_event_logs
        WHERE
      CONTRACT_ADDRESS=lower('0x4f4495243837681061c4743b74b3eedf548d56a5') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') )
      
      union ALL
      
      (select 
        count(distinct TX_HASH) as number , 'Avalanche' as blockchain
        from avalanche.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x5029C0EFf6C34351a0CEc334542cDb22c7928f78') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') )
      
        union ALL
      
      (select 
       count(distinct TX_HASH) as number , 'bsc' as blockchain
        from bsc.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x304acf330bbE08d1e512eefaa92F6a57871fD895') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') )
      
        union ALL
      
      
      (select 
       count(distinct TX_HASH) as number , 'polygon' as blockchain
        from polygon.core.fact_event_logs
      
        WHERE
      CONTRACT_ADDRESS=lower('0x6f015F16De9fC8791b234eF68D486d2bF203FBA8') or  CONTRACT_ADDRESS=lower('0x2d5d7d31F671F86C782533cc367F14109a082712') )`
    },
    "i-1": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    'i-2': {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-3": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9
       `
    },
    "i-4": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume,FOREIGN_CHAIN
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2,FOREIGN_CHAIN)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME,FOREIGN_CHAIN from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-5": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume,FOREIGN_CHAIN
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2,FOREIGN_CHAIN)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME,FOREIGN_CHAIN from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-6": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume,FOREIGN_CHAIN
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2,FOREIGN_CHAIN)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME,FOREIGN_CHAIN from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },

    "i-7": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume,FOREIGN_CHAIN
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_IN'
      group by 1,2,FOREIGN_CHAIN)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME,FOREIGN_CHAIN from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-8": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_OUT'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },

    "i-9": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_OUT'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-10": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume 
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_OUT'
      group by 1,2)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "i-11": {
      result: null,
      sql: `with t1 as
      ((select  avg(CLOSE) as price,
        case when ID='apecoin' then 'ape' else ID end as token , date_trunc('day', RECORDED_HOUR) as date  from
        crosschain.core.fact_hourly_prices
        where 
      
      ID in ('aave','apecoin','aave','frax','wei')
      group by 2,3 )
      
      union all
      
      (select  avg(PRICE) as price,
        lower(SYMBOL)as token , date_trunc('day', RECORDED_HOUR) as date  from
        osmosis.core.ez_prices
      group by 2,3 )
      )
      ,  t2 as
      (select 
       case 
        when CURRENCY='dot-planck' then 'dot'
        when CURRENCY='wbtc-satoshi' then 'wbtc'
        when CURRENCY='polygon-uusdc' then 'usdc'
        when CURRENCY='cmatic' then 'matic'
        when CURRENCY='cusdc' then 'usdc'
        when CURRENCY='avalanche-uusdc' then 'usdc'
        when CURRENCY='usdt' then 'usdt'
        when CURRENCY='aacre' then 'acre'
        when CURRENCY='aevmos' then 'evmos'
        when CURRENCY='uni-wei' then 'uni'
        when CURRENCY='afet' then 'fet'
        when CURRENCY='stuatom' then 'atom'
        when CURRENCY='ubcre' then 'cre'
        when CURRENCY='echf' then 'chf'
        when substr(CURRENCY,1,1)='u' and CURRENCY!='usdt'  then substr(CURRENCY,2,len(CURRENCY))
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)='w' then substr(CURRENCY,2,len(CURRENCY)-5)
        when substr(CURRENCY,len(CURRENCY)-2,len(CURRENCY))='wei' and substr(CURRENCY,1,1)!='w' then substr(CURRENCY,1,len(CURRENCY)-4)
        else CURRENCY
        end 
        as currency , date_trunc('day', BLOCK_TIMESTAMP) as datee , sum(AMOUNT/pow(10,DECIMAL)) as volume,  case 
         when substr(RECEIVER,3,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,2 )
         when substr(RECEIVER,4,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,3 )
         when substr(RECEIVER,5,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,4 )
          when substr(RECEIVER,6,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,5 )
          when substr(RECEIVER,7,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,6 )
           when substr(RECEIVER,8,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,7 )     
            when substr(RECEIVER,9,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,8 )
              when substr(RECEIVER,10,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,9 )
              when substr(RECEIVER,11,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,10 )
                when substr(RECEIVER,12,1) in ('1','2','3','4','5','6','7','8','9') then substr(RECEIVER,1,11 )
        end as blckchain
      from axelar.core.fact_transfers
        where 
        TRANSFER_TYPE='IBC_TRANSFER_OUT'
      group by 1,2,blckchain)
      
      select DATE,CURRENCY,VOLUME*PRICE  as USD, VOLUME,blckchain from t2 a inner join t1 b 
      on a.currency=b.token and a.datee=b.DATE
      where USD<1e9 order by date asc`
    },
    "b-1": {
      result: null,
      sql: `with t1 as 
      (select TX_ID,ATTRIBUTE_VALUE as destination , date_trunc('day',BLOCK_TIMESTAMP) as date from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      and attribute_key = 'destinationChain'),
      
      t2 as (
      select TX_ID,ATTRIBUTE_VALUE as destination1 from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE' 
      and TX_ID  in (select TX_ID from t1)
       and ATTRIBUTE_KEY= 'sender'
      ), 
        t3 as 
      (select ATTRIBUTE_VALUE as source,TX_ID  from 
         axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      
      and attribute_key = 'sourceChain'
      and tx_id in (select tx_id from t1))
        
      
      select count(*) as number  , date , count(distinct DESTINATION1) as user,DESTINATION,source from t2 a inner join t1 b on a.TX_ID=b.TX_ID  inner join t3 c on b.TX_ID=c.TX_ID
      group by date, DESTINATION,source order by date asc`
    },
    "b-2": {
      result: null,
      sql: `with t1 as 
      (select TX_ID,ATTRIBUTE_VALUE as destination , date_trunc('day',BLOCK_TIMESTAMP) as date from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      and attribute_key = 'destinationChain'),
      
      t2 as (
      select TX_ID,ATTRIBUTE_VALUE as destination1 from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE' 
      and TX_ID  in (select TX_ID from t1)
       and ATTRIBUTE_KEY= 'sender'
      ), 
        t3 as 
      (select ATTRIBUTE_VALUE as source,TX_ID  from 
         axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      
      and attribute_key = 'sourceChain'
      and tx_id in (select tx_id from t1))
        
      
      select count(*) as number  , date , count(distinct DESTINATION1) as user,DESTINATION,source from t2 a inner join t1 b on a.TX_ID=b.TX_ID  inner join t3 c on b.TX_ID=c.TX_ID
      group by date, DESTINATION,source order by date asc`
    },
    "b-3": {
      result: null,
      sql: `with t1 as 
      (select TX_ID,ATTRIBUTE_VALUE as destination , date_trunc('day',BLOCK_TIMESTAMP) as date from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      and attribute_key = 'destinationChain'),
      
      t2 as (
      select TX_ID,ATTRIBUTE_VALUE as destination1 from 
        axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE' 
      and TX_ID  in (select TX_ID from t1)
       and ATTRIBUTE_KEY= 'sender'
      ), 
        t3 as 
      (select ATTRIBUTE_VALUE as source,TX_ID  from 
         axelar.core.fact_msg_attributes
      where tx_succeeded = 'TRUE'
      
      and attribute_key = 'sourceChain'
      and tx_id in (select tx_id from t1))
        
      
      select count(*) as number  , date , count(distinct DESTINATION1) as user,DESTINATION,source from t2 a inner join t1 b on a.TX_ID=b.TX_ID  inner join t3 c on b.TX_ID=c.TX_ID
      group by date, DESTINATION,source order by date asc`
    },
    "b-4": {
      result: null,
      sql: `select case when FROM_ADDRESS in ('0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0', '0x8eb8a3b98659cce290402893d0123abb75e3ab28') then 'Avalanche Bridge'
      when FROM_ADDRESS = '0xf92cd566ea4864356c5491c177a430c222d7e678' then 'Solana Wormhole'
      when FROM_ADDRESS = '0x23ddd3e3692d1861ed57ede224608875809e127f' then 'Near Rainbow Bridge'
      when FROM_ADDRESS = '0x2dccdb493827e15a5dc8f8b72147e6c4a5620857' then 'Harmony Bridges'
      when FROM_ADDRESS = '0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe' then 'Fantom Anyswap Bridge'
      when FROM_ADDRESS in ('0x40ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf', '0x401f6c983ea34274ec46f84d70b31c151321188b' )then 'Polygon Bridges'
      when FROM_ADDRESS in ('0x467194771dae2967aef3ecbedd3bf9a310c76c65', '0x99c9fc46f92e8a1c0dec1b1747d010903e884be1', '0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f' )then 'Optimism Bridges'
      when FROM_ADDRESS in ('0xcee284f754e854890e311e3280b767f80797180d', '0xa3a7b6f88361f48403514059f1f16c8e78d60eec', '0x4dbd4fc535ac27206064b68ffcf827b0a60bab3f') then 'Arbitrum Bridges'
    
      when FROM_ADDRESS in ('0x88ad09518695c6c3712ac10a214be5109a655671', '0x4aa42145aa6ebf72e164c9bbc74fbd3788045016') then 'Gnosis: xDAI Bridges'
      when FROM_ADDRESS in ('0x6a39909e805a3eadd2b61fff61147796ca6abb47') then 'Optics Bridge'
      when FROM_ADDRESS in ('0x533e3c0e6b48010873b947bddc4721b1bdff9648') then 'BSC Anyswap Bridge'
  
      when FROM_ADDRESS in ('0x10c6b61dbf44a083aec3780acf769c77be747e23') then 'Moonriver Anyswap Bridge'
      when FROM_ADDRESS in ('0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d') then 'RSK Token Bridge'
      when FROM_ADDRESS in ('0xabea9132b05a70803a4e85094fd0e1800777fbef') then 'ZkSync Bridge'
      when FROM_ADDRESS in ('0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00') then 'Boba Network Bridge'
  
      when FROM_ADDRESS in ('0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2', '0x64192819ac13ef72bf6b5ae239ac672b43a9af08') then 'Axie Infinity: Ronin Bridge'
      when FROM_ADDRESS in ('0x2796317b0ff8538f253012862c06787adfb8ceb6') then 'Synapse Bridge'
      when FROM_ADDRESS in ('0x88a69b4e698a4b090df6cf5bd7b2d47325ad30a3') then 'Nomad Bridge'
      when FROM_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')then 'axelar bridge' 
    end as bridge  ,
      date_trunc('week',BLOCK_TIMESTAMP) as date  , 
    sum(AMOUNT_USD) as volume 
    from 
  ethereum.core.ez_token_transfers 
    where 
    bridge is not null
  group by 1,2
  order by date asc`
    },
    "b-5": {
      result: null,
      sql: `select case when TO_ADDRESS in ('0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0', '0x8eb8a3b98659cce290402893d0123abb75e3ab28') then 'Avalanche Bridge'
      when TO_ADDRESS = '0xf92cd566ea4864356c5491c177a430c222d7e678' then 'Solana Wormhole'
      when TO_ADDRESS = '0x23ddd3e3692d1861ed57ede224608875809e127f' then 'Near Rainbow Bridge'
      when TO_ADDRESS = '0x2dccdb493827e15a5dc8f8b72147e6c4a5620857' then 'Harmony Bridges'
      when TO_ADDRESS = '0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe' then 'Fantom Anyswap Bridge'
      when TO_ADDRESS in ('0x40ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf', '0x401f6c983ea34274ec46f84d70b31c151321188b' )then 'Polygon Bridges'
      when TO_ADDRESS in ('0x467194771dae2967aef3ecbedd3bf9a310c76c65', '0x99c9fc46f92e8a1c0dec1b1747d010903e884be1', '0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f' )then 'Optimism Bridges'
      when TO_ADDRESS in ('0xcee284f754e854890e311e3280b767f80797180d', '0xa3a7b6f88361f48403514059f1f16c8e78d60eec', '0x4dbd4fc535ac27206064b68ffcf827b0a60bab3f') then 'Arbitrum Bridges'
    
      when TO_ADDRESS in ('0x88ad09518695c6c3712ac10a214be5109a655671', '0x4aa42145aa6ebf72e164c9bbc74fbd3788045016') then 'Gnosis: xDAI Bridges'
      when TO_ADDRESS in ('0x6a39909e805a3eadd2b61fff61147796ca6abb47') then 'Optics Bridge'
      when TO_ADDRESS in ('0x533e3c0e6b48010873b947bddc4721b1bdff9648') then 'BSC Anyswap Bridge'
  
      when TO_ADDRESS in ('0x10c6b61dbf44a083aec3780acf769c77be747e23') then 'Moonriver Anyswap Bridge'
      when TO_ADDRESS in ('0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d') then 'RSK Token Bridge'
      when TO_ADDRESS in ('0xabea9132b05a70803a4e85094fd0e1800777fbef') then 'ZkSync Bridge'
      when TO_ADDRESS in ('0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00') then 'Boba Network Bridge'
  
      when TO_ADDRESS in ('0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2', '0x64192819ac13ef72bf6b5ae239ac672b43a9af08') then 'Axie Infinity: Ronin Bridge'
      when TO_ADDRESS in ('0x2796317b0ff8538f253012862c06787adfb8ceb6') then 'Synapse Bridge'
      when TO_ADDRESS in ('0x88a69b4e698a4b090df6cf5bd7b2d47325ad30a3') then 'Nomad Bridge'
      when TO_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')then 'axelar bridge' 
    end as bridge  ,
      date_trunc('week',BLOCK_TIMESTAMP) as date  , 
    sum(AMOUNT_USD) as volume 
    from 
  ethereum.core.ez_token_transfers 
    where 
    bridge is not null and AMOUNT_USD< 100000*1e6
  group by 1,2
  order by date`
    },

    "b-6": {
      result: null,
      sql: `with t1 as
      (select case when FROM_ADDRESS in ('0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0', '0x8eb8a3b98659cce290402893d0123abb75e3ab28') then 'Avalanche Bridge'
          when FROM_ADDRESS = '0xf92cd566ea4864356c5491c177a430c222d7e678' then 'Solana Wormhole'
          when FROM_ADDRESS = '0x23ddd3e3692d1861ed57ede224608875809e127f' then 'Near Rainbow Bridge'
          when FROM_ADDRESS = '0x2dccdb493827e15a5dc8f8b72147e6c4a5620857' then 'Harmony Bridges'
          when FROM_ADDRESS = '0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe' then 'Fantom Anyswap Bridge'
          when FROM_ADDRESS in ('0x40ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf', '0x401f6c983ea34274ec46f84d70b31c151321188b' )then 'Polygon Bridges'
          when FROM_ADDRESS in ('0x467194771dae2967aef3ecbedd3bf9a310c76c65', '0x99c9fc46f92e8a1c0dec1b1747d010903e884be1', '0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f' )then 'Optimism Bridges'
          when FROM_ADDRESS in ('0xcee284f754e854890e311e3280b767f80797180d', '0xa3a7b6f88361f48403514059f1f16c8e78d60eec', '0x4dbd4fc535ac27206064b68ffcf827b0a60bab3f') then 'Arbitrum Bridges'
        
          when FROM_ADDRESS in ('0x88ad09518695c6c3712ac10a214be5109a655671', '0x4aa42145aa6ebf72e164c9bbc74fbd3788045016') then 'Gnosis: xDAI Bridges'
          when FROM_ADDRESS in ('0x6a39909e805a3eadd2b61fff61147796ca6abb47') then 'Optics Bridge'
          when FROM_ADDRESS in ('0x533e3c0e6b48010873b947bddc4721b1bdff9648') then 'BSC Anyswap Bridge'
      
          when FROM_ADDRESS in ('0x10c6b61dbf44a083aec3780acf769c77be747e23') then 'Moonriver Anyswap Bridge'
          when FROM_ADDRESS in ('0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d') then 'RSK Token Bridge'
          when FROM_ADDRESS in ('0xabea9132b05a70803a4e85094fd0e1800777fbef') then 'ZkSync Bridge'
          when FROM_ADDRESS in ('0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00') then 'Boba Network Bridge'
      
          when FROM_ADDRESS in ('0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2', '0x64192819ac13ef72bf6b5ae239ac672b43a9af08') then 'Axie Infinity: Ronin Bridge'
          when FROM_ADDRESS in ('0x2796317b0ff8538f253012862c06787adfb8ceb6') then 'Synapse Bridge'
          when FROM_ADDRESS in ('0x88a69b4e698a4b090df6cf5bd7b2d47325ad30a3') then 'Nomad Bridge'
          when FROM_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')then 'axelar bridge' 
        end as bridge  ,
          date_trunc('week',BLOCK_TIMESTAMP) as date  , 
        sum(AMOUNT_USD) as volume 
        from 
      ethereum.core.ez_token_transfers 
        where 
        bridge is not null
      group by 1,2
      order by date)
      
      select sum(case when bridge='axelar bridge' then volume else null end)*100/sum(volume) as ratio ,
      date 
      from 
      t1 
      group by 2
      order by date asc`
    },
    "b-7": {
      result: null,
      sql: `with t1 as
      (select case when TO_ADDRESS in ('0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0', '0x8eb8a3b98659cce290402893d0123abb75e3ab28') then 'Avalanche Bridge'
          when TO_ADDRESS = '0xf92cd566ea4864356c5491c177a430c222d7e678' then 'Solana Wormhole'
          when TO_ADDRESS = '0x23ddd3e3692d1861ed57ede224608875809e127f' then 'Near Rainbow Bridge'
          when TO_ADDRESS = '0x2dccdb493827e15a5dc8f8b72147e6c4a5620857' then 'Harmony Bridges'
          when TO_ADDRESS = '0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe' then 'Fantom Anyswap Bridge'
          when TO_ADDRESS in ('0x40ec5b33f54e0e8a33a975908c5ba1c14e5bbbdf', '0x401f6c983ea34274ec46f84d70b31c151321188b' )then 'Polygon Bridges'
          when TO_ADDRESS in ('0x467194771dae2967aef3ecbedd3bf9a310c76c65', '0x99c9fc46f92e8a1c0dec1b1747d010903e884be1', '0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f' )then 'Optimism Bridges'
          when TO_ADDRESS in ('0xcee284f754e854890e311e3280b767f80797180d', '0xa3a7b6f88361f48403514059f1f16c8e78d60eec', '0x4dbd4fc535ac27206064b68ffcf827b0a60bab3f') then 'Arbitrum Bridges'
        
          when TO_ADDRESS in ('0x88ad09518695c6c3712ac10a214be5109a655671', '0x4aa42145aa6ebf72e164c9bbc74fbd3788045016') then 'Gnosis: xDAI Bridges'
          when TO_ADDRESS in ('0x6a39909e805a3eadd2b61fff61147796ca6abb47') then 'Optics Bridge'
          when TO_ADDRESS in ('0x533e3c0e6b48010873b947bddc4721b1bdff9648') then 'BSC Anyswap Bridge'
      
          when TO_ADDRESS in ('0x10c6b61dbf44a083aec3780acf769c77be747e23') then 'Moonriver Anyswap Bridge'
          when TO_ADDRESS in ('0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d') then 'RSK Token Bridge'
          when TO_ADDRESS in ('0xabea9132b05a70803a4e85094fd0e1800777fbef') then 'ZkSync Bridge'
          when TO_ADDRESS in ('0xdc1664458d2f0b6090bea60a8793a4e66c2f1c00') then 'Boba Network Bridge'
      
          when TO_ADDRESS in ('0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2', '0x64192819ac13ef72bf6b5ae239ac672b43a9af08') then 'Axie Infinity: Ronin Bridge'
          when TO_ADDRESS in ('0x2796317b0ff8538f253012862c06787adfb8ceb6') then 'Synapse Bridge'
          when TO_ADDRESS in ('0x88a69b4e698a4b090df6cf5bd7b2d47325ad30a3') then 'Nomad Bridge'
          when TO_ADDRESS in ('0x4f4495243837681061c4743b74b3eedf548d56a5','0x2d5d7d31F671F86C782533cc367F14109a082712')then 'axelar bridge' 
        end as bridge  ,
          date_trunc('week',BLOCK_TIMESTAMP) as date  , 
        sum(AMOUNT_USD) as volume 
        from 
      ethereum.core.ez_token_transfers 
        where 
        bridge is not null and AMOUNT_USD< 100000*1e6
      group by 1,2
      order by date)
      
      select sum(case when bridge='axelar bridge' then volume else null end)*100/sum(volume) as ratio ,
      date 
      from 
      t1 
      group by 2
      order by date asc`
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
