import * as React from "react";
import type { UseFormReset } from "react-hook-form";
import { defaultValues } from ".";
import type { FormValues } from ".";

export default ({ reset }: { reset: UseFormReset<FormValues> }) => (
  <>
    <button
      className="button buttonBlack"
      type="button"
      onClick={() => {
        reset(defaultValues);
      }}
    >
      Reset Form
    </button>
    <button className="button">submit</button>
  </>
);
