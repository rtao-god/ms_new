import { FC } from "react";
import { ISickProps } from "./types";

import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

export const Sick: FC<ISickProps> = ({
    condition,
    handleMouseEnter,
    handleMousleLeave,
    onClick,
}) => {
    const sickClasses = `${styles.sick} ${styles.item}`;

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMousleLeave}
            className={condition ? sickClasses : styles.item}
        >
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6768 8.37209C12.1951 8.37209 10.9939 9.51741 10.9939 10.9302C10.9939 12.3431 12.1951 13.4884 13.6768 13.4884C15.1586 13.4884 16.3598 12.3431 16.3598 10.9302C16.3598 9.51741 15.1586 8.37209 13.6768 8.37209ZM12.4573 10.9302C12.4573 10.288 13.0033 9.76744 13.6768 9.76744C14.3503 9.76744 14.8963 10.288 14.8963 10.9302C14.8963 11.5724 14.3503 12.093 13.6768 12.093C13.0033 12.093 12.4573 11.5724 12.4573 10.9302Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.57927 7.2093C7.57927 6.31023 8.34366 5.5814 9.28659 5.5814C10.2295 5.5814 10.9939 6.31023 10.9939 7.2093C10.9939 8.10837 10.2295 8.83721 9.28659 8.83721C8.34366 8.83721 7.57927 8.10837 7.57927 7.2093ZM9.28659 6.97674C9.15188 6.97674 9.04268 7.08086 9.04268 7.2093C9.04268 7.33774 9.15188 7.44186 9.28659 7.44186C9.42129 7.44186 9.53049 7.33774 9.53049 7.2093C9.53049 7.08086 9.42129 6.97674 9.28659 6.97674Z"
                />
                <path d="M8.31098 11.8605C8.84979 11.8605 9.28659 11.444 9.28659 10.9302C9.28659 10.4165 8.84979 10 8.31098 10C7.77216 10 7.33537 10.4165 7.33537 10.9302C7.33537 11.444 7.77216 11.8605 8.31098 11.8605Z" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.94512 0C4.15745 0 5.14024 0.937078 5.14024 2.09302C5.14024 2.41615 5.06345 2.72217 4.92631 2.99541L6.39547 4.39623C7.22091 3.75072 8.19578 3.27177 9.26499 3.01192C9.12261 2.73452 9.04268 2.42267 9.04268 2.09302C9.04268 0.937078 10.0255 0 11.2378 0C12.4501 0 13.4329 0.937078 13.4329 2.09302C13.4329 2.44181 13.3434 2.77067 13.1852 3.05987C14.2304 3.33932 15.1872 3.82582 16.0033 4.4695L16.5737 3.92564C16.4366 3.6524 16.3598 3.34638 16.3598 3.02326C16.3598 1.86731 17.3425 0.930233 18.5549 0.930233C19.7672 0.930233 20.75 1.86731 20.75 3.02326C20.75 4.1792 19.7672 5.11628 18.5549 5.11628C18.216 5.11628 17.895 5.04306 17.6085 4.9123L17.0381 5.45616C17.6601 6.17309 18.1421 7.00392 18.4433 7.90965C18.4803 7.90788 18.5175 7.90698 18.5549 7.90698C19.7672 7.90698 20.75 8.84406 20.75 10C20.75 11.1559 19.7672 12.093 18.5549 12.093C18.5387 12.093 18.5226 12.0929 18.5066 12.0925C18.1578 13.2466 17.5121 14.2776 16.6525 15.1065L16.6815 15.134C16.968 15.0033 17.289 14.93 17.6279 14.93C18.8402 14.93 19.823 15.8671 19.823 17.0231C19.823 18.179 18.8402 19.1161 17.6279 19.1161C16.4155 19.1161 15.4327 18.179 15.4327 17.0231C15.4327 16.6999 15.5095 16.3939 15.6467 16.1207L15.5209 16.0008C14.8223 16.4497 14.0386 16.7885 13.1967 16.9915C12.835 17.672 12.0944 18.1396 11.2377 18.1396C10.3548 18.1396 9.59511 17.6429 9.24648 16.9282C8.45074 16.7106 7.70692 16.3727 7.03826 15.9368C7.0077 15.986 6.97027 16.0323 6.92596 16.0745L5.91742 17.0361C6.04483 17.3013 6.11585 17.5962 6.11585 17.907C6.11585 19.0629 5.13306 20 3.92073 20C2.7084 20 1.72561 19.0629 1.72561 17.907C1.72561 16.751 2.7084 15.814 3.92073 15.814C4.27254 15.814 4.60503 15.8929 4.89977 16.0331L5.89117 15.0879C5.90261 15.0769 5.91434 15.0665 5.92633 15.0564C5.00738 14.1789 4.3193 13.0815 3.95913 11.8568C3.65582 12.0077 3.31092 12.093 2.94512 12.093C1.73279 12.093 0.75 11.1559 0.75 10C0.75 8.84406 1.73279 7.90698 2.94512 7.90698C3.29085 7.90698 3.61791 7.98319 3.90884 8.11895C4.18137 7.09947 4.68369 6.16993 5.36068 5.38289L3.89152 3.98207C3.60496 4.11282 3.28401 4.18605 2.94512 4.18605C1.73279 4.18605 0.75 3.24897 0.75 2.09302C0.75 0.937078 1.73279 0 2.94512 0ZM3.67683 2.09302C3.67683 1.70771 3.34923 1.39535 2.94512 1.39535C2.54101 1.39535 2.21341 1.70771 2.21341 2.09302C2.21341 2.47834 2.54101 2.7907 2.94512 2.7907C3.34923 2.7907 3.67683 2.47834 3.67683 2.09302ZM11.349 15.814C14.6718 15.814 17.3354 13.2743 17.3354 10.1061L17.3352 10.0582C17.308 6.84293 14.5489 4.21219 11.1768 4.18624C7.81393 4.16037 5.11331 6.73538 5.14045 9.94183C5.16766 13.1571 7.92674 15.7878 11.2988 15.8138C11.3156 15.8139 11.3323 15.814 11.349 15.814ZM18.7988 9.34202C19.083 9.4378 19.2866 9.69623 19.2866 10C19.2866 10.3038 19.083 10.5622 18.7988 10.658V9.34202ZM18.5549 2.32558C18.1508 2.32558 17.8232 2.63794 17.8232 3.02326C17.8232 3.40857 18.1508 3.72093 18.5549 3.72093C18.959 3.72093 19.2866 3.40857 19.2866 3.02326C19.2866 2.63794 18.959 2.32558 18.5549 2.32558ZM2.94512 9.30233C3.34923 9.30233 3.67683 9.61469 3.67683 10C3.67683 10.3853 3.34923 10.6977 2.94512 10.6977C2.54101 10.6977 2.21341 10.3853 2.21341 10C2.21341 9.61469 2.54101 9.30233 2.94512 9.30233ZM16.8962 17.0231C16.8962 17.4084 17.2237 17.7207 17.6279 17.7207C18.032 17.7207 18.3596 17.4084 18.3596 17.0231C18.3596 16.6378 18.032 16.3254 17.6279 16.3254C17.2237 16.3254 16.8962 16.6378 16.8962 17.0231ZM3.92073 18.6047C4.32484 18.6047 4.65244 18.2923 4.65244 17.907C4.65244 17.5217 4.32484 17.2093 3.92073 17.2093C3.51662 17.2093 3.18902 17.5217 3.18902 17.907C3.18902 18.2923 3.51662 18.6047 3.92073 18.6047ZM10.5061 2.09302C10.5061 1.70771 10.8337 1.39535 11.2378 1.39535C11.6419 1.39535 11.9695 1.70771 11.9695 2.09302C11.9695 2.47834 11.6419 2.7907 11.2378 2.7907C10.8337 2.7907 10.5061 2.47834 10.5061 2.09302Z"
                />
            </svg>
            <Text type="p">Болен</Text>
        </div>
    );
};