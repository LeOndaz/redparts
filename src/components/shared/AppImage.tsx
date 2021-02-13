// react
import React, { useMemo } from 'react';
// application
import { baseUrl } from '~/services/utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AppImage = React.forwardRef((props: Props, ref: React.Ref<HTMLImageElement>) => {
    const { src, alt, ...otherProps } = props;

    const normalizedSrc = useMemo(() => (src ? baseUrl(src) : src), [src]);

    return <img {...otherProps} src={normalizedSrc} ref={ref} alt={alt} itemProp='image'/>;
});

export default AppImage;
