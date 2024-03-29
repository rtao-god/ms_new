import { FC, useState } from "react";

import { Filter } from "@/shared/ui/Filter";

export const SelectTypeOfNotify: FC = () => {
    const [isSelect, setIsSelect] = useState<string>("");

    return (
        <Filter
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            icons={[
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7.08301 8.75H12.9163"
                        stroke="#7D7F82"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.83317 15.3568H9.1665L12.8748 17.8235C13.4248 18.1901 14.1665 17.7984 14.1665 17.1318V15.3568C16.6665 15.3568 18.3332 13.6901 18.3332 11.1901V6.1901C18.3332 3.6901 16.6665 2.02344 14.1665 2.02344H5.83317C3.33317 2.02344 1.6665 3.6901 1.6665 6.1901V11.1901C1.6665 13.6901 3.33317 15.3568 5.83317 15.3568Z"
                        stroke="#7D7F82"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>,
                <svg width="20" height="20" viewBox="0 0 21 20" fill="none">
                    <path
                        d="M18.8087 15.2802C18.8087 15.5802 18.742 15.8885 18.6003 16.1885C18.4587 16.4885 18.2753 16.7719 18.0337 17.0385C17.6253 17.4885 17.1753 17.8135 16.667 18.0219C16.167 18.2302 15.6253 18.3385 15.042 18.3385C14.192 18.3385 13.2837 18.1385 12.3253 17.7302C11.367 17.3219 10.4087 16.7719 9.45866 16.0802C8.50033 15.3802 7.59199 14.6052 6.72533 13.7469C5.86699 12.8802 5.09199 11.9719 4.40033 11.0219C3.71699 10.0719 3.16699 9.12188 2.76699 8.18021C2.36699 7.23021 2.16699 6.32187 2.16699 5.45521C2.16699 4.88854 2.26699 4.34688 2.46699 3.84688C2.66699 3.33854 2.98366 2.87188 3.42533 2.45521C3.95866 1.93021 4.54199 1.67188 5.15866 1.67188C5.39199 1.67188 5.62533 1.72188 5.83366 1.82188C6.05033 1.92188 6.24199 2.07188 6.39199 2.28854L8.32533 5.01354C8.47533 5.22188 8.58366 5.41354 8.65866 5.59687C8.73366 5.77187 8.77533 5.94688 8.77533 6.10521C8.77533 6.30521 8.71699 6.50521 8.60033 6.69687C8.49199 6.88854 8.33366 7.08854 8.13366 7.28854L7.50033 7.94687C7.40866 8.03854 7.36699 8.14688 7.36699 8.28021C7.36699 8.34688 7.37533 8.40521 7.39199 8.47187C7.41699 8.53854 7.44199 8.58854 7.45866 8.63854C7.60866 8.91354 7.86699 9.27188 8.23366 9.70521C8.60866 10.1385 9.00866 10.5802 9.44199 11.0219C9.89199 11.4635 10.3253 11.8719 10.767 12.2469C11.2003 12.6135 11.5587 12.8635 11.842 13.0135C11.8837 13.0302 11.9337 13.0552 11.992 13.0802C12.0587 13.1052 12.1253 13.1135 12.2003 13.1135C12.342 13.1135 12.4503 13.0635 12.542 12.9719L13.1753 12.3469C13.3837 12.1385 13.5837 11.9802 13.7753 11.8802C13.967 11.7635 14.1587 11.7052 14.367 11.7052C14.5253 11.7052 14.692 11.7385 14.8753 11.8135C15.0587 11.8885 15.2503 11.9969 15.4587 12.1385L18.217 14.0969C18.4337 14.2469 18.5837 14.4219 18.6753 14.6302C18.7587 14.8385 18.8087 15.0469 18.8087 15.2802Z"
                        stroke="#7D7F82"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M15.9172 7.5026C15.9172 7.0026 15.5255 6.23594 14.9422 5.61094C14.4088 5.03594 13.7005 4.58594 13.0005 4.58594"
                        stroke="#7D7F82"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.8338 7.50521C18.8338 4.28021 16.2255 1.67188 13.0005 1.67188"
                        stroke="#7D7F82"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>,
            ]}
            data={["SMS", "Звонок"]}
            width="100%"
        />
    );
};
