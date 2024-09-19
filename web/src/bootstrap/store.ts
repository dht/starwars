import { initStore } from "store";
import { root } from "../sagas";
import { initAxios } from "../utils/axios";

initAxios(import.meta.env.VITE_API);
export const store = initStore([root]);
