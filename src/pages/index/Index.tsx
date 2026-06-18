import AboutUs from "../../components/aboutUs/AboutUs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LastArticles from "../../components/lastArticles/LastArticles";
import LastCourses from "../../components/lastCourses/LastCourses";
import PopularCourses from "../../components/popularCourses/PopularCourses";
import PresellCourses from "../../components/presellCourses/PresellCourses";
import "./Index.css";

export default function Index() {
	return (
		<>
			<Header />
			<LastCourses />
			<AboutUs />
			<PopularCourses />
			<PresellCourses />
			<LastArticles />
			<Footer />
		</>
	);
}
