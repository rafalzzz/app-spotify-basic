import React, { memo, useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { playedRX, durationRX } from "../../../../store/player/selectors";

import { seekTo } from "../../../../store/player/actions";

import { BarLayout } from "./layout";

export const Bar = memo(() => {
  const [showRemaining, setShowRemaining] = useState(false);

  // Selectors

  const played = useSelector(playedRX);
  const duration = useSelector(durationRX);

  const dispatch = useDispatch();

  // Skip song to any second

  const handleSeekChange = e => {
    let second = parseFloat(e.target.value);
    dispatch(seekTo({ seekTo: second }));
  };

  const handleSetRemaining = useCallback(
    event => {
      setShowRemaining(!showRemaining);
    },
    [showRemaining]
  );

  return (
    <BarLayout
      played={played}
      duration={duration}
      handleSeekChange={handleSeekChange}
      handleSetRemaining={handleSetRemaining}
      showRemaining={showRemaining}
    />
  );
});
