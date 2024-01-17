import { FC } from "react";

import styles from "./styles.module.scss";

export const Loader: FC = () => {
    const sick = "Болен";

    return sick ? (
        <svg
            className={styles.svg}
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
        >
            <circle cx="44" cy="44" r="40" stroke="#F7E6E8" strokeWidth="8" />
            <path
                d="M27.1043 80.2565C20.2972 77.0844 14.5206 72.06 10.4355 65.7583C6.35039 59.4566 4.12185 52.1322 4.00485 44.6231C3.88786 37.1141 5.88714 29.7238 9.77393 23.2979C13.6607 16.872 19.278 11.6701 25.983 8.28745"
                stroke="url(#paint0_linear_1496_37875)"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1496_37875"
                    x1="-30.9749"
                    y1="-6.65327"
                    x2="25.1055"
                    y2="80.7839"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D64657" />
                    <stop offset="1" stopColor="#D64657" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    ) : (
        <svg
            className={styles.svg}
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
        >
            <circle cx="44" cy="44" r="40" stroke="#C8DBF6" strokeWidth="8" />
            <path
                d="M27.1043 80.2565C20.2972 77.0844 14.5206 72.06 10.4355 65.7583C6.35039 59.4566 4.12185 52.1322 4.00485 44.6231C3.88786 37.1141 5.88714 29.7238 9.77393 23.2979C13.6607 16.872 19.278 11.6701 25.983 8.28745"
                stroke="url(#paint0_linear_1496_37871)"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1496_37871"
                    x1="-30.9749"
                    y1="-6.65327"
                    x2="25.1055"
                    y2="80.7839"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={sick ? "#D64657" : "#0064FA"} />
                    <stop
                        offset="1"
                        stopColor={sick ? "#D64657" : "#0064FA"}
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};
