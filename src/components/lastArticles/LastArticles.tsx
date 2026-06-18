import "./LastArticles.css";
import SectionHeader from "./../sectionHeader/sectionHeader";

export default function LastArticles() {
	return (
		<section className="articles">
			<div className="container">
				<SectionHeader
					title="جدیدترین مقاله ها"
					desc="پیش به سوی ارتقای دانش"
					btnTitle="تمامی مقاله ها"
				/>
			</div>
		</section>
	);
}
