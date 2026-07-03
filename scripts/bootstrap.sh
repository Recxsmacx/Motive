#!/usr/bin/env bash
# Bootstrap the Motive monorepo end-to-end.
#
# What it does:
#   1. Installs the motive-icons package build tooling
#   2. Builds the package (ESM + CJS + .d.ts)
#   3. Creates a fresh tarball via `npm pack`
#   4. Copies the tarball into frontend/public/ so it's downloadable
#   5. Installs the website dependencies (which consume the tarball)
#
# Run from the repo root:
#   ./scripts/bootstrap.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PKG="$ROOT/packages/motive-icons"
WEB="$ROOT/frontend"

echo "==> [1/5] Installing motive-icons build tooling"
cd "$PKG"
yarn install --silent

echo "==> [2/5] Building motive-icons (ESM + CJS + types)"
yarn build

echo "==> [3/5] Packing tarball"
rm -f "$PKG"/motive-icons-*.tgz
npm pack --silent

TARBALL="$(ls "$PKG"/motive-icons-*.tgz | head -n1)"
echo "    Tarball: $(basename "$TARBALL")"

echo "==> [4/5] Publishing tarball into frontend/public/"
mkdir -p "$WEB/public"
cp "$TARBALL" "$WEB/public/"

echo "==> [5/5] Installing website dependencies"
cd "$WEB"
[ -f .env ] || cp .env.example .env
yarn install

echo ""
echo "✅  Bootstrap complete."
echo ""
echo "Next steps:"
echo "  cd frontend && yarn start        # dev server at http://localhost:3000"
echo "  cd packages/motive-icons && yarn build && npm pack   # rebuild after edits"
