"use client";

import { useEffect, useState } from "react";
// components
import Card from "@/components/card";
import Button from "@/components/button";
import LoadingSpinner from "@/components/loading/loading";
import SpectrumItemCard from "@/components/spectrum-item-card";
import DataNotLoaded from "@/components/data-not-loaded";
//redux
import { useAppDispatch } from "@/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/redux/hooks/use-app-selector";
import { getSpectrumStatus } from "@/redux/slices/spectrum-slice";
// iconfy
import { Icon } from "@iconify/react";
// styled
import { FlexBoxes } from "../spectrum.styled";
// utils
import {
  altitudeFormatter,
  temperatureFormatter,
  velocityFormatter,
} from "@/utils/helper";
// react toastify
import { ToastContainer, toast } from "react-toastify";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function SpectrumStatusView() {
  const { spectrumData, sprectumDataLoading } = useAppSelector(
    (state: any) => state.spectrum
  );
  const [spectrumDataError, setSpectrumDataError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  /**
   * Dispatching getSpectrumStatus to requesting on redux
   * @param type - getting to refresh data proccesing
   */
  const handleDispatchSprectumStatus = (type?: string) => {
    dispatch(getSpectrumStatus())
      .unwrap()
      .then((payload) => {
        if (type === "refresh") {
          toast.success("Status Data is refreshed!");
        }
      })
      .catch((error) => {
        if (type === "refresh") {
          toast.error("Status Data is refreshed! - Request Error ");
        }
        setSpectrumDataError(true);
        toast.error("Status Data is not loaded! - Request Error");
      });
  };

  useEffect(() => {
    handleDispatchSprectumStatus();
  }, []);

  /**
   * Tick or cross icon format proccesing
   * @param isAscending
   * @returns {React.ReactNode}
   */
  const isAscendingFormatter = (isAscending: boolean) =>
    isAscending ? (
      <Icon icon="subway:tick" color="green" />
    ) : (
      <Icon icon="subway:crpss" color="red" />
    );

  return (
    <>
      <Card
        title="Spectrum Tracker"
        rightToolbar={
          <Button
            label="Refresh Status Data"
            onClick={() => handleDispatchSprectumStatus("refresh")}
          />
        }
      >
        {sprectumDataLoading ? (
          <LoadingSpinner />
        ) : spectrumDataError ? (
          <DataNotLoaded />
        ) : (
          <>
            <FlexBoxes>
              <SpectrumItemCard
                title="VELOCITY"
                content={velocityFormatter(spectrumData?.velocity!)}
              />
              <SpectrumItemCard
                title="ALTITUDE"
                content={altitudeFormatter(spectrumData?.altitude!)}
              />
              <SpectrumItemCard
                title="TEMPRATURE"
                content={temperatureFormatter(spectrumData?.temperature!)}
              />
            </FlexBoxes>
            <FlexBoxes>
              <SpectrumItemCard
                title="IS ASCENDING ?"
                content={isAscendingFormatter(spectrumData?.isAscending!)}
              />
            </FlexBoxes>
            <SpectrumItemCard
              title="STATUS MESSAGE"
              content={spectrumData?.statusMessage}
            />
          </>
        )}
      </Card>

      {/* react tostify  ------------------------------------------------------------- */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
