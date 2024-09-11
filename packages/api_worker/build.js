import esbuild from 'esbuild';
import path from 'path';
import fs from 'fs';

// Output directory for your site
const outputDir = path.join(process.cwd(), '../../publish_out');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

esbuild.build({
  entryPoints: ['src/worker.ts'],  // Entry point for your TypeScript file
  bundle: true,
  outfile: path.join(outputDir, '_worker.js'),  // Output to _worker.js in your site's output directory
  platform: 'browser',  // Target Cloudflare Workers
  target: ['es2020'],   // Optional: Target specific JS version
  format: 'esm'         // ES module output
}).then(() => {
  console.log('Worker built successfully!');
}).catch((error) => {
  console.error('Error during build:', error);
});
