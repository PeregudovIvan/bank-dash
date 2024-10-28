const MenuItem = ({ img, alt, name, active, href }) => {
    return (
        <li className={active ? "menu__link active" : "menu__link"}>
            <a href={href}>
                {active && <span></span>}
                <div className="menu__link__icon">
                    <img src={img} alt={alt} />
                </div>
                <div className="menu__link__name">{name}</div>
            </a>
        </li>
    );
};

export default MenuItem;
