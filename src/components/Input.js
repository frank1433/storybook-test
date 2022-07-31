/**
 * @Author: frank zhang
 * @Date:   2022-07-31 14:46:24
 * @Last Modified by:   frank zhang
 * @Last Modified time: 2022-07-31 14:56:27
 */

import React from "react";
export default function Input({ className, onChange, type, value }) {
  return (
    <input
      className={className}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      value={value}
    />
  );
}
