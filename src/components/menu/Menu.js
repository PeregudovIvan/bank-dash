import "./menu.scss";

import logo from "../../resources/logo.svg";

import MenuItem from "../menu-item/MenuItem";

import dashboard from "../../resources/navbar-icons/dashboard.svg";
import transactions from "../../resources/navbar-icons/transactions.svg";
import accounts from "../../resources/navbar-icons/accounts.svg";
import investment from "../../resources/navbar-icons/investment.svg";
import creditCards from "../../resources/navbar-icons/credit-card.svg";
import loans from "../../resources/navbar-icons/loans.svg";
import services from "../../resources/navbar-icons/services.svg";
import myPrivileges from "../../resources/navbar-icons/my-privileges.svg";
import setting from "../../resources/navbar-icons/setting.svg";

const Menu = ({ active, onActive }) => {
    return (
        <div className={active ? "menu active" : "menu"}>
            <div className="menu__block">
                <div class="menu__close" onClick={onActive}>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z"
                            fill="black"
                        />
                    </svg>
                </div>

                <div className="menu__logo">
                    <a href="#" className="menu__logo__icon">
                        <img src={logo} alt="" />
                        <div className="menu__logo__name">BankDash.</div>
                    </a>
                </div>

                <nav>
                    <ul className="menu__list">
                        <MenuItem
                            img={dashboard}
                            alt="dashboard"
                            name="Dashboard"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={transactions}
                            alt="transactions"
                            name="Transactions"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={accounts}
                            alt="accounts"
                            name="Accounts"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={investment}
                            alt="investment"
                            name="Investments"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={creditCards}
                            alt="Credit Cards"
                            name="Credit Cards"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={loans}
                            alt="loans"
                            name="Loans"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={services}
                            alt="services"
                            name="Services"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={myPrivileges}
                            alt="My Privileges"
                            name="My Privileges"
                            active={false}
                            href="#"
                        />
                        <MenuItem
                            img={setting}
                            alt="setting"
                            name="Setting"
                            active={true}
                            href="#"
                        />
                    </ul>
                </nav>
                <div className="menu__divider"></div>
            </div>
            <div class="menu__overlay"></div>
        </div>
    );
};

export default Menu;
