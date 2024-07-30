import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GenericLayout } from "../../widgets/GenericLayout";
import { homePageRoute } from "../../pages/home";
import { RefProvider } from "./ref-provider";

const router = createBrowserRouter([
  {
    children: [
      {
        element: (
          <RefProvider>
            <GenericLayout />
          </RefProvider>
        ),
        children: [homePageRoute],
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
