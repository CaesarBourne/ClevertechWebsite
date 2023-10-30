import React from "react";
import { useDispatch } from "react-redux";

import { uuid } from "../../utils/uuid";
import { componentsActions } from "../../store/components";
import { AvailableComponents } from "../Components";

import "./components-picker.css";

export const ComponentsPicker = ({ lockedPicker }) => {
  const dispatch = useDispatch();
  const onComponentClick = (layout) => {
    if (!lockedPicker) {
      dispatch(componentsActions.addComponent({ id: uuid(), layout }));
    }
  };

  return (
    <div
      className={`components-picker ${
        lockedPicker ? "components-picker--disabled" : ""
      }`}
    >
      {AvailableComponents.map((component) => (
        <div
          className={`components-picker__component ${
            lockedPicker ? "components-picker__component--disabled" : ""
          }`}
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
};
