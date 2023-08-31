import React from "react";
import _ from "lodash/fp";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import countryToFlag from "./countryToFlag";
import countries from "./countries";
import type { FormValues } from "../";

interface ICountry {
  code: string;
  label: string;
  phone: string;
}

export default function CountrySelect({
  control
}: {
  control: Control<FormValues>;
}) {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={countries}
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          getOptionSelected={(option: ICountry, value: ICountry) =>
            _.isEqual(option, value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      name="country"
      control={control}
    />
  );
}
