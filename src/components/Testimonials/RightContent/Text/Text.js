import React from "react";
import PallidText from "../../../Ui/PallidText/PallidText";
import classes from "./Text.module.css";

const text = (props) => {
  return (
    <div className={classes.PallidText} ref={props.innerRef}>
      <div style={{ transform: `translateX(${props.textTranslateX}%)` }}>
        <PallidText>
          Day set fifth winged divided seas years, seas is void darkness winged.
          Season green life Don great said won't whales together man lesser is
          may Itself need moveth herb itself darkness likeness sixth creepeth.
        </PallidText>

        <PallidText>
          Day set fifth winged divided seas years, seas is void darkness winged.
          Season green life Don great said won't whales together man lesser is
          may Itself need moveth herb itself darkness likeness sixth creepeth.
        </PallidText>

        <PallidText>
          Day set fifth winged divided seas years, seas is void darkness winged.
          Season green life Don great said won't whales together man lesser is
          may Itself need moveth herb itself darkness likeness sixth creepeth.
        </PallidText>
      </div>
    </div>
  );
};

export default text;
