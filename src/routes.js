import { lazy } from "solid-js";
import StoriesData from "./pages/[...stories].data";
import StoryData from "./pages/stories/[id].data";
import UserData from "./pages/users/[id].data";

export default [
  {
    path: "/users/:id",
    component: lazy(() => import("./pages/users/[id]")),
    data: UserData
  },
  {
    path: "/stories/:id",
    component: lazy(() => import("./pages/stories/[id]")),
    data: StoryData
  },
  {
    path: "/*stories",
    component: lazy(() => import("./pages/[...stories]")),
    data: StoriesData
  }
];
