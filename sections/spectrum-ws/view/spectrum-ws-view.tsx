"use client";

import React, { useEffect, useState } from "react";
// componnets
import Card from "@/components/card";
import SpectrumItemCard from "@/components/spectrum-item-card";
import AreaLineChart from "@/components/area-line-chart";
// dayjs
import dayjs from "dayjs";
// styled
import { FlexBoxes } from "../../spectrum/spectrum.styled";
// utils
import {
  altitudeFormatter,
  temperatureFormatter,
  velocityFormatter,
} from "@/utils/helper";
// iconfy
import { Icon } from "@iconify/react";
// redux
import { useAppDispatch } from "@/redux/hooks/use-app-dispatch";
import { actOnSpectrum } from "@/redux/slices/spectrum-slice";
// react tostify
import { toast, ToastContainer } from "react-toastify";
// config
import { HOST_API_WEBSOCKET } from "@/config-global";
//
import SpectrumWsAction from "../spectrum-ws-action";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

const SpectrumWebSocketView = () => {
  const [liveSpectrumData, setLiveSpectrumData] = useState<any>([]);
  const [currentData, setCurrentData] = useState<any>();

  const dispatch = useAppDispatch();

  /**
   * Getting last as maxData data of websocket data
   * @param event - Websocket event
   * @returns {[]} Last maxdata list
   */
  const handleLastTenDataOfWebSocket = (event: any) => {
    //  Maximum data when using websocket
    const maxData = 10;

    setCurrentData(JSON.parse(event.data));
    const newData = { ...JSON.parse(event.data), currentTime: new Date() };

    setLiveSpectrumData((prevData: []) => {
      const updatedData = [...prevData, newData];

      if (updatedData.length > maxData) {
        updatedData.shift();
      }

      return updatedData;
    });
  };

  /**
   * Web socket connecttion (open,message, error, close)
   */
  const handleWebSocketConnection = () => {
    const socket = new WebSocket(HOST_API_WEBSOCKET + "/api/SpectrumWS");

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = handleLastTenDataOfWebSocket;

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
      toast.error("WebSocket is not connected!");
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  };

  useEffect(() => {
    handleWebSocketConnection();
  }, []);

  /**
   * Current Time List
   */
  const currentTimeData = liveSpectrumData?.map((data: any) =>
    dayjs(data.currentTime).format("hh:mm:ss")
  );
  /**
   * Velocity Time List
   */
  const velocityData = liveSpectrumData?.map((data: any) => data?.Velocity);
  /**
   * Altitude Time List
   */
  const altitudeData = liveSpectrumData?.map((data: any) => data?.Altitude);
  /**
   * Temperature Time List
   */
  const temperatureData = liveSpectrumData?.map(
    (data: any) => data?.Temperature
  );

  /**
   * Dispatching actOnSpectrum to requesting on redux
   */
  const handleDispatchActSpectrum = () => {
    dispatch(actOnSpectrum())
      .unwrap()
      .then((payload) => toast.success("Action is success!"))
      .catch((error) => toast.error("Action is not success!"));
  };

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
      <Card title="Spectrum Basic Visualization">
        <FlexBoxes>
          <SpectrumItemCard
            title="VELOCITY"
            content={velocityFormatter(currentData?.Velocity!)}
          />

          <SpectrumItemCard
            title="ALTITUDE"
            content={altitudeFormatter(currentData?.Altitude!)}
          />
          <SpectrumItemCard
            title="TEMPERATURE"
            content={temperatureFormatter(currentData?.Temperature!)}
          />
        </FlexBoxes>
        <SpectrumItemCard
          title="IS ASCENDING?"
          content={isAscendingFormatter(currentData?.IsAscending!)}
        />
        <SpectrumItemCard
          title="STATUS MESSAGE"
          content={currentData?.StatusMessage}
        />
      </Card>
      <Card title="Spectrum Velocity Visualization">
        <AreaLineChart
          dataX={currentTimeData}
          dataY={velocityData}
          chartType="area"
        />
      </Card>
      <Card title="Spectrum Altitude Visualization">
        <AreaLineChart
          dataX={currentTimeData}
          dataY={altitudeData}
          chartType="line"
        />
      </Card>
      <Card title="Spectrum Temperature Visualization">
        <AreaLineChart
          dataX={currentTimeData}
          dataY={temperatureData}
          chartType="line"
        />
      </Card>

      {/* spectrum action ------------------------------------------------------------ */}

      {currentData?.IsActionRequired && (
        <SpectrumWsAction
          size="24px"
          backgroundcolor={"#ce2029"}
          onClick={handleDispatchActSpectrum}
        />
      )}

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
};

export default SpectrumWebSocketView;
