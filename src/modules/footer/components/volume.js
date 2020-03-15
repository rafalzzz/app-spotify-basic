import React from "react";

import { VolumeContainer } from "./volume.styled";

export const Volume = ({
  volume,
  muted,
  volumeIcon,
  handleVolumeChange,
  handleToggleMuted
}) => {
  return (
    <VolumeContainer>
      <div
        className="volumeElement volIcon"
        style={{ color: muted ? "red" : "#b3b3b3" }}
        onClick={handleToggleMuted}
      >
        <i className={volumeIcon} />
      </div>
      <div className="volumeElement">
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </VolumeContainer>
  );
};
