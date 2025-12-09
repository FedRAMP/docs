#!/bin/bash

# Run bun tests
echo "Running tests..."
cd tools && bun test

# Build markdown files
echo "Building markdown files..."
bun run build

# Build and run Zensical site
echo "Building Zensical site..."
cd site
zensical build --config-file zensical-20x.toml
zensical build --config-file zensical-rev5.toml

echo "Build complete. To preview the site run: zensical serve --config-file zensical-20x.toml"