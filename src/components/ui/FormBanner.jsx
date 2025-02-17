import React from 'react';
import Image from 'next/image';

const FormBanner = ({ 
    bannerSrc, 
    formHeight, 
    formWidth, 
    className, 
    title, 
    subtitle, 
    textClassName ,
    titleClassName,
    subtitleClassName,
    formImgClassName,
    spanTextClassName,
    spanText
}) => {
    return (
        <div style={{ height: formHeight, width: formWidth }} className={`relative ${className}`}>
            <Image
                src={bannerSrc}
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                priority
                className={formImgClassName}
            />

            <div className={`${textClassName}`}>
                <h2 className={`${titleClassName}`}> <span className={spanTextClassName}>{spanText}</span> {title}</h2>
                <p className={`${subtitleClassName}`}>{subtitle}</p>
            </div>
        </div>
    );
};

export default FormBanner;
