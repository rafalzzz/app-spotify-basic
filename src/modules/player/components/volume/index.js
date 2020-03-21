import React, { useState, useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { volumeRX, mutedRX } from "../../../../store/player/selectors";

import { setVolume, setMuted } from "../../../../store/player/actions";

import { VolumeLayout } from "./layout";

export const Volume = () => {
  const [volumeIcon, setVolumeIcon] = useState("icon-volume-up");

  // Selectors

  const muted = useSelector(mutedRX);
  const volume = useSelector(volumeRX);

  const dispatch = useDispatch();

  // Change volume

  const handleVolumeChange = e => {
    let value = parseFloat(e.target.value);
    dispatch(setVolume({ volume: value }));
  };

  // Mute or unmute

  const handleToggleMuted = useCallback(
    event => {
      muted
        ? dispatch(setMuted({ muted: false }))
        : dispatch(setMuted({ muted: true }));
    },
    [muted]
  );

  // ChangeVolumeIcon

  const handleSetVolumeIcon = useCallback(
    volume => {
      switch (true) {
        case volume === 0:
          setVolumeIcon("icon-volume-off");
          break;
        case volume > 0 && volume <= 0.3:
          setVolumeIcon("icon-volume-down");
          break;
        case volume > 0.3 && volume <= 0.6:
          setVolumeIcon("icon-volume");
          break;
        case volume > 0.6 && volume <= 1:
          setVolumeIcon("icon-volume-up");
          break;
        default:
          setVolumeIcon("icon-volume-up");
      }
    },
    [volume]
  );

  useEffect(() => {
    handleSetVolumeIcon(volume);
  }, [volume]);

  return (
    <VolumeLayout
      muted={muted}
      handleToggleMuted={handleToggleMuted}
      volumeIcon={volumeIcon}
      volume={volume}
      handleVolumeChange={handleVolumeChange}
    />
  );
};
