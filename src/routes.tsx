import Index from "./pages/index/Index";
import CourseInfo from "./pages/courseInfo/CourseInfo";
import Category from "./pages/category/Category";
import ArticleInfo from "./pages/articleInfo/ArticleInfo";

const routes = [
	{ path: "/", element: <Index /> },
	{ path: "/course-info/:courseName", element: <CourseInfo /> },
	{ path: "/category-info/:categoryName", element: <Category /> },
	{ path: "/article-info/:articleName", element: <Category /> },
	{ path: "/article-info/:articleName", element: <ArticleInfo /> },
];

export default routes;
