import { Box, Button, Card, Container, Divider, Paper, Stack, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';

const ThemeDemo = () => {
  const theme = useTheme();
  
  // Color display block
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
        Theme Style Demo
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Palette display */}
      <Typography variant="h4" gutterBottom>
        Palette
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>Primary Colors</Typography>
            <Stack direction="row" spacing={2}>
              <ColorBlock color={theme.palette.primary.main} name="Primary" />
              <ColorBlock color={theme.palette.primary.light} name="Light" />
              <ColorBlock color={theme.palette.primary.dark} name="Dark" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>Secondary Colors</Typography>
            <Stack direction="row" spacing={2}>
              <ColorBlock color={theme.palette.secondary.main} name="Secondary" />
              <ColorBlock color={theme.palette.secondary.light} name="Light" />
              <ColorBlock color={theme.palette.secondary.dark} name="Dark" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>Semantic Colors</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
              <ColorBlock color={theme.palette.error.main} name="Error" />
              <ColorBlock color={theme.palette.warning.main} name="Warning" />
              <ColorBlock color={theme.palette.info.main} name="Info" />
              <ColorBlock color={theme.palette.success.main} name="Success" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>Background Colors</Typography>
            <Stack direction="row" spacing={2}>
              <Box sx={{ p: 2, border: '1px solid #ddd' }}>
                <ColorBlock color={theme.palette.background.default} name="Default" />
              </Box>
              <ColorBlock color={theme.palette.background.paper} name="Paper" />
            </Stack>
          </Grid>
          
          <Grid size={12}>
            <Typography variant="h6" gutterBottom>Text Colors</Typography>
            <Stack spacing={1}>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  Primary Text (Text.Primary)
                </Typography>
              </Paper>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  Secondary Text (Text.Secondary)
                </Typography>
              </Paper>
              <Paper sx={{ p: 2 }}>
                <Typography sx={{ color: theme.palette.text.disabled }}>
                  Disabled Text (Text.Disabled)
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 4 }} />
      
      {/* Typography display */}
      <Typography variant="h4" gutterBottom>
        Typography
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h1" gutterBottom>h1. Heading</Typography>
        <Typography variant="h2" gutterBottom>h2. Heading</Typography>
        <Typography variant="h3" gutterBottom>h3. Heading</Typography>
        <Typography variant="h4" gutterBottom>h4. Heading</Typography>
        <Typography variant="h5" gutterBottom>h5. Heading</Typography>
        <Typography variant="h6" gutterBottom>h6. Heading</Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. This is a subtitle text. This is a subtitle text. This is a subtitle text.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. This is a subtitle text. This is a subtitle text. This is a subtitle text.
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. This is a body text. This is a body text. This is a body text. This is a body text. This is a body text.
          This is a body text. This is a body text. This is a body text. This is a body text.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. This is a body text. This is a body text. This is a body text. This is a body text. This is a body text.
          This is a body text. This is a body text. This is a body text. This is a body text.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          Button Text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Caption Text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          Overline Text
        </Typography>
      </Paper>

      <Divider sx={{ my: 4 }} />
      
      {/* Component display */}
      <Typography variant="h4" gutterBottom>
        Components Demo
      </Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>Buttons</Typography>
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
            <Typography variant="h6" gutterBottom>Cards</Typography>
            <Card sx={{ minWidth: 275, p: 2 }}>
              <Typography variant="h5" component="div">
                Example Card
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Subtitle
              </Typography>
              <Typography variant="body2">
                This is card content. This is card content. This is card content.
                <br />
                This is card content. This is card content.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ThemeDemo; 