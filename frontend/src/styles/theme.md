# MUI Theme 快速参考指南

> Material-UI v7.2.0 主题系统访问路径速查表

## 🎨 调色板 (Palette)

### 主要颜色

```typescript
// 主色调
theme.palette.primary.light; // #42a5f5
theme.palette.primary.main; // #1976d2
theme.palette.primary.dark; // #1565c0
theme.palette.primary.contrastText; // #fff

// 次要色调
theme.palette.secondary.light; // #ba68c8
theme.palette.secondary.main; // #9c27b0
theme.palette.secondary.dark; // #7b1fa2
theme.palette.secondary.contrastText; // #fff
```

### 语义颜色

```typescript
// 错误色
theme.palette.error.light; // #e57373
theme.palette.error.main; // #f44336
theme.palette.error.dark; // #d32f2f

// 警告色
theme.palette.warning.light; // #ffb74d
theme.palette.warning.main; // #ff9800
theme.palette.warning.dark; // #f57c00

// 信息色
theme.palette.info.light; // #64b5f6
theme.palette.info.main; // #2196f3
theme.palette.info.dark; // #1976d2

// 成功色
theme.palette.success.light; // #81c784
theme.palette.success.main; // #4caf50
theme.palette.success.dark; // #388e3c
```

### 通用颜色

```typescript
// 基础色
theme.palette.common.black; // #000
theme.palette.common.white; // #fff

// 背景色
theme.palette.background.default; // #fafafa (light) / #121212 (dark)
theme.palette.background.paper; // #fff (light) / #1e1e1e (dark)

// 文本色
theme.palette.text.primary; // rgba(0,0,0,0.87) (light)
theme.palette.text.secondary; // rgba(0,0,0,0.6) (light)
theme.palette.text.disabled; // rgba(0,0,0,0.38) (light)
```

## 📝 字体排版 (Typography)

### 标题样式

```typescript
theme.typography.h1; // 6rem (96px)
theme.typography.h2; // 3.75rem (60px)
theme.typography.h3; // 3rem (48px)
theme.typography.h4; // 2.125rem (34px)
theme.typography.h5; // 1.5rem (24px)
theme.typography.h6; // 1.25rem (20px)
```

### 正文样式

```typescript
theme.typography.subtitle1; // 1rem (16px)
theme.typography.subtitle2; // 0.875rem (14px)
theme.typography.body1; // 1rem (16px)
theme.typography.body2; // 0.875rem (14px)
theme.typography.caption; // 0.75rem (12px)
theme.typography.overline; // 0.75rem (12px)
theme.typography.button; // 0.875rem (14px)
```

## 📏 间距系统 (Spacing)

### 基础间距

```typescript
theme.spacing(0); // 0px
theme.spacing(1); // 8px
theme.spacing(2); // 16px
theme.spacing(3); // 24px
theme.spacing(4); // 32px
theme.spacing(5); // 40px
theme.spacing(6); // 48px
theme.spacing(7); // 56px
theme.spacing(8); // 64px
```

### 多参数用法

```typescript
theme.spacing(1, 2); // "8px 16px"
theme.spacing(1, 2, 3); // "8px 16px 24px"
theme.spacing(1, 2, 3, 4); // "8px 16px 24px 32px"
theme.spacing(1, 'auto'); // "8px auto"
```

## 📱 断点 (Breakpoints)

### 断点函数

```typescript
theme.breakpoints.up('sm'); // @media (min-width:600px)
theme.breakpoints.down('md'); // @media (max-width:899.95px)
theme.breakpoints.between('sm', 'lg'); // @media (min-width:600px) and (max-width:1199.95px)
theme.breakpoints.only('md'); // @media (min-width:900px) and (max-width:1199.95px)
```

## 🎭 阴影 (Shadows)

```typescript
theme.shadows[0]; // "none"
theme.shadows[1]; // "0px 2px 1px -1px rgba(0,0,0,0.2)..."
theme.shadows[2]; // "0px 3px 1px -2px rgba(0,0,0,0.2)..."
theme.shadows[3]; // "0px 3px 3px -2px rgba(0,0,0,0.2)..."
// ... 继续到 theme.shadows[24]
```

## 📚 层级 (Z-Index)

```typescript
theme.zIndex.mobileStepper; // 1000
theme.zIndex.speedDial; // 1050
theme.zIndex.appBar; // 1100
theme.zIndex.drawer; // 1200
theme.zIndex.modal; // 1300
```

## 💡 常用示例

### 在 sx 属性中使用

```typescript
<Box sx={{
  color: 'primary.main',
  bgcolor: 'background.paper',
  p: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up('md')]: {
    p: theme.spacing(3),
  }
}} />
```

### 在 styled 组件中使用

```typescript
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },

  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));
```

### 在 useTheme Hook 中使用

```typescript
import { useTheme } from '@mui/material/styles'

function MyComponent() {
  const theme = useTheme()

  return (
    <div style={{
      padding: theme.spacing(2),
      color: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
      }
    }}>
      Content
    </div>
  )
}
```

---

## 📖 相关文档

- [MUI 主题定制](https://mui.com/material-ui/customization/theming/)
- [调色板配置](https://mui.com/material-ui/customization/palette/)
- [字体排版](https://mui.com/material-ui/customization/typography/)
- [响应式设计](https://mui.com/material-ui/customization/breakpoints/)
- [间距系统](https://mui.com/material-ui/customization/spacing/)
