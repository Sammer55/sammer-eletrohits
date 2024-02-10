import React from "react";
import { Dimensions } from "react-native";
import * as C from "./styles";

type Props = {
  percent: number;
};

const ProgressBar = ({ percent }: Props) => {
  const BAR_SIZE = Dimensions.get("window").width - 48;

  const barItemPercentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const numberOfBarItems = barItemPercentages.filter(
    (increment) => percent >= increment
  ).length;

  const barItemSize = BAR_SIZE / 10;

  const barItems = Array.from({ length: numberOfBarItems }, (_, index) => (
    <C.BarItem key={index} style={{ width: barItemSize }} />
  ));

  return (
    <C.Wrapper>
      <C.Bar>{barItems}</C.Bar>
      <C.Text>{`${percent.toFixed(2)}% Completo`}</C.Text>
    </C.Wrapper>
  );
};

export default ProgressBar;
