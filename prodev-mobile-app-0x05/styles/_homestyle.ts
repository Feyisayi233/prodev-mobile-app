import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  searchGroup: {
    marginBottom: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  searchControl: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
    paddingVertical: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 20,
    width: 60,
  },
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
