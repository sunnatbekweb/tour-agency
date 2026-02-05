import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "src")],
		additionalData: `
      @use "styles/abstracts/variables" as *;
      @use "styles/abstracts/mixins" as *;
    `,
	},
}

export default nextConfig
