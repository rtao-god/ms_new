import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { HealthyStatus } from "@/widgets/components/HealthyStatus";
import { LAPTOP, PC } from "@/shared/utils";
import { Search } from "@/features/Search/ui";
import { useAuth } from "@/shared/model/store/auth";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Clinics } from "../Clinics";
import { Centers } from "../Centers";
import { Image } from "@/shared/ui/Image";
import { menuData } from "../../utils/data";
import { ROUTES } from "@/shared/utils/PATHS";
import { useLogout } from "@/shared/lib/hooks/useLogout";

import logo from "./assets/logo.svg";
import logoRed from "./assets/logo-red.svg";
import bigLogo from "./assets/logo-with-text.svg";
import bigLogoRed from "./assets/logo-with-text-red.svg";
import styles from "./styles.module.scss";


export const Menu: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { logout } = useLogout();
    const location = useLocation();

    useEffect(() => {
        setIsHovered(false);
    }, []);

    const { user } = useAuth();
    const navigate = useNavigate();
    const sick = user && user.disease.length;
    const group =
        user === null || user.group.name === "Пользователи"
            ? "default"
            : user.group.name === "Врачи"
            ? "personal"
            : "admin";

    return (
        <ul 
            className={`${styles.menu} ${styles.open} ${styles.sick}`}
            style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
        >
            <div 
                className={styles.header}
                style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
            >
                {user?.group.name === "Администраторы" ? (
                    <Search />
                ) : (
                    <Image
                        src={
                            PC || LAPTOP || isHovered
                                ? sick
                                    ? bigLogoRed
                                    : bigLogo
                                : sick
                                ? logoRed
                                : logo
                        }
                        alt="logo"
                        className={styles.logo}
                        onClick={() => navigate(ROUTES.main.path)}
                    />
                )}
            </div>
            {user?.group.name === "Пользователи" && (
                <Rows gap={10} rows={["auto"]} className={styles.healthy}>
                    <Text type="p" color="#B1B2B4" className={styles.condition}>
                        Состояние:
                    </Text>
                    <HealthyStatus isHovered={isHovered} />
                </Rows>
            )}
            {menuData[group].map((item, i) => (
                <li
                    key={i}
                    onClick={() => navigate(item.path)}
                    className={
                        item.path === location.pathname ? `${styles.active} ${sick && styles.SickActive}` : ""
                    }
                    style={{display: "flex", justifyContent: "space-between"}}
                >
                    <div className={styles.item}>
                        <Row gap={16}>
                            {item.icon}
                            <Text type="p">{item.label}</Text>
                        </Row>
                    </div>
                    {item.label === "Персонал" && (
                        <>
                            <svg width="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M6.25 16.6615L12.9167 9.99479L6.25 3.32812"
                                    stroke="#B1B2B4"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <WhiteContentBlock className={styles.submenu}>
                                <li>
                                    <Row
                                        gap={0}
                                        style={{
                                            justifyContent: "space-between",
                                            width: "100%",
                                        }}
                                    >
                                        <Text type="p" color="#B1B2B4">
                                            Врачи
                                        </Text>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.25 16.6615L12.9167 9.99479L6.25 3.32812"
                                                stroke="#B1B2B4"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Row>
                                </li>
                                <li>
                                    <Row
                                        gap={0}
                                        style={{
                                            justifyContent: "space-between",
                                            width: "100%",
                                        }}
                                    >
                                        <Text type="p" color="#B1B2B4">
                                            Клиники
                                        </Text>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.25 16.6615L12.9167 9.99479L6.25 3.32812"
                                                stroke="#B1B2B4"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Row>
                                    <WhiteContentBlock
                                        className={styles.submenu2}
                                    >
                                        <Clinics />
                                    </WhiteContentBlock>
                                </li>
                                <li>
                                    <Row
                                        gap={0}
                                        style={{
                                            width: "100%",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text type="p" color="#B1B2B4">
                                            Центры
                                        </Text>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.25 16.6615L12.9167 9.99479L6.25 3.32812"
                                                stroke="#B1B2B4"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Row>
                                    <WhiteContentBlock
                                        className={styles.submenu2}
                                    >
                                        <Centers />
                                    </WhiteContentBlock>
                                </li>
                            </WhiteContentBlock>
                        </>
                    )}
                </li>
            ))}
            <li>
                <Row gap={16} onClick={() => logout()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_5460_28865)">
                            <path
                                d="M12.6991 18.559H12.5908C8.89078 18.559 7.10745 17.1007 6.79912 13.8341C6.76578 13.4924 7.01578 13.184 7.36578 13.1507C7.69912 13.1174 8.01578 13.3757 8.04912 13.7174C8.29078 16.334 9.52412 17.309 12.5991 17.309H12.7075C16.0991 17.309 17.2991 16.109 17.2991 12.7174V7.28405C17.2991 3.89238 16.0991 2.69238 12.7075 2.69238H12.5991C9.50745 2.69238 8.27412 3.68405 8.04912 6.35072C8.00745 6.69238 7.71578 6.95072 7.36578 6.91738C7.01578 6.89238 6.76578 6.58405 6.79078 6.24238C7.07412 2.92572 8.86578 1.44238 12.5908 1.44238H12.6991C16.7908 1.44238 18.5408 3.19238 18.5408 7.28405V12.7174C18.5408 16.809 16.7908 18.559 12.6991 18.559Z"
                                fill="#B1B2B4"
                            />
                            <path
                                d="M12.5009 10.625H3.01758C2.67591 10.625 2.39258 10.3417 2.39258 10C2.39258 9.65833 2.67591 9.375 3.01758 9.375H12.5009C12.8426 9.375 13.1259 9.65833 13.1259 10C13.1259 10.3417 12.8426 10.625 12.5009 10.625Z"
                                fill="#B1B2B4"
                            />
                            <path
                                d="M4.87552 13.4162C4.71719 13.4162 4.55885 13.3579 4.43385 13.2329L1.64219 10.4412C1.40052 10.1995 1.40052 9.79954 1.64219 9.55788L4.43385 6.76621C4.67552 6.52454 5.07552 6.52454 5.31719 6.76621C5.55885 7.00788 5.55885 7.40788 5.31719 7.64954L2.96719 9.99954L5.31719 12.3495C5.55885 12.5912 5.55885 12.9912 5.31719 13.2329C5.20052 13.3579 5.03385 13.4162 4.87552 13.4162Z"
                                fill="#B1B2B4"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_5460_28865">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Text type="p" fz={14}>Выход</Text>
                </Row>
            </li>
        </ul>
    );
};
