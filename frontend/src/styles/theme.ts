import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import {  darken } from '@mui/material/styles';

// 创建颜色系列函数
interface ColorSet {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

/**
 * 创建一个颜色系列，包括主色、亮色和暗色
 * @param baseColor 基础颜色
 * @param lightFactor 变亮因子(0-1)
 * @param darkFactor 变暗因子(0-1)
 * @returns 包含主色、亮色、暗色和对比色的对象
 */
const createColorSet = (
  baseColor: string, 
  lightFactor = 0.5, 
  darkFactor = 0.2
): ColorSet => {
  const main = baseColor;
  const light = alpha(baseColor, lightFactor);
  const dark = darken(baseColor, darkFactor);
  const contrastText = getContrastRatio(main, '#fff') > 4.5 ? '#fff' : '#111';
  
  return {
    main,
    light,
    dark,
    contrastText
  };
};


// 基础颜色变量
const primaryBase = '#7B61FF';
const secondaryBase = '#4F88F7';
const errorBase = '#FF0000';
const warningBase = '#E67E22';
const infoBase = '#22D3EE';
const successBase = '#10B981';

// 其他颜色变量
const backgroundColor = '#F8F9FB';
const paperColor = '#ffffff';
const textPrimaryColor = '#1F2937';
const textSecondaryColor = '#4B5563';
const textDisabledColor = '#8C8D8B';
const dividerColor = "#E5E7EB";

// 间距和形状
const spacing = 4;
const borderRadius = 4;

// 字体变量
const fontFamily = 'Poppins, Arial, sans-serif';

const typographyH1 = {
  fontSize: '5.9rem', // ~94px
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.01562em',
};

const typographyH2 = {
  fontSize: '3.9rem', // ~62px
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.00833em',
};

const typographyH3 = {
  fontSize: '3rem', // 48px
  fontWeight: 500,
  lineHeight: 1.167,
  letterSpacing: '0em',
};

const typographyH4 = {
  fontSize: '2.125rem', // 34px
  fontWeight: 500,
  lineHeight: 1.235,
  letterSpacing: '0.00735em',
};

const typographyH5 = {
  fontSize: '1.5rem', // 24px
  fontWeight: 500,
  lineHeight: 1.334,
  letterSpacing: '0em',
};

const typographyH6 = {
  fontSize: '1.25rem', // 20px
  fontWeight: 500,
  lineHeight: 1.6,
  letterSpacing: '0.0075em',
};

const typographySubtitle1 = {
  fontSize: '1.1rem', // ~17.6px
  fontWeight: 400,
  lineHeight: 1.75,
  letterSpacing: '0.00938em',
};

const typographySubtitle2 = {
  fontSize: '0.875rem', // 14px
  fontWeight: 500,
  lineHeight: 1.57,
  letterSpacing: '0.00714em',
};

const typographyBody1 = {
  fontSize: '1.1rem', // ~17.6px
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.00938em',
};

const typographyBody2 = {
  fontSize: '0.9rem', // ~14.4px
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: '0.01071em',
};

const typographyCaption = {
  fontSize: '0.75rem', // 12px
  fontWeight: 400,
  lineHeight: 1.66,
  letterSpacing: '0.03333em',
};

const typographyOverline = {
  fontSize: '0.75rem', // 12px
  fontWeight: 400,
  lineHeight: 2.66,
  letterSpacing: '0.08333em',
  textTransform: 'uppercase' as const,
};

const typographyButton = {
  fontSize: '1rem', // 16px
  fontWeight: 500,
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  textTransform: 'none' as const,
};

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: backgroundColor,
      paper: paperColor,
    },
    text: {
      primary: textPrimaryColor,
      secondary: textSecondaryColor,
      disabled: textDisabledColor,
    },
    primary: createColorSet(primaryBase),
    secondary: createColorSet(secondaryBase),
    error: createColorSet(errorBase),
    warning: createColorSet(warningBase),
    info: createColorSet(infoBase),
    success: createColorSet(successBase),
    divider: dividerColor,
  },
  typography: {
    fontFamily: fontFamily,
    h1: typographyH1,
    h2: typographyH2,
    h3: typographyH3,
    h4: typographyH4,
    h5: typographyH5,
    h6: typographyH6,
    subtitle1: typographySubtitle1,
    subtitle2: typographySubtitle2,
    body1: typographyBody1,
    body2: typographyBody2,
    caption: typographyCaption,
    overline: typographyOverline,
    button: typographyButton,
  },
  spacing: spacing,
  shape: {
    borderRadius: borderRadius,
  },
};

const theme = createTheme(themeOptions);

export default theme;
