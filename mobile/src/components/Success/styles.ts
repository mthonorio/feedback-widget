import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBotton: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  button: {
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 56,
    paddingHorizontal: 24,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});