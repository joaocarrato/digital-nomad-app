import { Divider } from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { CityDetailsHeader } from "@/src/containers/CityDetailsHeader";
import { CityDetailsInfo } from "@/src/containers/CityDetailsInfo";
import { CityDetailsMap } from "@/src/containers/CityDetailsMap";
import { CityDetailsRelatedCities } from "@/src/containers/CityDetailsRelatedCities";
import { CityDetailsTouristAttractions } from "@/src/containers/CityDetailsTouristAttractions";
import { useCityDetails } from "@/src/data/useCityDetails";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function CityDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const city = useCityDetails(id);

  if (!city) {
    return (
      <Screen flex={1} justifyContent="center" alignItems="center">
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader
        id={city.id}
        categories={city.categories}
        coverImage={city.coverImage}
      />
      <CityDetailsInfo
        country={city.country}
        description={city.description}
        name={city.name}
      />
      <Divider paddingHorizontal="padding" />

      <CityDetailsTouristAttractions />
      <Divider paddingHorizontal="padding" />

      <CityDetailsMap />
      <Divider paddingHorizontal="padding" />

      <CityDetailsRelatedCities />
    </Screen>
  );
}
