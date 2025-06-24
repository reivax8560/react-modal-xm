import React from "react";

declare module "react-modal-xm" {
    const Modal: React.FC<{
        isBackgroundDisplayed?: boolean;
        classBackgroundColor?: string;
        title?: string;
        message?: string;
        closureFunction?: () => void;
        closureIconSize?: string;
        classModal?: string;
        classTitle?: string;
        classMessage?: string;
    }>;

    export default Modal;
}




// declare module 'react-modal-xm' {
//     export const Modal: any;
// }
