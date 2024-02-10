import React from "react";
import { Text } from "react-native";

const setGlobalFontFamily = () => {
  // @ts-ignore
  const oldTextRender = Text.render;

  // @ts-ignore
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);

    if (origin.type === "RCTVirtualText") {
      return origin;
    }

    const children = origin.props.children;
    if (typeof children === "object") {
      return React.cloneElement(origin, {
        children: React.cloneElement(children, {
          style: [{ fontFamily: "MS" }, children.props.style],
        }),
      });
    }

    return React.cloneElement(origin, {
      style: [{ fontFamily: "MS" }, origin.props.style],
    });
  };
};

export default setGlobalFontFamily;
