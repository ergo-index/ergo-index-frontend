/**
 * Nav bar on the landing page for unauthenticated users.
 */
interface LandingNavProps {
    onClickLogin: () => void
    onClickSignUp: () => void
}

const LandingNav = ({ onClickLogin, onClickSignUp }: LandingNavProps) => {

    return (
        <header className="bg-navBlue">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-auto"
                            src="/ergo-index.fund_large.png"
                            alt="Our Logo"
                        />
                    </div>
                    <div className="ml-10 space-x-4 cursor-auto">
                        <div
                            onClick={onClickLogin}
                            className="inline-block  py-2 px-4 text-lg  text-textBlue cursor-pointer hover:text-white"
                        >
                            Log in
                        </div>
                        <div
                            onClick={onClickSignUp}
                            className="inline-block py-2 px-4 text-lg text-textBlue cursor-pointer hover:text-white"
                        >
                            Sign up
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default LandingNav;
