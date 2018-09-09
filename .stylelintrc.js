module.exports = {
  // https://github.com/stylelint/stylelint-config-standard
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules",
    ],

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    "order/properties-order": [
      "flex-wrap",
      "display",
      "position",
      "top",
      "bottom",
      "right",
      "left",
      "margin",
      "padding",
      "width",
      "height",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "text-align",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "color",
      "text-decoration",
      "background-color",
      "border",
      "border-radius",
      "opacity",
      "transition",
    ],
  },
};
