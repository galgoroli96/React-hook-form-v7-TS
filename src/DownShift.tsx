import * as React from "react";
import Downshift from "downshift";
import type { DownshiftProps } from "downshift";

const items = ["apple", "pear", "orange", "grape", "banana"] as const;

export type Item = typeof items[number];

export default React.forwardRef<
  Downshift<Item>,
  DownshiftProps<Item> & { value: Item }
>(({ value, onChange }, ref) => (
  <Downshift ref={ref} selectedItem={value} onChange={onChange}>
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue
    }) => (
      <div>
        <label {...getLabelProps()} className="label">
          Downshift 
        </label>
        <input
          {...getInputProps()}
          className="input"
          placeholder="Enter a fruit"
        />
        <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter((item) => !inputValue || item.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item,
                      index,
                      item
                    })}
                  >
                    {item}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
));
