export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getInitialTheme() {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) {
                return savedTheme;
              }
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            
            const theme = getInitialTheme();
            document.documentElement.classList.add(theme);
          })();
        `,
      }}
    />
  )
}
