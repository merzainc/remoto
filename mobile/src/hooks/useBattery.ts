import React, { useState, useEffect } from 'react';
import * as Battery from 'expo-battery';

const useBatteryStatus = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState<Battery.PowerState>();

  useEffect(() => {
    async function checkAvailability() {
      const isBatteryAvailable = await Battery.isAvailableAsync();
      setIsAvailable(isBatteryAvailable);
    }
    checkAvailability();
  }, []);

  const showBatteryInfo = () => {
    console.log(batteryInfo);
  };

  const loadBatteryInfo = async () => {
    let batteryInfoLoaded = await Battery.getPowerStateAsync();
    setBatteryInfo(batteryInfoLoaded);
    showBatteryInfo();
  };

  return { batteryInfo, loadBatteryInfo };
};

export default useBatteryStatus;
