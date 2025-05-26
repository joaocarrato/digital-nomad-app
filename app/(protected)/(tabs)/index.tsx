import { CityCard } from "@/src/components/CityCard";
import { Icon } from "@/src/components/Icon";
import { Screen } from "@/src/components/Screen";
import { cityPreviewList } from "@/src/data/cities";
import { useAppTheme } from "@/src/hooks/useAppTheme";
import { CityPreview } from "@/src/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  const flatListRef = useRef<FlatList>(null);
  useScrollToTop(flatListRef);
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <Icon name="Beach" />
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cityPreviewList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
