import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./layout/error-boundary/ErrorBoundary";
import AccountPreferences from "./Components/accountPreferences/AccountPreferences";
import PreferenceSettingEdit from "./Components/PreferenceSetting/Preference";
import Signup from "./core/auth/signup/Signup";
import GeneralLoading from "./layout/general-loading/GeneralLoading";

import FAQ from "./pages/FAQ/FAQ";
import { About, Career, Contact, LandingPage, PrivatePolicy } from "./pages";
import Dasboard from "./Components/dasboard/Dasboard";
import Home from "./Components/userDasboardComponents/home/Home";
import ChatBox from "./core/chatbox/ChatBox";
import NewTask from "./core/todo/NewTask";

function App() {
	return (
		<ErrorBoundary>
			{/* <Layout> */}
			<Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/career" element={<Career />} />
					<Route path="/dashboard" element={<Dasboard />}>
						<Route path="" element={<Home />} />
						<Route path="chat" element={<ChatBox />} />
					</Route>
					<Route path="/about" element={<About />} />
					<Route path="/policy" element={<PrivatePolicy />} />
					<Route path="/account" element={<AccountPreferences />} />
					<Route path="/account/edit" element={<PreferenceSettingEdit />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/newtask" element={<NewTask />} />

					<Route path="/faq" element={<FAQ />} />

					{/* 404-error handler */}
					<Route path="*" element={<GeneralLoading text="PAGE NOT FOUND" />} />
				</Routes>
			</Suspense>
			{/* </Layout> */}
		</ErrorBoundary>
	);
}

export default App;
