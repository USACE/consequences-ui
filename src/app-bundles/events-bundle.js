import createRestBundle from "./create-rest-bundle";

export default createRestBundle({
  name: "event",
  uid: "id",
  prefetch: true,
  staleAfter: 0,
  persist: false,
  sortBy: "name",
  routeParam: "",
  getTemplate: "/events",
  putTemplate: "/:",
  postTemplate: "/events",
  deleteTemplate: "/events/:item.id",
  fetchActions: ["URL_UPDATED", "AUTH_LOGGED_IN"],
  forceFetchActions: [],
  urlParamSelectors: [],
  addons: {}
});
