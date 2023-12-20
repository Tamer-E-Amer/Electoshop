import * as yup from "yup";

export const priceComparisonSchema = yup.object({
  minPrice: yup
    .number()
    .typeError("Min price should be a number")
    .positive("Min price should be positive"),
  maxPrice: yup
    .number()
    .typeError("Max price should be a number")
    .positive("Max price should be positive")
    .when(
      "minPrice",
      (minPrice, schema) =>
        minPrice &&
        schema.moreThan(minPrice, "Max price should be greater than min price")
    ),
});
