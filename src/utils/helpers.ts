export interface MatchingStrings {
  str1: string;
  str2: string;
}

export const isMatch = ({ str1, str2 }: MatchingStrings): boolean => {
  if (str1?.length !== str2?.length) {
    return false;
  }

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};
