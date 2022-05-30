import esbuildServe from 'esbuild-serve';

await esbuildServe(
    {
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || 'development'}"`,
      },
      bundle: true,
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
      entryPoints: ['src/index.jsx'],
      outdir: 'dist',
      loader: {
        '.svg': 'file',
      },
      minify: process.env.NODE_ENV === "production",
    },
    {
        // serve options (optional)
        port: 8080,
        live: true,
        root: 'dist'
    }
);
