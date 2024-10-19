import { useFetchData } from "~/composables/configurator/fetchData";
export const useConfigData = async (
  indexOfCurrentProfile: Ref<number>,
  indexOfCurrentGroup: Ref<number>
) => {
  const parsedData = await useFetchData();
  const allProfiles = parsedData.map(
    (profileData: any) => profileData.groups[0]
  );
  const allProfilesLabels = allProfiles.map(
    (profilesLabel: any) => profilesLabel.options[0].label
  );
  const groupLabels = computed(() =>
    parsedData[indexOfCurrentProfile.value].groups.map(
      (group: any) => group.label
    )
  );
  const optionLabels = computed(() =>
    parsedData[indexOfCurrentProfile.value].groups
      .filter(
        (group: any, index: number) =>
          index != 0 && index === indexOfCurrentGroup.value
      )
      .map((group: any) => group.options.map((option: any) => option.label))
      .flat()
  );

  return { allProfilesLabels, groupLabels, optionLabels };
};
