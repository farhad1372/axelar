<template>
  <div class="row">
    <div calss="col-12">
      <img src="@/assets/images/gasfee.png" style="width: 100%" />
      <h2 class="mt-10">Gas Fee</h2>
      <p class="mb-2">
        When you send a transaction to the NEAR network different validators process it using their own
        infrastructure.<br />
        Maintaining the infrastructure up and running is important to keep the network healthy, but represents a
        significant cost for the validator. <br />

        As many other networks, NEAR pays the validators for their job. Also like many other networks, users have to pay
        a small fee (aka gas fee) on every transaction. But instead of giving the gas fee to the validators, validators
        receive their reward independent from the gas fees. This topic is discussed in more details in the validators
        section.<br />
        In addition, NEAR implements two unique features with respect to gas fees:<br />
      </p>

      <ul>
        <li>Gas as a Developer Incentive <br />
          Something unique to NEAR is that the GAS is not used to pay validators. In transactions where calling a
          contract would incur a gas fee, the fee is actually divided as follows: <br />
          30% goes to the smart contract.<br />
          70% is burned.<br />
          In this way, NEAR uses the gas to also incentive development of dApps in the ecosystem.<br />

        </li>
        <li>
          Free Transactions <br />
          Another unique feature of NEAR is that it allows to call read-only methods in smart contracts for free,
          without even needing a NEAR account.<br />
          In such case, it is the validators who absorb the gas cost.<br />
        </li>
      </ul>

      <h2 class="mt-16">Gas Units & Gas Price</h2>
      <p class="mb-6">On every transaction NEAR users get charged a small $NEAR fee, which has to be paid upfront.
        However,
        transaction fees are not computed directly in $NEAR.</p>

      <h3>Gas Units</h3>
      <p class="mb-6">Internally, the computation is done using gas units which are deterministic, meaning that a given
        operation
        will always cost the same amount of gas.</p>

      <h3>Gas Price</h3>
      <p>To determine the actual $NEAR fee the gas of all operations done by the transaction are added up are multiplied
        by a gas price. <br />
        The gas price is not fixed: it is recalculated each block depending on network demand. If the previous block is
        more than half full the price goes up, otherwise it goes down. <br />
        The price cannot change by more than 1% each block and bottoms out at a price that's configured by the network
        (currently 100 million yocto NEAR[2].<br />
      </p>

      <h2>How do transaction fees on Optimism work?</h2>
      <p class="mb-4">
        Fees on the Optimism mainnet (also known as L2) are, for the most part, significantly lower than on the L1
        Ethereum network.<br />
        Every Optimism transaction has two costs: An L2 (execution) fee and an L1 (security) fee. At a high level, the
        L2 fee is the cost to execute your transaction in L2 and the L1 fee is the estimated cost to publish your
        transaction on L1 (in a rollup batch). Typically the L1 security fee is much higher than the L2 execution fee,
        so if you can wait it makes sense to postpone transactions until gas prices are lower (for example, over the
        weekend).
      </p>
      <ul>
        <li>
          L2 execution fee is charged as tx.gasPrice * l2GasUsed (up to tx.gasLimit). You can check the current L2 gas
          price here. At time of writing the L2 gas price is 0.001 gwei, however this can vary depending on network
          congestion.
        </li>
        <li>
          L1 security fee that pays for the cost of publishing the transaction on L1 (the cost of Ethereum equivalent
          security). It is deducted automatically from the user's ETH balance on Optimistic Ethereum. It is based on
          three factors that are multiplied together:
          <ol>
            <li>
              The gas price for L1 transactions (when the transaction was processed). You can see the current
              value here. Note that while this value changes, it does not track L1 gas prices precisely, so spikes in L1
              gas price can only affect your transaction's cost by up to 25%.
            </li>
            <li>
              The gas used on L1 to publish the transaction. This is based on the transaction length, as well as the
              byte value (whether it is zero or a different value) for each byte.
            </li>
            <li>
              The L1 fee scalar, which is at writing 1. You can see the current value in the contract. Take the value
              provided by the contract and divide by a million.
            </li>
          </ol>
        </li>
      </ul>
      <p>
        To get ETH on Optimism you can deposit ETH via either the Hop exchange (on Optimism) or our gateway (on Optimism
        or Optimism Goerli)
      </p>
    </div>
  </div>
</template>
