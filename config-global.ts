// routes
import { paths } from "./routes/paths";

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const HOST_API_WEBSOCKET = process.env.NEXT_PUBLIC_SOCKET_URL;


// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
