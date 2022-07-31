/**
 * @Author: frank zhang
 * @Date:   2022-07-31 14:49:59
 * @Last Modified by:   frank zhang
 * @Last Modified time: 2022-07-31 15:05:07
 */
import { useState } from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <>
      <Input
        {...args}
        onChange={(...params) => {
          args.onChange(...params);
          setValue(...params);
        }}
        value={value}
      />
      {/* <pre style={{ marginTop: 10 }}>{JSON.stringify({ value }, null, 2)}</pre> */}
    </>
  );
};

export const Default = Template.bind({});

export const Number = Template.bind({});
Number.args = {
  type: "number",
};
export const Password = Template.bind({});
Password.args = {
  type: "password",
};
export const Value = Template.bind({});
Number.args = {
  value: "value",
};
