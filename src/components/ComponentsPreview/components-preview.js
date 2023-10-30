import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ComponentsWrapper } from "../ComponentsWrapper/components-wrapper";
import { componentsActions } from "../../store/components";

import "./components-preview.css";

export const ComponentsPreview = () => {
  const components = useSelector((state) => state.components.items);
  const currentlyEdited = useSelector(
    (state) => state.components.currentlyEdited
  );
  const dispatch = useDispatch();
  const onComponentEdit = (component) =>
    dispatch(componentsActions.setEditedComponent(component));

  return (
    <div data-testid="components-preview" className="components-preview">
      {components.map((component) => (
        <ComponentsWrapper
          key={component.id}
          isEdited={
            component.id === currentlyEdited?.id &&
            Object.keys(component.values).length > 0
          }
          onComponentEdit={() => onComponentEdit(component)}
          {...component}
        />
      ))}
    </div>
  );
};

ComponentsPreview.defaultProps = {
  currentlyEdited: {},
};
