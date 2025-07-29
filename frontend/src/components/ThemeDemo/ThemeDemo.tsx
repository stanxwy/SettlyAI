import { Box, Button, Card, Container, Divider, Paper, Stack, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';

const ThemeDemo = () => {
  const theme = useTheme();
  
  // 颜色展示区块
  const ColorBlock = ({ color, name }: { color: string; name: string }) => (
    <Box 
      sx={{ 
        width: 100, 
        height: 100, 
        bgcolor: color, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: theme.palette.getContrastText(color),
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      {name}
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        主题样式演示
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* 调色板展示 */}
      <Typography variant="h4" gutterBottom>
        调色板
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>主要颜色</Typography>
            <Stack direction="row" spacing={2}>
              <ColorBlock color={theme.palette.primary.main} name="Primary" />
              <ColorBlock color={theme.palette.primary.light} name="Light" />
              <ColorBlock color={theme.palette.primary.dark} name="Dark" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>次要颜色</Typography>
            <Stack direction="row" spacing={2}>
              <ColorBlock color={theme.palette.secondary.main} name="Secondary" />
              <ColorBlock color={theme.palette.secondary.light} name="Light" />
              <ColorBlock color={theme.palette.secondary.dark} name="Dark" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>语义颜色</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <ColorBlock color={theme.palette.error.main} name="Error" />
              <ColorBlock color={theme.palette.warning.main} name="Warning" />
              <ColorBlock color={theme.palette.info.main} name="Info" />
              <ColorBlock color={theme.palette.success.main} name="Success" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>背景颜色</Typography>
            <Stack direction="row" spacing={2}>
              <Box sx={{ p: 2, border: '1px solid #ddd' }}>
                <ColorBlock color={theme.palette.background.default} name="Default" />
              </Box>
              <ColorBlock color={theme.palette.background.paper} name="Paper" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>文本颜色</Typography>
            <Stack spacing={1}>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  主要文本 (Text.Primary)
                </Typography>
              </Paper>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  次要文本 (Text.Secondary)
                </Typography>
              </Paper>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.disabled }}>
                  禁用文本 (Text.Disabled)
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 4 }} />
      
      {/* 排版展示 */}
      <Typography variant="h4" gutterBottom>
        排版
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h1" gutterBottom>h1. 标题</Typography>
        <Typography variant="h2" gutterBottom>h2. 标题</Typography>
        <Typography variant="h3" gutterBottom>h3. 标题</Typography>
        <Typography variant="h4" gutterBottom>h4. 标题</Typography>
        <Typography variant="h5" gutterBottom>h5. 标题</Typography>
        <Typography variant="h6" gutterBottom>h6. 标题</Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. 这是一段副标题文本。这是一段副标题文本。这是一段副标题文本。
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. 这是一段副标题文本。这是一段副标题文本。这是一段副标题文本。
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. 这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。
          这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. 这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。
          这是一段正文文本。这是一段正文文本。这是一段正文文本。这是一段正文文本。
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          按钮文本
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          说明文本
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          上标文本
        </Typography>
      </Paper>

      <Divider sx={{ my: 4 }} />
      
      {/* 组件展示 */}
      <Typography variant="h4" gutterBottom>
        组件展示
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>按钮</Typography>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
              <Button variant="contained" color="success">Success</Button>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>卡片</Typography>
            <Card sx={{ minWidth: 275, p: 2 }}>
              <Typography variant="h5" component="div">
                示例卡片
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                副标题
              </Typography>
              <Typography variant="body2">
                这是卡片内容。这是卡片内容。这是卡片内容。
                <br />
                这是卡片内容。这是卡片内容。
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ThemeDemo; 