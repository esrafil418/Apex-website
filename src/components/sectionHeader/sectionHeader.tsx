/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
import "./sectionHeader.css";
import type { sectionHeaderProps } from "./types";

export default function sectionHeader({
	title,
	desc,
	btnTitle,
}: sectionHeaderProps) {
	return (
		<div className="courses-header">
			<div className="courses-header__right">
				<span className="courses-header__title title">{title}</span>
				<span className="courses-header__text">{desc}</span>
			</div>
			{btnTitle ? (
				<div className="courses-header__left">
					<a href="#" className="courses-header__link">
						تمامی دوره ها
						<i className="fas fa-arrow-left courses-header__icon"></i>
					</a>
				</div>
			) : null}
		</div>
	);
}
