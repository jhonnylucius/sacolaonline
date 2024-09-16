import React from 'react';

const Reward = ({ reward }) => (
  <div>
    <h2>{reward.rewardDescription}</h2>
    <p>Recebido em: {reward.receivedAt}</p>
  </div>
);

export default Reward;