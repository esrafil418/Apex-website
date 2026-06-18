import Typewriter from "typewriter-effect";
import "./Landing.css";

export default function Landing() {
	return (
		<div>
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Hello World!")
						.start()
						.pauseFor(2000)
						.deleteAll()
						.typeString("This is amazing!")
						.start()
						.pauseFor(2500);
				}}
				options={{
					loop: true,
				}}
			/>
		</div>
	);
}
