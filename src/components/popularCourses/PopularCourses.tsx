import "./PopularCourses.css";
import SectionHeader from "../sectionHeader/sectionHeader";

export default function PopularCourses() {
	return (
		<div className="popular">
			<div className="container">
				<SectionHeader
					title="محبوب ترین دوره ها"
					desc="دوره های محبوب بر اساس امتیاز دانشجوها"
				/>
			</div>
		</div>
	);
}
