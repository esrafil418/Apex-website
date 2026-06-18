import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Topbar from "../topbar/Topbar";
import "./Header.css";

export default function Header() {
	return (
		<div>
			<Topbar />
			<Navbar />
			<Landing />
		</div>
	);
}
