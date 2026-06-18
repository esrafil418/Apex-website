import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Topbar from "../topbar/Topbar";
import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<Topbar />
			<Navbar />
			<Landing />
		</div>
	);
}
