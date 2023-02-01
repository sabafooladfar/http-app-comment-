import FullComment from "./pages/FullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/new-comment", element: <NewCommentPage /> },
  { path: "/comment/:id", element: <FullComment /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
