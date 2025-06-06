import { router } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlackOpacity } from "../components/BlackOpacity";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { Icon } from "../components/Icon";
import { IconButton } from "../components/IconButton";
import { PILL_HEIGHT } from "../components/Pill";
import { City } from "../types";

type CityDetailsHeaderProps = Pick<City, "id" | "coverImage" | "categories">;

export function CityDetailsHeader({
  coverImage,
  categories,
}: CityDetailsHeaderProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Box>
      <ImageBackground
        source={coverImage}
        style={{ width: "100%", height: 280 }}
        imageStyle={{ borderBottomRightRadius: 40 }}
      >
        <BlackOpacity />

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingHorizontal="padding"
          style={{ paddingTop: top }}
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon name="Favorite-outline" size={30} color="pureWhite" />
        </Box>
      </ImageBackground>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill active={true} key={category.id} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
