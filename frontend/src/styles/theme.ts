import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

// 基础颜色变量
const primaryBase = '#7B61FF';
const secondaryBase = '#4F88F7';
const errorBase = '#FF0000';
const warningBase = '#E67E22';
const infoBase = '#22D3EE';
const successBase = '#10B981';

// 其他颜色变量
const backgroundColor = '#ffffff';
const paperColor = '#ffffff';
const textPrimaryColor = 'rgba(6,6,6,0.87)';
const textSecondaryColor = 'rgba(6,5,5,0.6)';
const textDisabledColor = 'rgba(12,12,12,0.38)';
const dividerColor = alpha('#000000', 0.12);



// 字体变量
const fontFamily = 'Poppins, Arial, sans-serif';

// 提取完整的排版配置对象
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

// 间距和形状
const spacing = 4;
const borderRadius = 4;

// 获取适当的对比色（白色或黑色）
const getAppropriateContrastText = (background: string): string => {
  return getContrastRatio(background, '#fff') > 4.5 ? '#fff' : '#111';
};

// 创建主题配置
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
    primary: {
      main: alpha(primaryBase, 1),
      light: alpha(primaryBase, 0.8),
      dark: alpha(primaryBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(primaryBase, 1)),
    },
    secondary: {
      main: alpha(secondaryBase, 1),
      light: alpha(secondaryBase, 0.8),
      dark: alpha(secondaryBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(secondaryBase, 1)),
    },
    error: {
      main: alpha(errorBase, 1),
      light: alpha(errorBase, 0.8),
      dark: alpha(errorBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(errorBase, 1)),
    },
    warning: {
      main: alpha(warningBase, 1),
      light: alpha(warningBase, 0.8),
      dark: alpha(warningBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(warningBase, 1)),
    },
    info: {
      main: alpha(infoBase, 1),
      light: alpha(infoBase, 0.8),
      dark: alpha(infoBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(infoBase, 1)),
    },
    success: {
      main: alpha(successBase, 1),
      light: alpha(successBase, 0.8),
      dark: alpha(successBase, 1.2),
      contrastText: getAppropriateContrastText(alpha(successBase, 1)),
    },
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

// 创建默认主题
const theme = createTheme(themeOptions);

export default theme;
