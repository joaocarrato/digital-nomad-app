import React from "react";
import { Category, CategoryCode } from "../types";
import { IconName } from "./Icon";
import { Pill, PillProps } from "./Pill";

type CategoryPillProps = {
  category: Category;
} & Pick<PillProps, "active" | "onPress">;

export function CategoryPill({
  category,
  onPress,
  ...pillProps
}: CategoryPillProps) {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      label={category.name}
      onPress={onPress}
      {...pillProps}
    />
  );
}

const categoryIconMap: Record<CategoryCode, IconName> = {
  ADVENTURE: "Adventure",
  BEACH: "Beach",
  CULTURE: "Culture",
  GASTRONOMY: "Gastronomy",
  HISTORY: "History",
  LUXURY: "Luxury",
  NATURE: "Nature",
  URBAN: "Urban",
  SHOPPING: "Shopping",
  FAVORITE: "Star",
};
